import ProjectRow from './ProjectRow'
import { getProjects } from '../../../lib/getProjects'

const Projects = () => {
	const projects = getProjects().sort((a, b) => b.date.localeCompare(a.date))

	return (
		<section className="mx-4 mb-32 overflow-hidden">
			<div className="text-muted grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] border-b border-zinc-500 text-sm">
				<div>Project</div>
				<div>URL</div>
				<div>Date</div>
			</div>

			{projects.map((project) => (
				<ProjectRow key={project.title} project={project} />
			))}
		</section>
	)
}

export default Projects
