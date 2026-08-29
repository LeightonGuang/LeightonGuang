import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorTarget =
	| 'home'
	| 'linkedin'
	| 'github'
	| 'theme'
	| 'card-dvd'
	| 'project-row'
	| 'project-site'
	| 'project-github'
	| 'close-image'
	| 'contact'
	| 'contact-email'
	| null

type TargetDimensions = {
	width: number
	height: number
}

const CustomCursor = () => {
	const activeElement = useRef<HTMLElement | null>(null)
	const [activeTarget, setActiveTarget] = useState<CursorTarget>(null)

	const isHome = activeTarget === 'home'
	const isTheme = activeTarget === 'theme'
	const isNavLink =
		activeTarget === 'linkedin' || activeTarget === 'github' || activeTarget === 'contact'
	const isContactEmail = activeTarget === 'contact-email'
	const isCardDvd = activeTarget === 'card-dvd'
	const isProjectRow = activeTarget === 'project-row'
	const isProjectLink = activeTarget === 'project-site' || activeTarget === 'project-github'
	const isCloseImage = activeTarget === 'close-image'
	const cursorSize = 20

	const [targetDimensions, setTargetDimensions] = useState<TargetDimensions>({
		width: cursorSize,
		height: cursorSize
	})

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const smoothMouseX = useSpring(mouseX, {
		damping: 20,
		stiffness: 300,
		mass: 0.5
	})

	const smoothMouseY = useSpring(mouseY, {
		damping: 20,
		stiffness: 300,
		mass: 0.5
	})

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e

			const element = activeElement.current

			if (!element) {
				mouseX.set(clientX)
				mouseY.set(clientY)
				return
			}

			const { left, top, width, height } = element.getBoundingClientRect()

			const centerX = left + width / 2
			const centerY = top + height / 2

			// Completely snap the cursor to the center
			// of project rows and the close button.
			if (isProjectRow || isCloseImage) {
				mouseX.set(centerX)
				mouseY.set(centerY)
				return
			}

			// Normal magnetic behaviour.
			const strength = 0.1

			mouseX.set(centerX + (clientX - centerX) * strength)
			mouseY.set(centerY + (clientY - centerY) * strength)
		}

		const handleMouseOver = (e: MouseEvent) => {
			const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')

			if (!target) return

			const cursorTarget = target.dataset.cursor as Exclude<CursorTarget, null>

			activeElement.current = target

			setActiveTarget(cursorTarget)

			const { width, height } = target.getBoundingClientRect()

			setTargetDimensions({
				width,
				height
			})
		}

		const handleMouseOut = (e: MouseEvent) => {
			const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')

			if (!target || activeElement.current !== target) return

			const relatedTarget = e.relatedTarget as Node | null

			if (relatedTarget && target.contains(relatedTarget)) return

			activeElement.current = null

			setActiveTarget(null)

			setTargetDimensions({
				width: cursorSize,
				height: cursorSize
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseover', handleMouseOver)
		window.addEventListener('mouseout', handleMouseOut)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseover', handleMouseOver)
			window.removeEventListener('mouseout', handleMouseOut)
		}
	}, [])

	const isLargeTarget =
		isHome ||
		isNavLink ||
		isCardDvd ||
		isProjectLink ||
		isProjectRow ||
		isContactEmail ||
		isCloseImage

	return (
		<motion.div
			className="bg-primary pointer-events-none fixed hidden md:block"
			style={{
				left: smoothMouseX,
				top: smoothMouseY,
				translateX: '-50%',
				translateY: '-50%',
				zIndex: isCloseImage ? 310 : 99
			}}
			animate={{
				width: isLargeTarget ? targetDimensions.width : cursorSize,
				height: isLargeTarget ? targetDimensions.height : cursorSize,

				borderRadius:
					isHome || isNavLink
						? 6
						: isProjectLink
							? 9999
							: isProjectRow || isCardDvd
								? 2
								: isCloseImage
									? 9999
									: 10,

				scale: isTheme ? 1.5 : isNavLink ? 1.25 : isHome ? 1.1 : isCardDvd ? 1.05 : 1
			}}
			transition={{
				duration: 0.2,
				ease: [0.4, 0, 0.2, 1]
			}}
		/>
	)
}

export default CustomCursor
