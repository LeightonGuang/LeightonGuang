import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

interface Props {
	children: ReactNode
}

export default function SmoothScroll({ children }: Props) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.08,
			smoothWheel: true,
			wheelMultiplier: 1,
			eventsTarget: document.documentElement,
			respectReducedMotion: false
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
