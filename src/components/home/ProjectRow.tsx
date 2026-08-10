import { useState } from 'react'
import type { Project } from '../../../lib/getProjects'
import { AnimatePresence, motion } from 'framer-motion'
import { formatProjectDate } from '../../../lib/formatProjectDate'

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
									<a
										className={`rounded-full px-3 py-1 ${
											project.url
												? 'bg-text/10'
												: 'bg-text/5 pointer-events-none cursor-not-allowed opacity-40'
										}`}
										href={project.url || undefined}
										target={project.url ? '_blank' : undefined}
										rel={project.url ? 'noreferrer' : undefined}
										aria-disabled={!project.url}
									>
										Site
									</a>

									<a
										className={`rounded-full px-3 py-1 ${
											project.github
												? 'bg-text/10'
												: 'bg-text/5 pointer-events-none cursor-not-allowed opacity-40'
										}`}
										href={project.github || undefined}
										target={project.github ? '_blank' : undefined}
										rel={project.github ? 'noreferrer' : undefined}
										aria-disabled={!project.github}
									>
										Github
									</a>
								</div>

								<ul className="mt-4 flex flex-col pl-4 text-sm">
									{project.technologies.map((tech) => (
										<li key={tech} className="list-disc rounded px-2 py-1">
											{tech}
										</li>
									))}
								</ul>
							</div>

							<div className="flex min-w-0 items-center justify-center">Some Image</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default ProjectRow
