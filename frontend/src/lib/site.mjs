export const siteUrl = 'https://anderdata.es'

export function absoluteUrl(path) {
  return new URL(path, siteUrl).href
}
