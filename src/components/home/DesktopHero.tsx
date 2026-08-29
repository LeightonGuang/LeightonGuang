import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, type PanInfo } from 'framer-motion'

const DesktopHero = () => {
	const containerRef = useRef<HTMLElement | null>(null)
	const cardRef = useRef<HTMLDivElement | null>(null)

	const controls = useAnimationControls()

	const position = useRef({
		x: 0,
		y: 0
	})

	// Current DVD velocity
	const dvdVelocity = useRef({
		x: 30,
		y: 24
	})

	// Original DVD speed
	const baseVelocity = useRef({
		x: 30,
		y: 24
	})

	// Flick momentum
	const throwVelocity = useRef({
		x: 0,
		y: 0
	})

	const dragging = useRef(false)
	const isThrown = useRef(false)

	// Physics settings

	// How quickly a thrown card loses momentum.
	const friction = 0.975
	// How much of the drag release velocity is applied.
	const throwStrength = 0.4
	// When thrown velocity becomes this small,
	// return to normal DVD movement.
	const stopThreshold = 2
	// How quickly the DVD slows down while hovered.
	const hoverFriction = 0.94
	// How quickly the DVD returns to normal speed
	// after leaving the card.
	const resumeStrength = 0.08

	// DVD animation loop

	useEffect(() => {
		let frame: number

		const loop = () => {
			const container = containerRef.current
			const card = cardRef.current

			if (container && card && !dragging.current) {
				const maxX = container.clientWidth - card.offsetWidth
				const maxY = container.clientHeight - card.offsetHeight

				const hoveredElement = document.querySelector('[data-cursor="card-dvd"]:hover')
				const isHovered = hoveredElement === card

				// Thrown card

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
							y: 0
						}
					}
				}

				// Normal DVD movement
				else {
					if (isHovered) {
						// Gradually slow down while hovering.
						dvdVelocity.current.x *= hoverFriction
						dvdVelocity.current.y *= hoverFriction

						// Prevent tiny floating-point movement.
						if (Math.abs(dvdVelocity.current.x) < 0.1) {
							dvdVelocity.current.x = 0
						}

						if (Math.abs(dvdVelocity.current.y) < 0.1) {
							dvdVelocity.current.y = 0
						}
					} else {
						// Gradually restore the original speed
						// after leaving the card.
						dvdVelocity.current.x +=
							(baseVelocity.current.x - dvdVelocity.current.x) * resumeStrength

						dvdVelocity.current.y +=
							(baseVelocity.current.y - dvdVelocity.current.y) * resumeStrength
					}

					position.current.x += dvdVelocity.current.x / 60
					position.current.y += dvdVelocity.current.y / 60
				}

				// Horizontal bounce

				if (position.current.x <= 0 || position.current.x >= maxX) {
					position.current.x = Math.max(0, Math.min(position.current.x, maxX))

					if (isThrown.current) {
						throwVelocity.current.x *= -1
					} else {
						dvdVelocity.current.x *= -1
						baseVelocity.current.x *= -1
					}
				}

				// Vertical bounce

				if (position.current.y <= 0 || position.current.y >= maxY) {
					position.current.y = Math.max(0, Math.min(position.current.y, maxY))

					if (isThrown.current) {
						throwVelocity.current.y *= -1
					} else {
						dvdVelocity.current.y *= -1
						baseVelocity.current.y *= -1
					}
				}

				// Update Framer Motion

				controls.set({
					x: position.current.x,
					y: position.current.y
				})
			}

			frame = requestAnimationFrame(loop)
		}

		frame = requestAnimationFrame(loop)

		return () => {
			cancelAnimationFrame(frame)
		}
	}, [controls])

	// Keep card inside viewport
	// after resize

	useEffect(() => {
		const handleResize = () => {
			const container = containerRef.current
			const card = cardRef.current

			if (!container || !card) return

			const maxX = container.clientWidth - card.offsetWidth
			const maxY = container.clientHeight - card.offsetHeight

			position.current.x = Math.min(Math.max(position.current.x, 0), maxX)

			position.current.y = Math.min(Math.max(position.current.y, 0), maxY)

			controls.set({
				x: position.current.x,
				y: position.current.y
			})
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [controls])

	return (
		<section ref={containerRef} className="relative flex h-full w-full overflow-hidden">
			<motion.div
				ref={cardRef}
				className="absolute z-100 w-72 rounded-xs bg-white p-6 text-black shadow-xl hover:cursor-none"
				data-cursor="card-dvd"
				animate={controls}
				drag
				dragMomentum={false}
				dragElastic={0.15}
				onDragStart={() => {
					dragging.current = true
					isThrown.current = false

					throwVelocity.current = {
						x: 0,
						y: 0
					}
				}}
				onDragEnd={(_, info: PanInfo) => {
					dragging.current = false

					throwVelocity.current = {
						x: info.velocity.x * throwStrength,
						y: info.velocity.y * throwStrength
					}

					isThrown.current = true
				}}
				onUpdate={(latest) => {
					if (dragging.current) {
						position.current.x = Number(latest.x ?? 0)
						position.current.y = Number(latest.y ?? 0)
					}
				}}
			>
				<h2 className="text-xl font-bold">Leighton Guang</h2>
				<p className="mt-2">Full Stack React Developer</p>
				<p className="mt-6 text-sm">leighton.guang@icloud.com</p>
			</motion.div>
		</section>
	)
}

export default DesktopHero
