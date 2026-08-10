import { useState } from 'react'
import type { Project } from '../../../lib/getProjects'
import { AnimatePresence, motion } from 'framer-motion'
import { formatProjectDate } from '../../../lib/formatProjectDate'
import Magnetic from '../Magnetic'

const ProjectRow = ({ project }: { project: Project }) => {
	const [open, setOpen] = useState(false)

	function handleRowClick() {
		setOpen((prev) => !prev)
	}

	const formattedProjectDate = formatProjectDate(project.date)

	return (
		<div className="border-b border-zinc-500">
			<div
				onClick={handleRowClick}
				className="hover:bg-text hover:text-background grid cursor-pointer grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] text-sm"
			>
				<div className="min-w-0 py-1">{project.title}</div>

				<div className="min-w-0 overflow-x-auto py-1 whitespace-nowrap">{project.url}</div>

				<div className="py-1 whitespace-nowrap">{formattedProjectDate}</div>
			</div>

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							height: {
								duration: 0.35,
								ease: [0.22, 1, 0.36, 1]
							},
							opacity: {
								duration: 0.2
							}
						}}
						className="overflow-hidden"
					>
						<div className="grid w-full grid-cols-1 gap-6 p-4 md:grid-cols-2">
							<div className="min-w-0">
								<p className="wrap-break-words text-xl">{project.description}</p>

								<div className="mt-4 flex gap-4 text-sm">
									<Magnetic>
										<a
											className={`rounded-full px-3 py-1 transition-colors duration-200 ${
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
