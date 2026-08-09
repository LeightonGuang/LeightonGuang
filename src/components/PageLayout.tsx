import { Navbar } from './Navbar'
import SmoothScroll from './SmoothScroll'

const PageLayout = ({
	children,
	themeRef
}: {
	children: React.ReactNode
	themeRef: React.RefObject<HTMLButtonElement | null>
}) => {
	return (
		<SmoothScroll>
			<Navbar ref={themeRef} />

			{children}
		</SmoothScroll>
	)
}

export default PageLayout
