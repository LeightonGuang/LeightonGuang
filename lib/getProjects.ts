export interface Project {
	title: string
	description?: string
	date: string // YYYY-MM
	url?: string
	technologies: string[]
	github?: string
	images?: string[]
}

export function getProjects(): Project[] {
	return [
		{
			title: 'Saúde Brasil website',
			description: 'An e-commerce website for Saúde Brasil that sells peptides in Brazil.',
			date: '2026-08',
			url: 'https://peptidesaude.com',
			technologies: [
				'Nextjs',
				'Typescript',
				'Framer Motion',
				'Tailwind CSS',
				'Cloudflare D1',
				'Cloudflare R2'
			],
			images: []
		},
		{
			title: 'MV Steel Group website',
			description: 'Description 1',
			date: '2025-10',
			url: 'https://mvsteelgroup.lt',
			technologies: ['React', 'Next.js'],
			images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
		},
		{
			title: 'FMCG Innovations website',
			description: '',
			date: '2026-04',
			url: 'https://fmcginnovations.com',
			technologies: [],
			images: []
		},
		{
			title: 'Twitch Split Viewer website',
			description:
				'A website that allows you to view multiple Twitch streams at once, splitting the screen into multiple video players.',
			date: '2026-02',
			url: 'https://twitchsplitviewer.pages.dev',
			github: 'https://github.com/LeightonGuang/twitch-split-viewer',
			technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
			images: []
		},
		{
			title: 'Stream Track Chrome Extention',
			description: '',
			date: '2024-03',
			url: 'https://chromewebstore.google.com/detail/stream-track-track-your-f/gefllgcgjeonfffgimbgfkpkpckhppdg',
			technologies: [],
			images: []
		},
		{
			title: 'The Next Typer typing test website',
			description:
				"The Next Typer is a feature rich typing test website built with Next.js, Shadcn and Recharts. Test your speed and accuracy and track your progress with Recharts. This revamped version enahances the original typing test website using technologies I've recently learned.",
			date: '2025-03',
			github: 'https://github.com/LeightonGuang/typing_test_react_app',
			url: 'https://thenexttyper.netlify.app',
			technologies: ['Next.js', 'TypeScript', 'Shadcn', 'Recharts', 'Framer Motion'],
			images: []
		}
	]
}
