import { useEffect, useState } from 'react'

type DeviceOrientationEventWithPermission = typeof DeviceOrientationEvent & {
	requestPermission?: () => Promise<'granted' | 'denied'>
}

export default function ParallaxCircles() {
	const [enabled, setEnabled] = useState(false)
	const [tilt, setTilt] = useState({
		alpha: 0,
		beta: 0,
		gamma: 0
	})

	const enableMotion = async () => {
		try {
			const OrientationEvent = DeviceOrientationEvent as DeviceOrientationEventWithPermission

			if (typeof OrientationEvent.requestPermission === 'function') {
				const permission = await OrientationEvent.requestPermission()

				console.log('Permission:', permission)

				if (permission !== 'granted') return
			}

			setEnabled(true)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (!enabled) return

		const handleOrientation = (event: DeviceOrientationEvent) => {
			console.log({
				alpha: event.alpha,
				beta: event.beta,
				gamma: event.gamma
			})

			setTilt({
				alpha: event.alpha ?? 0,
				beta: event.beta ?? 0,
				gamma: event.gamma ?? 0
			})
		}

		window.addEventListener('deviceorientation', handleOrientation)

		return () => {
			window.removeEventListener('deviceorientation', handleOrientation)
		}
	}, [enabled])

	const layers = Array.from({ length: 12 })

	// Convert phone tilt into movement.
	const x = Math.max(-1, Math.min(1, tilt.gamma / 30))
	const y = Math.max(-1, Math.min(1, tilt.beta / 30))

	return (
		<div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
			{!enabled && (
				<button
					onClick={enableMotion}
					className="absolute z-999 rounded-full bg-white px-6 py-3 font-medium text-black transition-all active:scale-90"
				>
					Enable motion
				</button>
			)}

			<div className="absolute top-4 left-4 z-999 font-mono text-xs text-white">
				<div>enabled: {String(enabled)}</div>
				<div>beta: {tilt.beta.toFixed(1)}</div>
				<div>gamma: {tilt.gamma.toFixed(1)}</div>
			</div>

			<div className="relative size-65 perspective-midrange">
				<div
					className="relative h-full w-full transform-3d"
					style={{
						transform: `
							rotateX(${y * -35}deg)
							rotateY(${x * 35}deg)
						`
					}}
				>
					{layers.map((_, i) => {
						const depth = i * 7

						// More movement for the layers further away
						const offsetX = x * i * 3
						const offsetY = y * i * 3

						return (
							<div
								key={i}
								className="absolute inset-0 size-65 rounded-full border border-white/20 bg-[radial-gradient(circle_at_35%_30%,#fff,#888_45%,#222_75%,#000)] shadow-[0_0_30px_rgba(255,255,255,0.08),inset_-20px_-20px_40px_rgba(0,0,0,0.5)]"
								style={{
									transform: `
										translate3d(
											${offsetX}px,
											${offsetY}px,
											${depth}px
										)
									`,
									opacity: 1 - i * 0.04
								}}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
