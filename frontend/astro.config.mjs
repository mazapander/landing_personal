import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  integrations: [react()],
  envDir: '..',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api/cv': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
  },
})
