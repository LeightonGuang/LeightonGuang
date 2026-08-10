import { Navbar } from './Navbar'
import SmoothScroll from './SmoothScroll'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SmoothScroll>
			<Navbar />

			{children}
		</SmoothScroll>
	)
}

export default PageLayout
