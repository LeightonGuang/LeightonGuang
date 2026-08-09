import Magnetic from './Magnetic'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

const MotionSun = motion.create(Sun)
const MotionMoon = motion.create(Moon)

export const Navbar = forwardRef<HTMLButtonElement, {}>((_, themeRef) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	function applyTheme(theme: string) {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}

	function toggleTheme() {
		const nextTheme = theme === 'dark' ? 'light' : 'dark'

		setTheme(nextTheme)
		applyTheme(nextTheme)
		localStorage.setItem('theme', nextTheme)
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')

		const initialTheme =
			savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

		setTheme(initialTheme as 'light' | 'dark')
		applyTheme(initialTheme)
	}, [])

	return (
		<div className="fixed top-4 z-50 flex w-full items-center justify-between px-4">
			<a href="/">LEIGHTON GUANG</a>

			<div className="flex items-center gap-4 text-sm">
				<a href="https://www.linkedin.com/in/leighton-guang" target="_blank" rel="noreferrer">
					LINKEDIN
				</a>

				<a href="https://github.com/LeightonGuang" target="_blank" rel="noreferrer">
					GITHUB
				</a>

				<Magnetic>
					<div className="pointer-events-none relative flex size-5 items-center justify-center">
						<AnimatePresence mode="wait" initial={false}>
							{theme === 'light' ? (
								<MotionMoon
									key="moon"
									className="absolute size-4"
									initial={{ scale: 0.75, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.75, opacity: 0 }}
									transition={{ duration: 0.2 }}
								/>
							) : (
								<MotionSun
									key="sun"
									className="absolute size-4"
									initial={{ scale: 0.75, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.75, opacity: 0 }}
									transition={{ duration: 0.2 }}
								/>
							)}
						</AnimatePresence>

						<button
							ref={themeRef}
							onClick={toggleTheme}
							className="pointer-events-auto absolute inset-0 cursor-pointer rounded-full transition-transform duration-300 hover:scale-[3]"
						/>
					</div>
				</Magnetic>
			</div>
		</div>
	)
})
