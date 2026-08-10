import Hero from './Hero'
import Projects from './Projects'
import PageLayout from '../PageLayout'
import CustomCursor from '../CustomCursor'

const HomePage = () => {
	return (
		<PageLayout>
			<CustomCursor />
			<Hero />
			<Projects />
		</PageLayout>
	)
}

export default HomePage
