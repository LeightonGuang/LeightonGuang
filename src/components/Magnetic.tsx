import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

type MagneticProps = {
	children: React.ReactNode
	className?: string
}

const Magnetic = ({ children, className }: MagneticProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const [position, setPosition] = useState({ x: 0, y: 0 })

	function handleMouse(e: React.MouseEvent) {
		const { clientX, clientY } = e

		if (!ref.current) return
		const { height, width, left, top } = ref.current.getBoundingClientRect()

		const middleX = clientX - (left + width / 2)
		const middleY = clientY - (top + height / 2)

		setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
	}

	function reset() {
		setPosition({ x: 0, y: 0 })
	}

	const { x, y } = position

	return (
		<motion.div
			className={className}
			style={{ position: 'relative' }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x, y }}
			transition={{ type: 'spring', stiffness: 200, damping: 20 }}
		>
			{children}
		</motion.div>
	)
}

export default Magnetic
