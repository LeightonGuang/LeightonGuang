import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Moon, Sun } from 'lucide-react'
import { forwardRef, useEffect, useState } from 'react'

export const Navbar = forwardRef<HTMLDivElement, {}>((_, themeRef) => {
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
			'absolute size-4 transition-all duration-300',
			active ? 'scale-100 opacity-100 blur-0' : 'scale-75 opacity-0 blur-sm'
		)

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

				<div className="pointer-events-none relative flex size-5 items-center justify-center">
					<Sun className={iconClass(theme === 'light')} />
					<Moon className={iconClass(theme === 'dark')} />

					<div
						ref={themeRef}
						onClick={toggleTheme}
						className="pointer-events-auto absolute inset-0 cursor-pointer rounded-full transition-transform duration-300 hover:scale-[3]"
					/>
				</div>
			</div>
		</div>
	)
})
