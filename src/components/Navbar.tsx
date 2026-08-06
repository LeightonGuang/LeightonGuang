import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
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
		<button
			onClick={toggleTheme}
			className="hover:bg-nav-hover rounded-lg p-2 transition-colors"
			aria-label="Toggle theme"
		>
			{theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
		</button>
	)
}
