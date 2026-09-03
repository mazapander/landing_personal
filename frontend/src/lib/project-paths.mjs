export function projectPath(id) {
  return `/proyectos/${id.split('/').map(encodeURIComponent).join('/')}/`
}
