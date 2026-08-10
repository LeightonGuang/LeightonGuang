import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorTarget = 'linkedin' | 'github' | 'theme' | null

type CustomCursorProps = {
	linkedinElement: React.RefObject<HTMLAnchorElement | null>
	githubElement: React.RefObject<HTMLAnchorElement | null>
	themeButtonElement: React.RefObject<HTMLButtonElement | null>
}

type TargetDimensions = {
	width: number
	height: number
}

type CursorElement = {
	element: HTMLElement
	name: Exclude<CursorTarget, null>
}

const CustomCursor = ({
	linkedinElement,
	githubElement,
	themeButtonElement
}: CustomCursorProps) => {
	const activeElement = useRef<HTMLElement | null>(null)

	const [activeTarget, setActiveTarget] = useState<CursorTarget>(null)

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

	function handleMouseMove(e: MouseEvent) {
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

		const distanceX = clientX - centerX
		const distanceY = clientY - centerY

		const strength = 0.1

		mouseX.set(centerX + distanceX * strength)
		mouseY.set(centerY + distanceY * strength)
	}

	useEffect(() => {
		const targets: CursorElement[] = []

		if (linkedinElement.current) {
			targets.push({
				element: linkedinElement.current,
				name: 'linkedin'
			})
		}

		if (githubElement.current) {
			targets.push({
				element: githubElement.current,
				name: 'github'
			})
		}

		if (themeButtonElement.current) {
			targets.push({
				element: themeButtonElement.current,
				name: 'theme'
			})
		}

		const listeners = targets.map(({ element, name }) => {
			const handleMouseEnter = () => {
				activeElement.current = element
				setActiveTarget(name)

				const { width, height } = element.getBoundingClientRect()

				setTargetDimensions({
					width,
					height
				})
			}

			const handleMouseLeave = () => {
				if (activeElement.current !== element) {
					return
				}

				activeElement.current = null
				setActiveTarget(null)

				setTargetDimensions({
					width: cursorSize,
					height: cursorSize
				})
			}

			element.addEventListener('mouseenter', handleMouseEnter)

			element.addEventListener('mouseleave', handleMouseLeave)

			return {
				element,
				handleMouseEnter,
				handleMouseLeave
			}
		})

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)

			listeners.forEach(({ element, handleMouseEnter, handleMouseLeave }) => {
				element.removeEventListener('mouseenter', handleMouseEnter)

				element.removeEventListener('mouseleave', handleMouseLeave)
			})
		}
	}, [linkedinElement, githubElement, themeButtonElement])

	const isTheme = activeTarget === 'theme'

	const isRectangle = activeTarget === 'linkedin' || activeTarget === 'github'

	return (
		<motion.div
			className="bg-primary pointer-events-none fixed"
			style={{ left: smoothMouseX, top: smoothMouseY, translateX: '-50%', translateY: '-50%' }}
			animate={{
				width: isRectangle ? targetDimensions.width : cursorSize,
				height: isRectangle ? targetDimensions.height : cursorSize,
				borderRadius: isRectangle ? 4 : 10,
				scale: isTheme ? 1.5 : isRectangle ? 1.25 : 1
			}}
			transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
		/>
	)
}

export default CustomCursor
