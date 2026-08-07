import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

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

	const iconClass = (active: boolean) =>
		twMerge(
			clsx(
				'absolute size-4 transition-all duration-300',
				active ? 'scale-100 opacity-100 blur-0' : 'scale-75 opacity-0 blur-sm'
			)
		)

	return (
		<div className="fixed top-4 z-50 flex w-full items-center justify-between px-4">
			<a className="" href="/">
				LEIGHTON GUANG
			</a>

			<div className="flex items-center gap-4 text-sm">
				<a href="https://www.linkedin.com/in/leighton-guang" target="_blank">
					LINKEDIN
				</a>

				<a href="https://github.com/LeightonGuang" target="_blank">
					GITHUB
				</a>

				<button
					className="hover:bg-nav-hover relative flex size-5 items-center justify-center rounded-full transition-colors"
					aria-label="Toggle theme"
					data-cursor-target
					onClick={toggleTheme}
				>
					<Sun className={iconClass(theme !== 'dark')} />
					<Moon className={iconClass(theme === 'dark')} />
				</button>
			</div>
		</div>
	)
}
