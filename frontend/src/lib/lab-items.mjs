export function labItems(projects) {
  return projects.filter(({ data }) => !data.draft && data.externalUrl).map(({ id, data }) => ({ id, title: data.title, description: data.description, status: data.status, href: data.externalUrl }))
}
