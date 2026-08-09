import Hero from './Hero'
import { useRef } from 'react'
import Projects from './Projects'
import PageLayout from '../PageLayout'
import CustomCursor from '../CustomCursor'

const HomePage = () => {
	const themeButtonElement = useRef(null)

	return (
		<PageLayout themeRef={themeButtonElement}>
			<CustomCursor themeButtonElement={themeButtonElement} />
			<Hero />
			<Projects />
		</PageLayout>
	)
}

export default HomePage
