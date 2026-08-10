import { Navbar } from './Navbar'
import SmoothScroll from './SmoothScroll'

const PageLayout = ({
	children,
	linkedinRef,
	githubRef,
	themeRef
}: {
	children: React.ReactNode
	linkedinRef: React.RefObject<HTMLAnchorElement | null>
	githubRef: React.RefObject<HTMLAnchorElement | null>
	themeRef: React.RefObject<HTMLButtonElement | null>
}) => {
	return (
		<SmoothScroll>
			<Navbar linkedinRef={linkedinRef} githubRef={githubRef} themeRef={themeRef} />

			{children}
		</SmoothScroll>
	)
}

export default PageLayout
