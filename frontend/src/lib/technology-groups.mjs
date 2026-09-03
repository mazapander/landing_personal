export function groupTechnologies(technologies) {
  return technologies.reduce((groups, technology) => {
    const category = technology.category || 'Otras tecnologías'
    ;(groups[category] ||= []).push(technology)
    return groups
  }, {})
}
