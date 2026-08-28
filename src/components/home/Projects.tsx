import { useEffect, useState } from 'react'
import ProjectRow from './ProjectRow'
import { getProjects } from '../../../lib/getProjects'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

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

	// Lock page scrolling while the image is open.
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
						onImageClick={(image, index) => handleImageClick(image, project.title, index)}
					/>
				))}
			</section>

			<AnimatePresence>
				{selectedImage && (
					<>
						{/* Dark backdrop overlay */}
						<motion.div
							className="pointer-events-auto fixed inset-0 z-300 bg-black/80 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeImage}
						/>

						{/* Expanded image & close button container */}
						<motion.div
							className="pointer-events-none fixed inset-0 z-320 flex items-center justify-center p-4 md:p-8"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{/* Expanded image */}
							<motion.div
								layoutId={`project-image-${selectedImage.project}-${selectedImage.index}`}
								className="pointer-events-auto relative max-h-[80vh] max-w-[80vw] overflow-hidden rounded-xl"
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

							{/* Close button */}
							<button
								type="button"
								onClick={closeImage}
								className="pointer-events-auto absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:cursor-none! hover:bg-white/20"
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
