type ProjectType = 'Website' | 'Chrome Extension' | 'Discord Bot' | 'Hackathon' | 'API'

export interface Project {
	show: boolean
	title: string
	types: ProjectType[]
	description?: string
	date: string // YYYY-MM
	technologies: string[]
	backendTechnologies?: string[]
	url?: string
	github?: string
	backendGithub?: string
	images?: string[]
}

const projects: Project[] = [
	{
		show: true,
		title: 'Saúde Brasil',
		types: ['Website', 'API'],
		description:
			'Developed the ecommerce website for Saúde Brasil, a Brazilian peptide seller, handling the frontend and backend development from product browsing through to customer enquiries. Built with Next.js, TypeScript, Tailwind CSS, Cloudflare D1, Cloudflare R2 and Pipedrive CRM, with a focus on a fast, responsive experience and a streamlined sales workflow.',
		date: '2026-08',
		url: 'https://saudebrasil.com',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Framer Motion',
			'next-intl',
			'Tiptap',
			'Resend'
		],
		backendTechnologies: ['Cloudflare D1', 'Cloudflare R2', 'Pipedrive CRM', 'JWT Authentication'],
		images: ['/images/projects/saudeBrasil/home.png', '/images/projects/saudeBrasil/product.png']
	},
	{
		show: true,
		title: 'MV Steel Group',
		types: ['Website', 'API'],
		description:
			'Led a complete rebuild of the MV Steel Group website, migrating from WordPress to a modern, high-performance Next.js platform with a full UI/UX redesign, internationalisation, and technical SEO improvements. Optimised the platform for scalability, performance, and search visibility, increasing click-through rate from 4.9% to 6.3% and improving average Google search position from 18.3 to 7.9.',
		date: '2025-10',
		url: 'https://mvsteelgroup.lt',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Framer Motion',
			'next-intl',
			'Resend'
		],
		backendTechnologies: ['Cloudflare D1', 'Cloudflare R2'],
		images: [
			'/images/projects/mvSteelGroup/home.png',
			'/images/projects/mvSteelGroup/products.png',
			'/images/projects/mvSteelGroup/product.png'
		]
	},
	{
		show: true,
		title: 'FMCG Innovations',
		types: ['Website', 'API'],
		description:
			'Led the development of FMCG Innovations, a global B2B wholesale platform connecting buyers with suppliers across a wide range of consumer products. Built the platform from the ground up with a focus on scalable architecture, intuitive product discovery, and a polished buyer experience designed to support the company’s international growth.',
		date: '2026-04',
		url: 'https://fmcginnovations.com',
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Framer Motion',
			'next-intl',
			'D3',
			'Resend'
		],
		images: [
			'/images/projects/fmcgInnovations/home.png',
			'/images/projects/fmcgInnovations/products.png',
			'/images/projects/fmcgInnovations/product.png'
		]
	},
	{
		show: true,
		title: 'Nade Vault',
		types: ['Website'],
		description:
			'A Counter-Strike 2 (CS2) lineup database designed to help players quickly find and learn grenade setups across competitive maps. Each lineup includes throw instructions, precision and duration details, alongside video demonstrations to make learning and practising utility easier.',
		date: '2026-01',
		url: 'https://nadevault.netlify.app',
		github: 'https://github.com/LeightonGuang/NadeVault',
		technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		images: []
	},
	{
		show: true,
		title: 'Twitch Split Viewer',
		types: ['Website'],
		description:
			'A web application for watching up to 12 Twitch streams simultaneously in a customisable split-screen layout, with quick switching between each stream’s chat. Built as a standalone tool and integrated with Stream Track to make opening multiple streams from Twitch more convenient.',
		date: '2026-02',
		url: 'https://twitchsplitviewer.pages.dev',
		github: 'https://github.com/LeightonGuang/twitch-split-viewer',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		images: []
	},
	{
		show: true,
		title: 'Stream Track',
		types: ['Chrome Extension'],
		description:
			'Stream Track is a Chrome extension that helps you keep track of which Twitch streamers you follow are currently live. The main difference is that it uses a UI that looks and feels like Twitch itself, so you can check your followed streamers without having to get used to a completely different interface.',
		date: '2024-03',
		url: 'https://chromewebstore.google.com/detail/stream-track-track-your-f/gefllgcgjeonfffgimbgfkpkpckhppdg',
		github: 'https://github.com/LeightonGuang/Stream-Track',
		technologies: [
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
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
		types: ['Website'],
		description:
			"The Next Typer is a feature rich typing test website built with Next.js, Shadcn and Recharts. Test your speed and accuracy and track your progress with Recharts. This revamped version enahances the original typing test website using technologies I've recently learned.",
		date: '2025-03',
		github: 'https://github.com/LeightonGuang/typing_test_react_app',
		url: 'https://thenexttyper.netlify.app',
		technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'Recharts'],
		images: [
			'https://github.com/LeightonGuang/typing_test_react_app/raw/main/_assets/screenshots/homePage.png'
		]
	},
	{
		show: true,
		title: 'Q Bot',
		types: ['Discord Bot', 'API'],
		description:
			'A multifunctional Discord bot built with TypeScript and Discord.js, providing Valorant statistics, VCT event tracking, account management, private voice channels, and Minecraft server controls. Also includes moderation and utility commands for managing and enhancing Discord communities.',
		date: '2024-06',
		github: 'https://github.com/LeightonGuang/Q-bot',
		technologies: ['TypeScript', 'Discord.js', 'Axios', 'Cheerio', 'Puppeteer'],
		images: [
			'https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help.png',
			'https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-account.png',
			'https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-valorant.png',
			'https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-private-vc.png'
		]
	},
	{
		show: true,
		title: 'British Airways Hackathon',
		types: ['Hackathon'],
		description:
			"This is a 24-hour hackathon hosted by British Airways where I collaborated with UI/UX Designers, data scientist and software engineers to develop a solution to solve the problem of 'How might we encourage customers to book flights using their travel voucher?'",
		date: '2023-11',
		github: 'https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon',
		technologies: ['React', 'Axios', 'Sass', 'Figma'],
		images: [
			'https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/home.png',
			'https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/personalise.png',
			'https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/result.png'
		]
	}
]

export function getProjects(): Project[] {
	return projects.filter((project) => project.show)
}
