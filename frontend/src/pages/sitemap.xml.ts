import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { sitemapUrls } from '@/lib/sitemap-urls.mjs'

export const GET: APIRoute = async () => {
  const urls = sitemapUrls(await getCollection('projects'))
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `\n  <url><loc>${url}</loc></url>`).join('')}\n</urlset>`

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
