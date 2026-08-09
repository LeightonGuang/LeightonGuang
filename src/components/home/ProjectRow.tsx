import { useState } from 'react'
import type { Project } from '../../../lib/getProjects'

const ProjectRow = ({ project }: { project: Project }) => {
	const [open, setOpen] = useState(false)

	function handleRowClick() {
		setOpen((prev) => !prev)
	}

	return (
		<>
			<tr className="hover:bg-text hover:text-background cursor-pointer text-sm">
				<td className="py-1" onClick={handleRowClick}>
					{project.title}
				</td>
				<td className="py-1" onClick={handleRowClick}>
					{project.url}
				</td>
				<td className="py-1 whitespace-nowrap" onClick={handleRowClick}>
					{project.date}
				</td>
			</tr>

			{open && (
				<tr className="">
					<td colSpan={3}>
						<div className="flex gap-4 p-4">
							<div className="md:w-1/2">
								<p className="text-xl">{project.description}</p>

								<div className="mt-4 flex gap-4 text-sm">
									{project.url && (
										<a
											className="bg-text/10 rounded-full px-3 py-1"
											href={project.url}
											target="_blank"
										>
											Site
										</a>
									)}

									{project.github && (
										<a
											className="bg-text/10 rounded-full px-3 py-1"
											href={project.github}
											target="_blank"
										>
											Github
										</a>
									)}
								</div>

								<ul className="mt-4 flex flex-col pl-4 text-sm">
									{project.technologies.map((tech) => (
										<li key={tech} className="list-disc rounded px-2 py-1">
											{tech}
										</li>
									))}
								</ul>
							</div>

							<div className="flex w-1/2 items-center justify-center">Some Image</div>
						</div>
					</td>
				</tr>
			)}
		</>
	)
}

export default ProjectRow
