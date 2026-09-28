import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import sharp from 'sharp'

export async function getStaticPaths() {
  return (await getCollection('projects', ({ data }) => !data.draft)).map((project) => ({ params: { slug: project.id }, props: { project } }))
}
const escape = (value: string) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[character]!))
export const GET: APIRoute = async ({ props }) => {
  const { project } = props
  const words = project.data.title.split(' ')
  const lines: string[] = ['']
  for (const word of words) {
    if ((lines[lines.length - 1] + word).length > 23) lines.push('')
    lines[lines.length - 1] += `${word} `
  }
  const title = lines.map((line, index) => `<text x="80" y="${245 + index * 88}" font-size="78" font-weight="700">${escape(line.trim())}</text>`).join('')
  const facts = project.data.facts.map((fact: { value: string }) => fact.value).join(' / ')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#11110f"/><rect x="80" y="145" width="90" height="8" fill="#ff5a36"/><g fill="#f5f3ee" font-family="DejaVu Sans, sans-serif"><text x="80" y="80" font-size="23" letter-spacing="3">AD / ANDERDATA</text><text x="1120" y="80" text-anchor="end" font-size="17">PROJECT STORY</text>${title}<text x="80" y="465" font-size="23" fill="#b8b4a9">${escape(facts)}</text><path d="M80 525 H1120" stroke="#48463e"/><text x="80" y="580" font-size="21">anderdata.es</text><text x="1120" y="580" text-anchor="end" font-size="18" fill="#ff5a36">${escape(project.data.status.toUpperCase())}</text></g></svg>`
  const png = await sharp(new TextEncoder().encode(svg)).png().toBuffer()
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } })
}
