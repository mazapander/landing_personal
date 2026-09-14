import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { fileURLToPath } from 'node:url'
import { siteUrl } from './src/lib/site.mjs'

export default defineConfig({
  site: siteUrl,
  redirects: { '/notas/': '/ideas/' },
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
