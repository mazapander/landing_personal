export function automationPath(id) {
  return `/automations/${id.split('/').map(encodeURIComponent).join('/')}/`
}
