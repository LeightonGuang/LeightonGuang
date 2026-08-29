// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],

		server: {
			host: true,
			allowedHosts: true
		}
	},

	integrations: [react()]
})
