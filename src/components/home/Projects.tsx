import { useState } from 'react'

import ProjectRow from './ProjectRow'
import { getProjects } from '../../../lib/getProjects'

const Projects = () => {
	const [openProject, setOpenProject] = useState<string | null>(null)

	const projects = getProjects().sort((a, b) => b.date.localeCompare(a.date))

	function handleRowClick(title: string) {
		setOpenProject((prev) => (prev === title ? null : title))
	}

	return (
		<section className="mx-4 mb-32 overflow-hidden">
			<div className="text-muted grid grid-cols-[minmax(0,1fr)_auto] border-b border-zinc-500 text-sm md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_auto]">
				<div>Project</div>
				<div className="hidden md:block">Type</div>
				<div className="hidden md:block">URL</div>
				<div>Year</div>
			</div>

			{projects.map((project) => (
				<ProjectRow
					key={project.title}
					project={project}
					open={openProject === project.title}
					onClick={() => handleRowClick(project.title)}
				/>
			))}
		</section>
	)
}

export default Projects
