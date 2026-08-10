import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, type PanInfo } from 'framer-motion'

const Hero = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const cardRef = useRef<HTMLDivElement>(null)

	const controls = useAnimationControls()

	const position = useRef({
		x: 0,
		y: 0,
	})

	// Constant DVD movement
	const dvdVelocity = useRef({
		x: 30,
		y: 24,
	})

	// Flick momentum
	const throwVelocity = useRef({
		x: 0,
		y: 0,
	})

	const dragging = useRef(false)
	const isThrown = useRef(false)

	const friction = 0.975
	const throwStrength = 0.4
	const stopThreshold = 2

	useEffect(() => {
		let frame: number

		const loop = () => {
			const container = containerRef.current
			const card = cardRef.current

			if (container && card && !dragging.current) {
				const maxX = container.clientWidth - card.offsetWidth
				const maxY = container.clientHeight - card.offsetHeight

				// If user has thrown it, use throw momentum
				if (isThrown.current) {
					position.current.x += throwVelocity.current.x / 60
					position.current.y += throwVelocity.current.y / 60

					throwVelocity.current.x *= friction
					throwVelocity.current.y *= friction

					if (
						Math.abs(throwVelocity.current.x) < stopThreshold &&
						Math.abs(throwVelocity.current.y) < stopThreshold
					) {
						isThrown.current = false
						throwVelocity.current = {
							x: 0,
							y: 0,
						}
					}
				} else {
					// Normal DVD movement
					position.current.x += dvdVelocity.current.x / 60
					position.current.y += dvdVelocity.current.y / 60
				}

				// Bounce horizontally
				if (
					position.current.x <= 0 ||
					position.current.x >= maxX
				) {
					position.current.x = Math.max(
						0,
						Math.min(position.current.x, maxX)
					)

					if (isThrown.current) {
						throwVelocity.current.x *= -1
					} else {
						dvdVelocity.current.x *= -1
					}
				}

				// Bounce vertically
				if (
					position.current.y <= 0 ||
					position.current.y >= maxY
				) {
					position.current.y = Math.max(
						0,
						Math.min(position.current.y, maxY)
					)

					if (isThrown.current) {
						throwVelocity.current.y *= -1
					} else {
						dvdVelocity.current.y *= -1
					}
				}

				controls.set({
					x: position.current.x,
					y: position.current.y,
				})
			}

			frame = requestAnimationFrame(loop)
		}

		frame = requestAnimationFrame(loop)

		return () => cancelAnimationFrame(frame)
	}, [controls])

	// Keep inside viewport after resize
	useEffect(() => {
		const handleResize = () => {
			const container = containerRef.current
			const card = cardRef.current

			if (!container || !card) return

			const maxX = container.clientWidth - card.offsetWidth
			const maxY = container.clientHeight - card.offsetHeight

			position.current.x = Math.min(
				Math.max(position.current.x, 0),
				maxX
			)

			position.current.y = Math.min(
				Math.max(position.current.y, 0),
				maxY
			)

			controls.set({
				x: position.current.x,
				y: position.current.y,
			})
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [controls])

	return (
		<section
			ref={containerRef}
			className="relative flex h-dvh w-full overflow-hidden"
		>
			<motion.div
				ref={cardRef}
				animate={controls}
				drag
				dragMomentum={false}
				dragElastic={0.15}
				onDragStart={() => {
					dragging.current = true
					isThrown.current = false

					throwVelocity.current = {
						x: 0,
						y: 0,
					}
				}}
				onDragEnd={(_, info: PanInfo) => {
				dragging.current = false

				throwVelocity.current = {
						x: info.velocity.x * throwStrength,
						y: info.velocity.y * throwStrength,
				}

				isThrown.current = true
				}}
				onUpdate={(latest) => {
					if (dragging.current) {
						position.current.x = Number(latest.x ?? 0)
						position.current.y = Number(latest.y ?? 0)
					}
				}}
				className="
					absolute
					w-72
					cursor-grab
					rounded-xs
					bg-white
					p-6
					text-black
					shadow-xl
					active:cursor-grabbing
				"
			>
				<h2 className="text-xl font-bold">
					Leighton Guang
				</h2>

				<p className="mt-2">
					Full Stack React Developer
				</p>

				<p className="mt-6 text-sm">
					leighton.guang@icloud.com
				</p>
			</motion.div>
		</section>
	)
}

export default Hero