import { ideaPath } from './idea-paths.mjs'
import { automationPath } from './automation-paths.mjs'
import { projectPath } from './project-paths.mjs'
import { absoluteUrl } from './site.mjs'

const staticPaths = ['/', '/proyectos/', '/automations/', '/ideas/', '/servicios/', '/lab/', '/como-trabajo/', '/sobre-mi/', '/contacto/']

export function sitemapUrls(projects, automations = [], notes = []) {
  const projectUrls = projects.filter(({ data }) => !data.draft).map(({ id }) => projectPath(id))
  const automationUrls = automations.filter(({ data }) => !data.draft).map(({ id }) => automationPath(id))
  const ideaUrls = notes.filter(({ data }) => !data.draft).map(({ id }) => ideaPath(id))
  return [...staticPaths, ...projectUrls, ...automationUrls, ...ideaUrls].map(absoluteUrl)
}
