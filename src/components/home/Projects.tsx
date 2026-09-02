import { X } from 'lucide-react'
import ProjectRow from './ProjectRow'
import { useEffect, useState } from 'react'
import { getProjects } from '../../../lib/getProjects'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
	const [openProject, setOpenProject] = useState<string | null>(null)

	const [selectedImage, setSelectedImage] = useState<{
		src: string
		project: string
		index: number
	} | null>(null)

	const projects = getProjects().sort((a, b) => b.date.localeCompare(a.date))

	function handleRowClick(title: string) {
		setOpenProject((prev) => (prev === title ? null : title))
	}

	function handleImageClick(image: string, project: string, index: number) {
		setSelectedImage({
			src: image,
			project,
			index
		})
	}

	function closeImage() {
		setSelectedImage(null)
	}

	useEffect(() => {
		if (!selectedImage) return

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') closeImage()
		}

		document.addEventListener('keydown', handleKeyDown)

		const previousOverflow = document.body.style.overflow

		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = previousOverflow
		}
	}, [selectedImage])

	return (
		<>
			<section className="mx-2 mb-32 overflow-hidden">
				<div className="text-muted grid grid-cols-[minmax(0,1fr)_auto] border-b border-zinc-500 text-sm font-light md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_auto]">
					<div>Project</div>
					<div className="hidden md:block">Type</div>
					<div className="hidden md:block">URL</div>
					<div>Year</div>
				</div>

				<div>
					{projects.map((project, index) => (
						<ProjectRow
							key={project.title}
							project={project}
							open={openProject === project.title}
							onClick={() => handleRowClick(project.title)}
							onImageClick={(image, imageIndex) =>
								handleImageClick(image, project.title, imageIndex)
							}
							index={index}
						/>
					))}
				</div>
			</section>

			<AnimatePresence>
				{selectedImage && (
					<>
						<motion.div
							className="pointer-events-auto fixed inset-0 z-300 bg-black/80 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeImage}
						/>

						<motion.div
							className="pointer-events-none fixed inset-0 z-320 flex items-center justify-center p-4 md:p-8"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<motion.div
								layoutId={`project-image-${selectedImage.project}-${selectedImage.index}`}
								className="pointer-events-auto relative max-h-[80vh] max-w-[80vw] overflow-hidden"
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 25
								}}
								onClick={(e) => e.stopPropagation()}
								data-cursor="project-image"
							>
								<img
									src={selectedImage.src}
									alt={`${selectedImage.project} screenshot ${selectedImage.index + 1}`}
									className="block max-h-[80vh] max-w-[80vw] object-contain"
								/>
							</motion.div>

							<button
								type="button"
								onClick={closeImage}
								className="pointer-events-auto absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:cursor-none! hover:bg-transparent hover:backdrop-blur-none"
								aria-label="Close image"
								data-cursor="close-image"
							>
								<X className="size-4" />
							</button>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	)
}

export default Projects
