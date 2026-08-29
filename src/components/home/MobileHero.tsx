import { useEffect, useRef, useState } from 'react'

type OrientationEventWithPermission = typeof DeviceOrientationEvent & {
	requestPermission?: () => Promise<'granted' | 'denied'>
}

type Orientation = {
	alpha: number
	beta: number
	gamma: number
}

type Quaternion = {
	w: number
	x: number
	y: number
	z: number
}

type Physics = {
	x: number
	y: number
	rotation: number

	velocityX: number
	velocityY: number
	rotationVelocity: number
}

const DEG_TO_RAD = Math.PI / 180
const RAD_TO_DEG = 180 / Math.PI

const MobileHero = () => {
	const [enabled, setEnabled] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const orientation = useRef<Orientation>({
		alpha: 0,
		beta: 0,
		gamma: 0
	})

	const center = useRef<Orientation>({
		alpha: 0,
		beta: 0,
		gamma: 0
	})

	const [offset, setOffset] = useState({
		x: 0,
		y: 0,
		rotation: 0
	})

	const previousRoll = useRef<number | null>(null)
	const accumulatedRotation = useRef(0)

	// Physics

	const physics = useRef<Physics>({
		x: 0,
		y: 0,
		rotation: 0,

		velocityX: 0,
		velocityY: 0,
		rotationVelocity: 0
	})

	// Physics settings

	// Higher = follows the phone more aggressively.
	const springStrength = 0.055

	// Lower = more swing / momentum.
	const damping = 0.88

	// Rotation has slightly different physics.
	const rotationSpring = 0.045
	const rotationDamping = 0.91

	// How much sensor movement creates additional momentum.
	const movementMomentum = 0.12

	// Convert DeviceOrientation
	// to quaternion

	const orientationToQuaternion = (alpha: number, beta: number, gamma: number): Quaternion => {
		const x = beta * DEG_TO_RAD
		const y = gamma * DEG_TO_RAD
		const z = alpha * DEG_TO_RAD

		const cX = Math.cos(x / 2)
		const cY = Math.cos(y / 2)
		const cZ = Math.cos(z / 2)

		const sX = Math.sin(x / 2)
		const sY = Math.sin(y / 2)
		const sZ = Math.sin(z / 2)

		return {
			w: cX * cY * cZ - sX * sY * sZ,
			x: sX * cY * cZ - cX * sY * sZ,
			y: cX * sY * cZ + sX * cY * sZ,
			z: cX * cY * sZ + sX * sY * cZ
		}
	}

	// Rotate vector by quaternion

	const rotateVector = (q: Quaternion, v: { x: number; y: number; z: number }) => {
		const qx = q.x
		const qy = q.y
		const qz = q.z
		const qw = q.w

		const ix = qw * v.x + qy * v.z - qz * v.y
		const iy = qw * v.y + qz * v.x - qx * v.z
		const iz = qw * v.z + qx * v.y - qy * v.x
		const iw = -qx * v.x - qy * v.y - qz * v.z

		return {
			x: ix * qw + iw * -qx + iy * -qz - iz * -qy,
			y: iy * qw + iw * -qy + iz * -qx - ix * -qz,
			z: iz * qw + iw * -qz + ix * -qy - iy * -qx
		}
	}

	// Calculate screen rotation

	const getScreenRotation = (current: Orientation, centre: Orientation) => {
		const currentQ = orientationToQuaternion(current.alpha, current.beta, current.gamma)

		const centerQ = orientationToQuaternion(centre.alpha, centre.beta, centre.gamma)

		const up = {
			x: 0,
			y: 1,
			z: 0
		}

		const currentUp = rotateVector(currentQ, up)
		const centerUp = rotateVector(centerQ, up)
		const normal = rotateVector(currentQ, {
			x: 0,
			y: 0,
			z: 1
		})

		const dot = currentUp.x * centerUp.x + currentUp.y * centerUp.y + currentUp.z * centerUp.z

		const cross = {
			x: centerUp.y * currentUp.z - centerUp.z * currentUp.y,
			y: centerUp.z * currentUp.x - centerUp.x * currentUp.z,
			z: centerUp.x * currentUp.y - centerUp.y * currentUp.x
		}

		const crossDotNormal = cross.x * normal.x + cross.y * normal.y + cross.z * normal.z
		const angle = Math.atan2(crossDotNormal, dot)
		return angle * RAD_TO_DEG
	}

	// Enable motion

	const enableMotion = async () => {
		setError(null)

		try {
			if (typeof window === 'undefined' || !('DeviceOrientationEvent' in window)) {
				setError('Device orientation is not supported on this device.')

				return
			}

			const OrientationEvent = window.DeviceOrientationEvent as OrientationEventWithPermission

			if (typeof OrientationEvent.requestPermission === 'function') {
				const permission = await OrientationEvent.requestPermission()

				if (permission !== 'granted') {
					setError('Motion permission was denied.')

					return
				}
			}

			setEnabled(true)
		} catch (error) {
			console.error('Motion permission error:', error)

			setError('Could not enable device motion.')
		}
	}

	// Listen for orientation

	useEffect(() => {
		if (!enabled) return

		const handleOrientation = (event: DeviceOrientationEvent) => {
			orientation.current = {
				alpha: event.alpha ?? 0,
				beta: event.beta ?? 0,
				gamma: event.gamma ?? 0
			}
		}

		window.addEventListener('deviceorientation', handleOrientation, {
			passive: true
		})

		return () => {
			window.removeEventListener('deviceorientation', handleOrientation)
		}
	}, [enabled])

	// Animation + Physics

	useEffect(() => {
		if (!enabled) return

		let initialized = false
		let frame: number

		let previousTargetX = 0
		let previousTargetY = 0
		let previousTargetRotation = 0

		const animate = () => {
			const current = orientation.current

			// Initialise center

			if (!initialized) {
				center.current = {
					...current
				}

				initialized = true

				previousRoll.current = 0
				accumulatedRotation.current = 0

				physics.current = {
					x: 0,
					y: 0,
					rotation: 0,

					velocityX: 0,
					velocityY: 0,
					rotationVelocity: 0
				}

				previousTargetX = 0
				previousTargetY = 0
				previousTargetRotation = 0
			}

			// SENSOR TARGET

			const relativeGamma = current.gamma - center.current.gamma

			const relativeBeta = current.beta - center.current.beta

			const targetX = Math.max(-1, Math.min(1, relativeGamma / 30))

			const targetY = Math.max(-1, Math.min(1, relativeBeta / 30))

			// ROTATION TARGET

			const roll = getScreenRotation(current, center.current)

			if (previousRoll.current !== null) {
				let delta = roll - previousRoll.current

				if (delta > 180) delta -= 360
				if (delta < -180) delta += 360

				accumulatedRotation.current += delta
			}

			previousRoll.current = roll

			const targetRotation = accumulatedRotation.current

			// SENSOR MOVEMENT

			const sensorVelocityX = targetX - previousTargetX
			const sensorVelocityY = targetY - previousTargetY
			const sensorRotationVelocity = targetRotation - previousTargetRotation

			previousTargetX = targetX
			previousTargetY = targetY
			previousTargetRotation = targetRotation

			// PHYSICS

			const state = physics.current

			// Add momentum from phone movement

			state.velocityX += sensorVelocityX * movementMomentum
			state.velocityY += sensorVelocityY * movementMomentum
			state.rotationVelocity += sensorRotationVelocity * movementMomentum

			// Spring toward target

			const forceX = (targetX - state.x) * springStrength

			const forceY = (targetY - state.y) * springStrength

			const rotationForce = (targetRotation - state.rotation) * rotationSpring

			state.velocityX += forceX
			state.velocityY += forceY
			state.rotationVelocity += rotationForce

			// Damping

			state.velocityX *= damping
			state.velocityY *= damping

			state.rotationVelocity *= rotationDamping

			// Integrate velocity

			state.x += state.velocityX
			state.y += state.velocityY

			state.rotation += state.rotationVelocity

			// Output

			setOffset({
				x: state.x,
				y: state.y,
				rotation: state.rotation
			})

			frame = requestAnimationFrame(animate)
		}

		frame = requestAnimationFrame(animate)

		return () => {
			cancelAnimationFrame(frame)
		}
	}, [enabled])

	// Recenter

	const recenter = () => {
		center.current = {
			...orientation.current
		}

		previousRoll.current = 0
		accumulatedRotation.current = 0

		physics.current = {
			x: 0,
			y: 0,
			rotation: 0,

			velocityX: 0,
			velocityY: 0,
			rotationVelocity: 0
		}

		setOffset({
			x: 0,
			y: 0,
			rotation: 0
		})
	}

	return (
		<section className="relative flex h-full w-full items-center justify-center overflow-hidden">
			{/* CARD */}

			<div className="relative flex w-[78%] max-w-85 flex-col items-center perspective-[1000px]">
				<div
					className="relative aspect-[1.75] w-full transform-3d"
					style={{
						transform: `
							rotateZ(${offset.rotation}deg)
							rotateX(${offset.y * -10}deg)
							rotateY(${offset.x * 10}deg)
						`
					}}
				>
					{/* MAIN BUSINESS CARD */}

					<div
						className="absolute inset-0 overflow-hidden rounded-md bg-white text-black shadow-[0_25px_80px_var(--color-primary)]"
						style={{
							transform: 'translateZ(100px) scale(1)'
						}}
						onClick={recenter}
					>
						<div className="flex h-full flex-col justify-between p-[7%]">
							<div>
								<h2 className="text-[clamp(18px,6vw,28px)] leading-tight font-bold">
									Leighton Guang
								</h2>

								<p className="mt-1 text-[clamp(11px,3vw,15px)] text-black/60">
									Full Stack React Developer
								</p>
							</div>

							<p className="text-[clamp(9px,2.5vw,13px)]">leighton.guang@icloud.com</p>
						</div>
					</div>
				</div>
			</div>

			{/* ENABLE MOTION */}

			<div className="absolute inset-x-0 bottom-16 z-999 flex justify-center px-4">
				{!enabled ? (
					<button
						className="text-text active:bg-primary rounded-full bg-white/50 px-2 py-1 text-sm font-medium shadow-sm transition-all active:scale-95 active:text-white dark:bg-white/25"
						onClick={enableMotion}
					>
						Click me!
					</button>
				) : (
					<span className="text-muted/50 text-xs">Reset gyro by tapping the card</span>
				)}
			</div>

			{/* RECENTER */}

			{enabled && (
				<div className="text-muted absolute bottom-12 z-999 flex w-full items-center justify-between px-2 text-[0.625rem]">
					{/* <div className="grid grid-cols-2">
						<div>alpha: {orientation.current.alpha.toFixed(1)}</div>
						<div>beta: {orientation.current.beta.toFixed(1)}</div>
						<div>gamma: {orientation.current.gamma.toFixed(1)}</div>
						<div>rotation: {offset.rotation.toFixed(1)}°</div>
						<div>x: {offset.x.toFixed(2)}</div>
						<div>y: {offset.y.toFixed(2)}</div>
					</div> */}
				</div>
			)}

			{/* ERROR */}

			{error && (
				<div className="absolute inset-x-4 bottom-8 z-999 rounded-lg bg-red-500/90 p-4 text-center text-sm text-white backdrop-blur">
					{error}
				</div>
			)}
		</section>
	)
}

export default MobileHero
