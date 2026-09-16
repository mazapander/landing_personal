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
  '/ideas/comparar-datos-vivienda/',
  '/ideas/domotica-orden-y-estado/',
  '/ideas/separar-dominio-solver/',
  '/sobre-mi/',
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
})

test('la cabecera conserva una navegación principal estable de tres universos', () => {
  const page = html('/')
  assert.match(page, /class="site-brand"/)
  assert.match(page, /class="site-brand__mark"[^>]*><img src="\/companies\/anderdata\.svg"/)
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

test('la capa visual usa la identidad real y hace legibles los proyectos', () => {
  const homePage = html('/')
  const projectsPage = html('/proyectos/')
  const aboutPage = html('/sobre-mi/')

  assert.match(homePage, /home-hero__brand-stamp[\s\S]*?\/companies\/anderdata\.svg/)
  assert.match(homePage, /class="home-hero__activity" aria-label="Proyectos activos"/)
  assert.ok((homePage.match(/class="project-visual /g) || []).length >= 7)
  assert.ok((projectsPage.match(/class="project-visual /g) || []).length >= 4)
  assert.match(aboutPage, /src="\/profile\.jpg" alt="Retrato de Ander Fernández"/)
  assert.match(aboutPage, /class="about-technologies"[\s\S]*?src="\/tech\/python\.svg"/)

  for (const route of [
    '/proyectos/ia-compra-pisos/',
    '/proyectos/basketball-intelligence/',
    '/proyectos/anderdata-systems/',
    '/proyectos/connected-home-lab/',
    '/proyectos/basketball-video-tagger/',
    '/proyectos/industrial-cutting-optimizer/',
  ]) {
    const page = html(route)
    assert.match(page, /class="case-study__hero"/, `${route} debe tener una portada visual`)
    assert.match(page, /class="case-study__quickfacts"/, `${route} debe exponer un resumen escaneable`)
    assert.match(page, /class="project-media"/, `${route} debe reservar un soporte para media`)
    assert.match(page, /class="project-visual /, `${route} debe incluir un mapa visual`)
  }

  assert.match(html('/proyectos/anderdata-systems/'), /class="project-visual__topline"[\s\S]*?src="\/companies\/anderdata\.svg"/)
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

const stories = ['ia-compra-pisos', 'basketball-intelligence', 'anderdata-systems', 'connected-home-lab', 'basketball-video-tagger', 'industrial-cutting-optimizer']

test('las seis historias tienen SEO único, índice navegable y enlaces resolubles', () => {
  const titles = new Set()
  const descriptions = new Set()
  const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
  for (const slug of stories) {
    const route = `/proyectos/${slug}/`
    const page = html(route)
    const title = page.match(/<title>([^<]+)<\/title>/)?.[1]
    const description = page.match(/<meta name="description" content="([^"]+)"/)?.[1]
    assert.ok(title && description, route)
    titles.add(title)
    descriptions.add(description)
    assert.equal((page.match(/<h1[ >]/g) || []).length, 1, route)
    assert.ok(page.includes(`rel="canonical" href="https://anderdata.es${route}"`), route)
    assert.ok(sitemap.includes(`https://anderdata.es${route}`), route)
    assert.doesNotMatch(page, /noindex/)
    const outline = page.match(/<nav aria-label="En esta historia">([\s\S]*?)<\/nav>/)?.[1]
    assert.ok(outline, route)
    assert.ok((outline.match(/href="#/g) || []).length >= 6, route)
    for (const [, href] of page.matchAll(/\bhref="([^"]+)"/g)) {
      if (href.startsWith('#')) assert.ok(page.includes(`id="${href.slice(1)}"`), `${route}: ${href}`)
      else if (href.startsWith('/')) assert.ok(fs.existsSync(localTarget(href)), `${route}: ${href}`)
    }
    for (const [, schema] of page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      const data = JSON.parse(schema)
      if (data['@type'] === 'BreadcrumbList') assert.equal(data.itemListElement.at(-1).item, `https://anderdata.es${route}`)
    }
  }
  assert.equal(titles.size, stories.length)
  assert.equal(descriptions.size, stories.length)
})


test('Ideas publica notas y relaciones en ambas direcciones sin exponer borradores', () => {
  const index = html('/ideas/')
  const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
  assert.ok(!sitemap.includes('/notas/'))
  assert.ok(!fs.existsSync(outputPath('/ideas/template/')))
  assert.ok(!index.includes('/ideas/template/'))
  assert.ok(!sitemap.includes('/ideas/template/'))
  const linkedProjects = {
    'comparar-datos-vivienda': ['ia-compra-pisos'],
    'domotica-orden-y-estado': ['connected-home-lab', 'anderdata-systems'],
    'separar-dominio-solver': ['industrial-cutting-optimizer'],
  }
  for (const [slug, projects] of Object.entries(linkedProjects)) {
    const route = `/ideas/${slug}/`
    const page = html(route)
    assert.ok(index.includes(`href="${route}"`))
    assert.ok(sitemap.includes(`https://anderdata.es${route}`))
    assert.ok(page.includes(`rel="canonical" href="https://anderdata.es${route}"`))
    assert.equal((page.match(/<h1[ >]/g) || []).length, 1)
    assert.doesNotMatch(page, /noindex/)
    assert.match(page, /<time[^>]*datetime="\d{4}-\d{2}-\d{2}"/)
    assert.match(page, /href="\/ideas\/" aria-current="page"/)
    for (const project of projects) {
      assert.ok(page.includes(`href="/proyectos/${project}/"`))
      assert.ok(html(`/proyectos/${project}/`).includes(`href="${route}"`))
    }
    const schemas = [...page.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]))
    const breadcrumbs = schemas.find((schema) => schema['@type'] === 'BreadcrumbList')
    assert.equal(breadcrumbs.itemListElement.at(-1).item, `https://anderdata.es${route}`)
  }
})

test('la ruta antigua de Notas redirige a Ideas en el build estático', () => {
  const redirect = html('/notas/')
  assert.match(redirect, /http-equiv="refresh"/i)
  assert.match(redirect, /url=\/ideas\//i)
})
