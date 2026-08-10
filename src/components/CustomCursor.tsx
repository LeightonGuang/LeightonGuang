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
	const isNavLink = activeTarget === 'linkedin' || activeTarget === 'github'
	const isCardDvd = activeTarget === 'card-dvd'
	const isProjectRow = activeTarget === 'project-row'
	const isProjectLink = activeTarget === 'project-site' || activeTarget === 'project-github'

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

			if (isProjectRow) {
				mouseX.set(centerX)
				mouseY.set(centerY)
				return
			}

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

	return (
		<motion.div
			className="bg-primary pointer-events-none fixed hidden md:block"
			style={{ left: smoothMouseX, top: smoothMouseY, translateX: '-50%', translateY: '-50%' }}
			animate={{
				width:
					isHome || isNavLink || isCardDvd || isProjectLink || isProjectRow
						? targetDimensions.width
						: cursorSize,
				height:
					isHome || isNavLink || isCardDvd || isProjectLink || isProjectRow
						? targetDimensions.height
						: cursorSize,
				borderRadius:
					isHome || isNavLink ? 4 : isProjectLink ? 9999 : isProjectRow || isCardDvd ? 2 : 10,
				scale: isTheme ? 1.5 : isNavLink ? 1.25 : isHome ? 1.1 : isCardDvd ? 1.05 : 1
			}}
			transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
		/>
	)
}

export default CustomCursor
