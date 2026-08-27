import Magnetic from '../Magnetic'
import type { Project } from '../../../lib/getProjects'
import { AnimatePresence, motion } from 'framer-motion'
import { formatProjectDate } from '../../../lib/formatProjectDate'

type ProjectRowProps = {
	project: Project
	open: boolean
	onClick: () => void
}

const ProjectRow = ({ project, open, onClick }: ProjectRowProps) => {
	const formattedProjectDate = formatProjectDate(project.date)

	return (
		<div className="relative border-b border-zinc-500">
			<div
				className="grid grid-cols-[minmax(0,1fr)_auto] px-0 py-1 text-sm transition-all duration-300 hover:cursor-none! hover:px-2 hover:text-white md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto]"
				onClick={onClick}
				data-cursor="project-row"
			>
				<div className="min-w-0 py-1 whitespace-nowrap">{project.title}</div>
				<div className="hidden min-w-0 truncate py-1 whitespace-nowrap md:block">{project.url}</div>
				<div className="shrink-0 py-1 whitespace-nowrap">{formattedProjectDate}</div>
			</div>

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: 'auto',
							opacity: 1,
							transition: {
								height: {
									type: 'spring',
									stiffness: 220,
									damping: 18,
									mass: 0.8
								},
								opacity: {
									duration: 0.15
								}
							}
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: {
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1]
								},
								opacity: {
									duration: 0.15
								}
							}
						}}
						className="overflow-hidden"
					>
						<div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-2 md:gap-8">
							<div className="min-w-0">
								<p className="wrap-break-words text-xl">{project.description}</p>

								<div className="mt-4 flex gap-4 text-sm">
									<Magnetic>
										<a
											className={`active:bg-primary rounded-full px-3 py-1 transition-colors duration-200 active:text-white ${
												project.url
													? 'bg-text/10 hover:cursor-none! hover:bg-transparent hover:text-white'
													: 'bg-text/5 pointer-events-none cursor-not-allowed opacity-40'
											}`}
											href={project.url || undefined}
											target={project.url ? '_blank' : undefined}
											rel={project.url ? 'noreferrer' : undefined}
											aria-disabled={!project.url}
											data-cursor="project-site"
										>
											Site
										</a>
									</Magnetic>

									<Magnetic>
										<a
											className={`rounded-full px-3 py-1 transition-colors duration-200 ${
												project.github
													? 'bg-text/10 hover:cursor-none! hover:bg-transparent hover:text-white'
													: 'bg-text/5 pointer-events-none cursor-not-allowed opacity-40'
											}`}
											href={project.github || undefined}
											target={project.github ? '_blank' : undefined}
											rel={project.github ? 'noreferrer' : undefined}
											aria-disabled={!project.github}
											data-cursor="project-github"
										>
											Github
										</a>
									</Magnetic>
								</div>

								<ul className="mt-4 flex flex-col pl-4 text-sm">
									{project.technologies.map((tech) => (
										<li key={tech} className="list-disc rounded px-2 py-1">
											{tech}
										</li>
									))}
								</ul>
							</div>

							<div className="grid min-w-0 grid-cols-2 gap-2">
								{project.images?.length ? (
									project.images.map((image, index) => (
										<div key={image} className="bg-text/5 aspect-video overflow-hidden rounded-lg">
											<img
												src={image}
												alt={`${project.title} screenshot ${index + 1}`}
												className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
											/>
										</div>
									))
								) : (
									<div className="bg-text/5 flex aspect-video items-center justify-center rounded-lg text-sm opacity-40">
										No images
									</div>
								)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default ProjectRow
