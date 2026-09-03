import { motion } from 'framer-motion'
import PageLayout from '../PageLayout'
import CustomCursor from '../CustomCursor'
import TypingTextAnimation from '../TypingTextAnimation'

const ContactPage = () => {
	return (
		<PageLayout>
			<CustomCursor />

			<main className="mx-4 flex h-dvh flex-col justify-center md:mx-12 lg:mx-24">
				<div className="mx-auto w-full max-w-5xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center"
					>
						<p className="text-muted mb-6 text-xs tracking-widest uppercase">Get in touch</p>

						<h1 className="text-4xl font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
							Let&apos;s work
							<br />
							<span className="text-primary">together.</span>
						</h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="text-muted mx-auto mt-8 max-w-lg text-lg leading-relaxed"
						>
							Have a project in mind, a position to fill, or just want to say hi? I&apos;d love to
							hear from you.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="mt-12"
						>
							<span className="text-muted mb-3 block text-xs tracking-widest uppercase">Email</span>

							<a
								href="mailto:leighton.guang@icloud.com"
								className="text-text relative z-200 inline-block px-4 py-2 text-xl font-medium transition-colors duration-300 hover:cursor-none! hover:text-white sm:text-3xl lg:text-4xl"
								data-cursor="contact-email"
							>
								<TypingTextAnimation text="leighton.guang@icloud.com" delay={800} speed={50} />
							</a>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="text-muted mt-12 text-sm"
						>
							I&apos;ll get back to you as soon as possible.
						</motion.p>
					</motion.div>
				</div>
			</main>
		</PageLayout>
	)
}

export default ContactPage
