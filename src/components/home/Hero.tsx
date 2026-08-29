import MobileHero from './MobileHero'
import DesktopHero from './DesktopHero'

const Hero = () => {
	return (
		<section className="relative h-dvh w-full overflow-hidden">
			<div className="hidden h-full w-full md:block">
				<DesktopHero />
			</div>

			<div className="block h-full w-full md:hidden">
				<MobileHero />
			</div>
		</section>
	)
}

export default Hero
