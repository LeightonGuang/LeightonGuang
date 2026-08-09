import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

interface Props {
	children: ReactNode
}

export default function SmoothScroll({ children }: Props) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			wheelMultiplier: 1
		})

		let rafId: number

		function raf(time: number) {
			lenis.raf(time)
			rafId = requestAnimationFrame(raf)
		}

		rafId = requestAnimationFrame(raf)

		return () => {
			cancelAnimationFrame(rafId)
			lenis.destroy()
		}
	}, [])

	return <>{children}</>
}
