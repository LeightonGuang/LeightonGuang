import Hero from './Hero'
import { useRef } from 'react'
import Projects from './Projects'
import PageLayout from '../PageLayout'
import CustomCursor from '../CustomCursor'

const HomePage = () => {
	const linkedinElement = useRef(null)
	const githubElement = useRef(null)
	const themeButtonElement = useRef(null)

	return (
		<PageLayout themeRef={themeButtonElement} linkedinRef={linkedinElement} githubRef={githubElement}>
			<CustomCursor themeButtonElement={themeButtonElement} linkedinElement={linkedinElement} githubElement={githubElement} />
			<Hero />
			<Projects />
		</PageLayout>
	)
}

export default HomePage
