import { automationPath } from './automation-paths.mjs'
import { projectPath } from './project-paths.mjs'
import { absoluteUrl } from './site.mjs'

const staticPaths = ['/', '/proyectos/', '/automations/', '/ideas/', '/notas/', '/servicios/', '/lab/', '/como-trabajo/', '/sobre-mi/', '/contacto/']

export function sitemapUrls(projects, automations = []) {
  const projectUrls = projects.filter(({ data }) => !data.draft).map(({ id }) => projectPath(id))
  const automationUrls = automations.filter(({ data }) => !data.draft).map(({ id }) => automationPath(id))
  return [...staticPaths, ...projectUrls, ...automationUrls].map(absoluteUrl)
}
