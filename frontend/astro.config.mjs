import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { fileURLToPath } from 'node:url'
import { siteUrl } from './src/lib/site.mjs'

export default defineConfig({
  site: siteUrl,
  integrations: [react()],
  envDir: '..',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
