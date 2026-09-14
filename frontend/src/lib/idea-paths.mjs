export const ideaPath = (id) => `/ideas/${id.split('/').map(encodeURIComponent).join('/')}/`
