import Magnetic from '../Magnetic'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence, motion } from 'framer-motion'
import { formatProjectDate } from '../../../lib/formatProjectDate'

import type { Project } from '../../../lib/getProjects'

type ProjectRowProps = {
	project: Project
	open: boolean
	onClick: () => void
	onImageClick: (image: string, index: number) => void
}

const ProjectRow = ({ project, open, onClick, onImageClick }: ProjectRowProps) => {
	const formattedProjectDate = formatProjectDate(project.date)

	return (
		<div className="relative z-100 border-b border-zinc-500">
			<div
				className="active:bg-primary relative grid grid-cols-[minmax(0,1fr)_auto] py-1 text-sm transition-all duration-250 hover:cursor-none! hover:px-2 hover:text-white active:text-white md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_auto]"
				onClick={onClick}
				data-cursor="project-row"
			>
				<div className="min-w-0 py-1 whitespace-nowrap">{project.title}</div>
				<div className="hidden min-w-0 py-1 whitespace-nowrap md:block">{project.type}</div>
				<div className="hidden min-w-0 truncate py-1 whitespace-nowrap md:block">
					{project.url || '-'}
				</div>
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
									duration: 0.75,
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
									duration: 0.75,
									ease: [0.22, 1, 0.36, 1]
								},
								opacity: {
									duration: 0.15
								}
							}
						}}
						className="relative z-100 overflow-hidden"
					>
						<div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-2 md:gap-8">
							{/* Project information */}
							<div className="min-w-0">
								<p className="wrap-break-words text-xl">{project.description}</p>

								<div className="mt-4 flex gap-4 text-sm">
									<Magnetic>
										<a
											className={twMerge(
												`rounded-full px-3 py-1 transition-colors duration-200`,
												'active:bg-primary active:text-white',
												project.url
													? 'bg-text/10 hover:cursor-none! hover:bg-transparent hover:text-white'
													: 'bg-text/5 cursor-not-allowed! opacity-40'
											)}
											href={project.url || undefined}
											target={project.url ? '_blank' : undefined}
											rel={project.url ? 'noreferrer' : undefined}
											aria-disabled={!project.url}
											data-cursor="project-site"
											title={project.url ? undefined : 'No link available'}
											onClick={(e) => e.stopPropagation()}
										>
											Site
										</a>
									</Magnetic>

									<Magnetic>
										<a
											className={twMerge(
												`rounded-full px-3 py-1 transition-colors duration-200`,
												'active:bg-primary active:text-white',
												project.url
													? 'bg-text/10 hover:cursor-none! hover:bg-transparent hover:text-white'
													: 'bg-text/5 cursor-not-allowed! opacity-40'
											)}
											href={project.github || undefined}
											target={project.github ? '_blank' : undefined}
											rel={project.github ? 'noreferrer' : undefined}
											aria-disabled={!project.github}
											data-cursor="project-github"
											title={project.github ? undefined : 'No Github link available'}
											onClick={(e) => e.stopPropagation()}
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
										<motion.div
											key={image}
											layoutId={`project-image-${project.title}-${index}`}
											className="bg-text/5 group relative aspect-video cursor-zoom-in overflow-hidden rounded-lg"
											onClick={(e) => {
												e.stopPropagation()

												onImageClick(image, index)
											}}
										>
											<img
												src={image}
												alt={`${project.title} screenshot ${index + 1}`}
												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
											/>
										</motion.div>
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
