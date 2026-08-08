import { useEffect, useRef, useState } from 'react'
import {
	motion,
	useMotionValue,
	useSpring,
	transform
} from 'framer-motion'


export default function CustomCursor() {
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const cursorX = useSpring(mouseX, {
		stiffness: 300,
		damping: 25,
		mass: 0.5
	})

	const cursorY = useSpring(mouseY, {
		stiffness: 300,
		damping: 25,
		mass: 0.5
	})


	const rotate = useMotionValue(0)
	const scaleX = useMotionValue(1)
	const scaleY = useMotionValue(1)


	const activeTarget = useRef<HTMLElement | null>(null)


	const [hovering, setHovering] =
		useState(false)



	useEffect(() => {
		document.documentElement.style.cursor = 'none'


		const targets =
			document.querySelectorAll<HTMLElement>(
				'[data-cursor-target]'
			)


		targets.forEach((element) => {

			element.addEventListener(
				'mouseenter',
				() => {
					activeTarget.current = element
					setHovering(true)
				}
			)


			element.addEventListener(
				'mouseleave',
				() => {
					activeTarget.current = null
					setHovering(false)

					scaleX.set(1)
					scaleY.set(1)
					rotate.set(0)
				}
			)

		})


		const move = (e: MouseEvent) => {

			const target =
				activeTarget.current


			if (!target) {

				mouseX.set(
					e.clientX - 10
				)

				mouseY.set(
					e.clientY - 10
				)

				return
			}


			const rect =
				target.getBoundingClientRect()


			const center = {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2
			}


			const distance = {
				x: e.clientX - center.x,
				y: e.clientY - center.y
			}


			// magnetic movement
			const strength = 0.15


			mouseX.set(
				e.clientX -
				10 +
				distance.x * strength
			)

			mouseY.set(
				e.clientY -
				10 +
				distance.y * strength
			)


			// rotation
			const angle =
				Math.atan2(
					distance.y,
					distance.x
				)


			rotate.set(
				angle * (180 / Math.PI)
			)


			// stretching
			const absDistance =
				Math.max(
					Math.abs(distance.x),
					Math.abs(distance.y)
				)


			scaleX.set(
				transform(
					absDistance,
					[0, 100],
					[1, 1.35]
				)
			)


			scaleY.set(
				transform(
					absDistance,
					[0, 100],
					[1, 0.75]
				)
			)

		}


		window.addEventListener(
			'mousemove',
			move
		)


		return () => {
			document.documentElement.style.cursor = ''

			window.removeEventListener(
				'mousemove',
				move
			)
		}

	}, [])



	return (
		<motion.div
			className="
				pointer-events-none
				fixed
				left-0
				top-0
				z-50
				size-5
				rounded-full
				bg-purple-500/20
				border
				border-purple-400/50
				backdrop-blur-sm
			"

			style={{
				x: cursorX,
				y: cursorY,
				rotate,
				scaleX,
				scaleY
			}}

			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 20
			}}
		/>
	)
}