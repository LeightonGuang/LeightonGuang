import { useEffect, useState } from 'react'

interface TypingTextProps {
	text: string
	speed?: number
	variation?: number
	delay?: number
	showCursor?: boolean
	className?: string
}

const TypingTextAnimation = ({
	text,
	speed = 50,
	variation = 0.75,
	delay = 0,
	showCursor = true,
	className = ''
}: TypingTextProps) => {
	const [displayedText, setDisplayedText] = useState('')
	const [isComplete, setIsComplete] = useState(false)

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>
		let cancelled = false

		setDisplayedText('')
		setIsComplete(false)

		const typeNextCharacter = (index: number) => {
			if (cancelled) return

			if (index >= text.length) {
				setIsComplete(true)
				return
			}

			setDisplayedText(text.slice(0, index + 1))

			const minDelay = speed * (1 - variation)
			const maxDelay = speed * (1 + variation)

			// Bias randomness toward the faster end.
			const random = Math.random()
			let nextDelay = minDelay + (maxDelay - minDelay) * Math.pow(random, 2)

			const character = text[index]

			// Small natural pause after spaces
			if (character === ' ') {
				nextDelay += Math.random() * 80
			}

			// Small natural pause after punctuation
			if (/[,.!?;:]/.test(character)) {
				nextDelay += 50 + Math.random() * 150
			}

			timeout = setTimeout(() => typeNextCharacter(index + 1), Math.max(30, nextDelay))
		}

		timeout = setTimeout(() => {
			typeNextCharacter(0)
		}, delay)

		return () => {
			cancelled = true
			clearTimeout(timeout)
		}
	}, [text, speed, variation, delay])

	return (
		<span className={className}>
			{displayedText}

			{showCursor && (
				<span
					aria-hidden="true"
					className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-current ${
						isComplete ? 'animate-cursor-blink' : ''
					}`}
				/>
			)}
		</span>
	)
}

export default TypingTextAnimation
