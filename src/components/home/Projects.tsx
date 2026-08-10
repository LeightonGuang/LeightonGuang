import ProjectRow from './ProjectRow'
import { getProjects } from '../../../lib/getProjects'

const Projects = () => {
	const projects = getProjects()

	return (
		<section className="mx-4 mb-32">
			<table className="w-full">
				<thead className="border-b border-zinc-500 text-left">
					<tr className="text-muted text-sm">
						<th className="font-light">Project</th>
						<th className="font-light">URL</th>
						<th className="font-light">Date</th>
					</tr>
				</thead>

				<tbody className="divide-y divide-zinc-500">
					{projects.map((project) => (
						<ProjectRow key={project.title} project={project} />
					))}
				</tbody>
			</table>
		</section>
	)
}

export default Projects
