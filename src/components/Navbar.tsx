import Magnetic from './Magnetic'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionSun = motion.create(Sun)
const MotionMoon = motion.create(Moon)

export const Navbar = () => {
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
		<nav className="fixed top-4 z-200 flex w-full justify-between px-4 md:items-center">
			<Magnetic>
				<a
					className="active:text-primary transition-colors duration-200 hover:cursor-none! hover:text-white md:active:text-white"
					href="/"
					data-cursor="home"
				>
					LEIGHTON GUANG
				</a>
			</Magnetic>

			<div className="flex flex-col items-end gap-2 text-sm md:flex-row md:items-center md:gap-4">
				<Magnetic>
					<a
						className="active:text-primary transition-colors duration-200 hover:cursor-none! hover:text-white md:active:text-white"
						href="https://www.linkedin.com/in/leighton-guang"
						target="_blank"
						rel="noreferrer"
						data-cursor="linkedin"
					>
						LINKEDIN
					</a>
				</Magnetic>

				<Magnetic>
					<a
						className="active:text-primary transition-colors duration-200 hover:cursor-none! hover:text-white md:active:text-white"
						href="/contact"
						data-cursor="contact"
					>
						CONTACT
					</a>
				</Magnetic>

				<Magnetic>
					<a
						className="active:text-primary transition-colors duration-200 hover:cursor-none! hover:text-white md:active:text-white"
						href="https://github.com/LeightonGuang"
						target="_blank"
						rel="noreferrer"
						data-cursor="github"
					>
						GITHUB
					</a>
				</Magnetic>

				<Magnetic>
					<div className="active:text-primary pointer-events-none relative flex size-5 items-center justify-center transition-colors duration-200 hover:text-white">
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
							title={theme === 'light' ? 'Dark mode' : 'Light mode'}
							onClick={toggleTheme}
							className="pointer-events-auto absolute inset-0 cursor-pointer rounded-full transition-transform duration-300 hover:scale-[3] hover:cursor-none!"
							data-cursor="theme"
						/>
					</div>
				</Magnetic>
			</div>
		</nav>
	)
}
