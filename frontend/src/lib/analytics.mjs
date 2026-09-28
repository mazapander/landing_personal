const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

function withoutEmptyValues(data) {
  return Object.fromEntries(Object.entries(data).filter(([, value]) => value))
}

export function analyticsContext(location) {
  const query = new URLSearchParams(location.search)
  return withoutEmptyValues({ page_path: location.pathname, ...Object.fromEntries(utmKeys.map((key) => [key, query.get(key)])) })
}

export function trackEvent(name, attributes, location, tracker) {
  const data = { ...analyticsContext(location), ...withoutEmptyValues(attributes) }
  tracker?.track?.(name, data)
  return data
}

export function funnelEvent(source, href) {
  if (!href) return undefined
  let url
  try { url = new URL(href, `https://anderdata.es${source}`) } catch { return undefined }
  if (url.hostname === 'github.com') return 'github_exit'
  if (url.origin !== 'https://anderdata.es') return undefined
  const destination = url.pathname
  const isProject = (path) => /^\/proyectos\/[^/]+\/?$/.test(path)
  if (source === '/' && isProject(destination)) return 'home_to_project'
  if (isProject(source) && isProject(destination) && source.replace(/\/$/, '') !== destination.replace(/\/$/, '')) return 'project_to_project'
  if (isProject(source) && /^\/ideas\/[^/]+/.test(destination)) return 'project_to_idea'
  if (/^\/sobre-mi\/?$/.test(source) && /^\/contacto\/?$/.test(destination)) return 'about_to_contact'
  return undefined
}

export function trackClick(event, location, tracker) {
  const element = event.target.closest?.('[data-track-event], a[href]')
  if (!element) return false
  const destination = element.getAttribute('href')
  const attributes = {
    placement: element.dataset.trackLocation,
    project: element.dataset.trackProject,
    service: element.dataset.trackService,
    destination,
  }
  const funnel = funnelEvent(location.pathname, destination)
  if (funnel) trackEvent(funnel, attributes, location, tracker)
  if (element.dataset.trackEvent) trackEvent(element.dataset.trackEvent, attributes, location, tracker)
  return Boolean(funnel || element.dataset.trackEvent)
}

export function attachAnalytics() {
  document.addEventListener('click', (event) => trackClick(event, window.location, window.umami))
}
