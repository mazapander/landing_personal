import { projectPath } from './project-paths.mjs'
import { absoluteUrl } from './site.mjs'

const staticPaths = ['/', '/proyectos/', '/servicios/', '/lab/', '/como-trabajo/', '/sobre-mi/', '/contacto/']

export function sitemapUrls(projects) {
  return [...staticPaths, ...projects.filter(({ data }) => !data.draft).map(({ id }) => projectPath(id))].map(absoluteUrl)
}
