export interface Project {
	show: boolean
	title: string
	type: string
	description?: string
	date: string // YYYY-MM
	url?: string
	technologies: string[]
	github?: string
	images?: string[]
}

const projects: Project[] = [
	{
		show: true,
		title: 'Saúde Brasil',
		type: 'Website',
		description:
			'Developed the ecommerce website for Saúde Brasil, a Brazilian peptide seller, handling the frontend and backend development from product browsing through to customer enquiries. Built with Next.js, TypeScript, Tailwind CSS, Cloudflare D1, Cloudflare R2 and Pipedrive CRM, with a focus on a fast, responsive experience and a streamlined sales workflow.',
		date: '2026-08',
		url: 'https://saudebrasil.com',
		technologies: [
			'Nextjs',
			'Typescript',
			'Framer Motion',
			'Tailwind CSS',
			'Cloudflare D1',
			'Cloudflare R2',
			'Pipedrive CRM'
		],
		images: []
	},
	{
		show: true,
		title: 'MV Steel Group',
		type: 'Website',
		description: 'Description 1',
		date: '2025-10',
		url: 'https://mvsteelgroup.lt',
		technologies: ['React', 'Next.js'],
		images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
	},
	{
		show: true,
		title: 'FMCG Innovations',
		type: 'Website',
		description:
			'Developed a global B2B FMCG wholesale platform from the ground up, focused on enabling international trade across diverse product categories. Built with React, Next.js, TypeScript, and Tailwind CSS, with an emphasis on scalable architecture, reusable components, and a fast, polished buyer experience. Worked closely with stakeholders to translate business goals into a high-performing product designed to support the startup’s early growth and future expansion.',
		date: '2026-04',
		url: 'https://fmcginnovations.com',
		technologies: [],
		images: []
	},
	{
		show: true,
		title: 'Twitch Split Viewer',
		type: 'Website',
		description:
			'A website that allows you to view multiple Twitch streams at once, splitting the screen into multiple video players.',
		date: '2026-02',
		url: 'https://twitchsplitviewer.pages.dev',
		github: 'https://github.com/LeightonGuang/twitch-split-viewer',
		technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		images: []
	},
	{
		show: true,
		title: 'Stream Track',
		type: 'Chrome Extension',
		description:
			'Stream Track is a Chrome extension that helps you keep track of which Twitch streamers you follow are currently live. The main difference is that it uses a UI that looks and feels like Twitch itself, so you can check your followed streamers without having to get used to a completely different interface.',
		date: '2024-03',
		url: 'https://chromewebstore.google.com/detail/stream-track-track-your-f/gefllgcgjeonfffgimbgfkpkpckhppdg',
		github: 'https://github.com/LeightonGuang/Stream-Track',
		technologies: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Vite',
			'Chrome Extension APIs',
			'Twitch API'
		],
		images: [
			'https://lh3.googleusercontent.com/Tv8W_B085wxE7Z-WpiHre1Cig8fTVIgTsPcPTMi3A7fX-WficxbGZj0xxfyJ_om_JBP_Dg_rTATdDvepnJk12BkVSA=s1280-w1280-h800',
			'https://lh3.googleusercontent.com/6lCbvHBHP6lzKiCmyly0AtRG_OGV-RHZTJmBCG9kZKwEZ3wDFPMdNWMo7AZVa08sVMHGyvH_Bqx2RMK5nyrFVYscOA=s1280-w1280-h800',
			'https://lh3.googleusercontent.com/MreKlKemLvFuUHEchAW9SRr38wO1a-m3Kp7dLpQgAeibw9qfO0uaJp1ScCks2lcW7PYEWX44Rijtlrp9etdzt530JCo=s1280-w1280-h800',
			'https://lh3.googleusercontent.com/ozpPLG_xCEBqFeWmF2p13UQCSaP1eNg76TSw5G3a7sDBWW78Yw6D9xA_iZfzzULV6zHxeRBTVPhUEK1Ju_vwH7IFH6g=s1280-w1280-h800'
		]
	},
	{
		show: true,
		title: 'The Next Typer',
		type: 'Website',
		description:
			"The Next Typer is a feature rich typing test website built with Next.js, Shadcn and Recharts. Test your speed and accuracy and track your progress with Recharts. This revamped version enahances the original typing test website using technologies I've recently learned.",
		date: '2025-03',
		github: 'https://github.com/LeightonGuang/typing_test_react_app',
		url: 'https://thenexttyper.netlify.app',
		technologies: ['Next.js', 'TypeScript', 'Shadcn', 'Recharts'],
		images: [
			'https://github.com/LeightonGuang/typing_test_react_app/raw/main/_assets/screenshots/homePage.png'
		]
	}
]

export function getProjects(): Project[] {
	return projects.filter((project) => project.show)
}
