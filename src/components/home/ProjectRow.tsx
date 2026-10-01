import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence, motion, useInView } from 'framer-motion'

import Magnetic from '../Magnetic'
import { formatProjectDate } from '../../../lib/formatProjectDate'

import type { Project } from '../../../lib/getProjects'

type ProjectRowProps = {
	project: Project
	open: boolean
	onClick: () => void
	onImageClick: (image: string, index: number) => void
	index: number
}

const ProjectRow = ({ project, open, onClick, onImageClick, index }: ProjectRowProps) => {
	const formattedProjectDate = formatProjectDate(project.date)

	const ref = useRef<HTMLDivElement>(null)

	const isInView = useInView(ref, {
		once: true,
		amount: 0.15
	})

	return (
		<motion.div
			ref={ref}
			initial={{
				opacity: 0,
				y: 40
			}}
			className="relative z-100 overflow-hidden border-b border-zinc-500"
			animate={
				isInView
					? {
							opacity: 1,
							y: 0
						}
					: {
							opacity: 0,
							y: 40
						}
			}
			transition={{
				delay: isInView ? index * 0.1 : 0,
				type: 'spring',
				stiffness: 150,
				damping: 30,
				mass: 0.7
			}}
		>
			<div
				onClick={onClick}
				data-cursor="project-row"
				className="active:bg-primary relative grid grid-cols-[minmax(0,1fr)_auto] py-1 text-sm transition-all duration-250 hover:cursor-none! hover:px-4 hover:text-white active:px-2 active:text-white md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_auto] md:active:bg-transparent"
			>
				<div className="min-w-0 py-1 font-medium whitespace-nowrap">{project.title}</div>

				<div className="hidden min-w-0 py-1 whitespace-nowrap md:block">
					{project.types.join(', ')}
				</div>

				<div className="hidden min-w-0 truncate py-1 whitespace-nowrap md:block">
					{project.url || '-'}
				</div>

				<div className="shrink-0 py-1 whitespace-nowrap">{formattedProjectDate}</div>
			</div>

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						className="relative z-100"
						initial={{ height: 0, opacity: 0 }}
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
						animate={{
							height: 'auto',
							opacity: 1,
							transition: {
								height: {
									duration: 0.75,
									type: 'spring',
									stiffness: 220,
									damping: 30,
									mass: 0.5
								},
								opacity: {
									duration: 0.2
								}
							}
						}}
					>
						<div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-2 md:gap-8">
							<div className="min-w-0">
								<div className="text-text mb-2 block text-sm md:hidden">
									Type: {project.types.join(', ')}
								</div>

								<p className="wrap-break-words text-xl">{project.description}</p>

								<div className="mt-4 flex gap-4 text-sm">
									<Magnetic disabled={!project.url}>
										<a
											aria-disabled={!project.url}
											href={project.url || undefined}
											onClick={(e) => e.stopPropagation()}
											target={project.url ? '_blank' : undefined}
											data-cursor={project.url && 'project-site'}
											rel={project.url ? 'noreferrer' : undefined}
											title={project.url ? undefined : 'No link available'}
											className={twMerge(
												'rounded-full px-3 py-1 transition-colors duration-100',
												project.url
													? 'bg-text/10 active:bg-primary hover:cursor-none! hover:bg-transparent hover:text-white active:text-white'
													: 'bg-text/5 cursor-not-allowed! opacity-40'
											)}
										>
											Site
										</a>
									</Magnetic>

									<Magnetic disabled={!project.github}>
										<a
											aria-disabled={!project.github}
											href={project.github || undefined}
											onClick={(e) => e.stopPropagation()}
											target={project.github ? '_blank' : undefined}
											rel={project.github ? 'noreferrer' : undefined}
											data-cursor={project.github && 'project-github'}
											title={project.github ? undefined : 'No Github link available'}
											className={twMerge(
												'rounded-full px-3 py-1 transition-colors duration-200',
												project.github
													? 'bg-text/10 active:bg-primary hover:cursor-none! hover:bg-transparent hover:text-white active:text-white'
													: 'bg-text/5 cursor-not-allowed! opacity-40'
											)}
										>
											Github
										</a>
									</Magnetic>

									{project.backendGithub && (
										<Magnetic disabled={!project.backendGithub}>
											<a
												target="_blank"
												rel="noreferrer"
												href={project.backendGithub}
												onClick={(e) => e.stopPropagation()}
												data-cursor={project.backendGithub && 'project-github'}
												className={twMerge(
													'rounded-full px-3 py-1 whitespace-nowrap transition-colors duration-200',
													'bg-text/10 hover:cursor-none! hover:bg-transparent hover:text-white',
													'active:bg-primary active:text-white'
												)}
											>
												Backend Github
											</a>
										</Magnetic>
									)}
								</div>

								<div className="flex justify-between">
									{project.technologies.length > 0 && (
										<div className="mt-4 w-full">
											<h2 className="text-medium">Stack</h2>

											<ul className="flex flex-col pl-4 text-sm">
												{project.technologies.map((tech) => (
													<li key={tech} className="list-disc rounded px-2 py-1">
														{tech}
													</li>
												))}
											</ul>
										</div>
									)}

									{project.backendTechnologies && (
										<div className="mt-4 w-full">
											<h2 className="text-medium">Backend</h2>

											<ul className="flex flex-col pl-4 text-sm">
												{project.backendTechnologies.map((tech) => (
													<li key={tech} className="list-disc rounded px-2 py-1">
														{tech}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>

							<div className="grid h-max min-w-0 grid-cols-2 gap-2 md:gap-4">
								{project.images?.length ? (
									project.images.map((image, index) => (
										<motion.div
											key={image}
											layoutId={`project-image-${project.title}-${index}`}
											onClick={(e) => {
												e.stopPropagation()
												onImageClick(image, index)
											}}
											className="bg-text/5 group relative aspect-video cursor-zoom-in overflow-hidden"
										>
											<img
												src={image}
												alt={`${project.title} screenshot ${index + 1}`}
												className="aspect-video h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
		</motion.div>
	)
}

export default ProjectRow
