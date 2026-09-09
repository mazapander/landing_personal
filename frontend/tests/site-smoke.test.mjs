import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const dist = path.join(import.meta.dirname, '../dist')
const routes = [
  '/',
  '/proyectos/',
  '/proyectos/ia-compra-pisos/',
  '/proyectos/basketball-intelligence/',
  '/proyectos/anderdata-systems/',
  '/proyectos/connected-home-lab/',
  '/automations/',
  '/automations/vehicle-daily-report/',
  '/automations/periodic-data-ingestion/',
  '/lab/',
  '/como-trabajo/',
  '/ideas/',
  '/sobre-mi/',
  '/notas/',
  '/contacto/',
]

function outputPath(route) {
  return route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
}

function html(route) {
  return fs.readFileSync(outputPath(route), 'utf8')
}

function localTarget(href) {
  const pathname = href.split(/[?#]/)[0]
  if (pathname === '/') return path.join(dist, 'index.html')
  if (pathname.endsWith('/')) return path.join(dist, pathname.slice(1), 'index.html')
  return path.join(dist, pathname.slice(1))
}

test('el build genera las rutas, metadatos y mínimos de accesibilidad públicos', () => {
  for (const route of routes) {
    const page = html(route)
    assert.match(page, /<html lang="es">/)
    assert.match(page, /<title>[^<]+<\/title>/)
    assert.match(page, /<link rel="canonical" href="https:\/\/anderdata\.es\//)
    assert.match(page, /<a class="skip-link" href="#main-content">/)
    assert.match(page, /<h1[ >]/)
    for (const image of page.match(/<img\b[^>]*>/g) || []) assert.match(image, /\balt=/)
    for (const link of page.match(/<a\b[^>]*target="_blank"[^>]*>/g) || []) assert.match(link, /\brel="[^"]*(noopener|noreferrer)/)
  }
})

test('los enlaces internos generados y los ficheros SEO existen', () => {
  for (const route of routes) {
    for (const href of html(route).matchAll(/\bhref="([^"]+)"/g)) {
      if (/^(https?:|mailto:|#)/.test(href[1])) continue
      assert.ok(fs.existsSync(localTarget(href[1])), `${route} enlaza a ${href[1]} que no existe`)
    }
  }

  assert.match(fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8'), /Sitemap: https:\/\/anderdata\.es\/sitemap\.xml/)
  const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
  assert.match(sitemap, /proyectos\/basketball-intelligence/)
  assert.match(sitemap, /automations\/vehicle-daily-report/)
  assert.match(fs.readFileSync(path.join(dist, '404.html'), 'utf8'), /noindex,follow/)
  assert.match(html('/notas/'), /noindex,follow/)
})

test('la cabecera conserva una navegación principal estable de tres universos', () => {
  const page = html('/')
  assert.match(page, /class="site-brand"/)
  assert.match(page, /class="site-brand__mark"[^>]*>AF</)
  assert.match(page, /class="site-brand__name"[^>]*>ANDERDATA</)
  assert.match(page, /<nav class="site-nav" aria-label="Navegación principal">/)
  const primaryNav = page.match(/<nav class="site-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || ''
  assert.equal((primaryNav.match(/<a /g) || []).length, 3)
  assert.match(primaryNav, /Proyectos/)
  assert.match(primaryNav, /Ideas/)
  assert.match(primaryNav, /Sobre mí/)
  assert.doesNotMatch(primaryNav, /Servicios|Lab|Cómo trabajo|Automations/)
  assert.match(page, /class="site-header__external"[^>]*href="https:\/\/github\.com\/mazapander"/)
  assert.match(page, /class="site-mobile-menu"/)
})

test('el universo activo se mantiene estable en proyectos, automations, ideas y perfil', () => {
  const projectNav = html('/proyectos/').match(/<nav class="site-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || ''
  const automationNav = html('/automations/').match(/<nav class="site-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || ''
  const ideasNav = html('/ideas/').match(/<nav class="site-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || ''
  const profileNav = html('/sobre-mi/').match(/<nav class="site-nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || ''

  assert.match(projectNav, /href="\/proyectos\/" aria-current="page"/)
  assert.match(automationNav, /href="\/proyectos\/" aria-current="page"/)
  assert.match(ideasNav, /href="\/ideas\/" aria-current="page"/)
  assert.match(profileNav, /href="\/sobre-mi\/" aria-current="page"/)
})
