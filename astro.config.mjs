// @ts-check
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],

		server: {
			host: true,
			allowedHosts: true
		}
	},

	integrations: [react()],
	adapter: cloudflare()
})
