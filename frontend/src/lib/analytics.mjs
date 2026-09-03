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

export function trackClick(event, location, tracker) {
  const element = event.target.closest?.('[data-track-event]')
  if (!element) return false

  trackEvent(element.dataset.trackEvent, {
    placement: element.dataset.trackLocation,
    project: element.dataset.trackProject,
    service: element.dataset.trackService,
    destination: element.getAttribute('href'),
  }, location, tracker)
  return true
}

export function attachAnalytics() {
  document.addEventListener('click', (event) => trackClick(event, window.location, window.umami))
}
