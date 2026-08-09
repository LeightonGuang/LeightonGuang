import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = ({
	themeButtonElement
}: {
	themeButtonElement: React.RefObject<HTMLDivElement | null>
}) => {
	const [isHoverThemeButton, setIsHoverThemeButton] = useState<boolean>(false)

	const cursorSize = isHoverThemeButton ? 40 : 20
	const mouse = { x: useMotionValue(0), y: useMotionValue(0) }

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
	const smoothMouse = { x: useSpring(mouse.x, smoothOptions), y: useSpring(mouse.y, smoothOptions) }

	function handleMouseMove(e: MouseEvent) {
		const { clientX, clientY } = e

		const themeButton = themeButtonElement.current

		if (!themeButton) return
		const { left, top, width, height } = themeButton.getBoundingClientRect()
		const themeButtonCenter = { x: left + width / 2, y: top + height / 2 }

		if (isHoverThemeButton) {
			mouse.x.set(themeButtonCenter.x)
			mouse.y.set(themeButtonCenter.y)
		} else {
			mouse.x.set(clientX)
			mouse.y.set(clientY)
		}
	}

	function manageMouseOverThemeButton() {
		setIsHoverThemeButton(true)
	}

	function manageMouseLeaveThemeButton() {
		setIsHoverThemeButton(false)
	}

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
		themeButtonElement.current?.addEventListener('mouseover', manageMouseOverThemeButton)
		themeButtonElement.current?.addEventListener('mouseout', manageMouseLeaveThemeButton)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			themeButtonElement.current?.removeEventListener('mouseover', manageMouseOverThemeButton)
			themeButtonElement.current?.removeEventListener('mouseout', manageMouseLeaveThemeButton)
		}
	})

	return (
		<motion.div
			className="bg-primary pointer-events-none fixed rounded-full"
			style={{
				left: smoothMouse.x,
				top: smoothMouse.y,
				width: cursorSize,
				height: cursorSize,
				translateX: '-50%',
				translateY: '-50%'
			}}
			animate={{ width: cursorSize, height: cursorSize }}
		></motion.div>
	)
}

export default CustomCursor
