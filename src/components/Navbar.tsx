import Magnetic from './Magnetic'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionSun = motion.create(Sun)
const MotionMoon = motion.create(Moon)

type NavbarProps = {
	linkedinRef: React.RefObject<HTMLAnchorElement | null>
	githubRef: React.RefObject<HTMLAnchorElement | null>
	themeRef: React.RefObject<HTMLButtonElement | null>
}

export const Navbar = ({ themeRef, linkedinRef, githubRef }: NavbarProps) => {
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
		<nav className="fixed top-4 z-50 flex w-full items-center justify-between px-4">
			<Magnetic>
				<a href="/">LEIGHTON GUANG</a>
			</Magnetic>

			<div className="flex items-center gap-4 text-sm">
				<Magnetic>
					<a
						className="hover:cursor-none!"
						ref={linkedinRef}
						href="https://www.linkedin.com/in/leighton-guang"
						target="_blank"
						rel="noreferrer"
					>
						LINKEDIN
					</a>
				</Magnetic>

				<Magnetic>
					<a
						className="hover:cursor-none!"
						ref={githubRef}
						href="https://github.com/LeightonGuang"
						target="_blank"
						rel="noreferrer"
					>
						GITHUB
					</a>
				</Magnetic>

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
							title={theme === 'light' ? 'Dark mode' : 'Light mode'}
							onClick={toggleTheme}
							className="pointer-events-auto absolute inset-0 cursor-pointer rounded-full transition-transform duration-300 hover:scale-[3] hover:cursor-none!"
						/>
					</div>
				</Magnetic>
			</div>
		</nav>
	)
}
