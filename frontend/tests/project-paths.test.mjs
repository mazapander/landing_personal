import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { automationPath } from '../src/lib/automation-paths.mjs'
import { projectPath } from '../src/lib/project-paths.mjs'
import { groupTechnologies } from '../src/lib/technology-groups.mjs'
import { contactMailto } from '../src/lib/contact-mailto.mjs'
import { labItems } from '../src/lib/lab-items.mjs'
import { analyticsContext, trackClick } from '../src/lib/analytics.mjs'
import { sitemapUrls } from '../src/lib/sitemap-urls.mjs'

test('crea rutas públicas estables para proyectos y automatizaciones', () => {
  assert.equal(projectPath('stats-feb'), '/proyectos/stats-feb/')
  assert.equal(projectPath('ia/compra-pisos'), '/proyectos/ia/compra-pisos/')
  assert.equal(projectPath('automatización'), '/proyectos/automatizaci%C3%B3n/')
  assert.equal(automationPath('vehicle-daily-report'), '/automations/vehicle-daily-report/')
  assert.equal(automationPath('reports/daily'), '/automations/reports/daily/')
})

test('mantiene los contenidos clave del mapa AnderData sin acoplar el test al número total de piezas', () => {
  const projectsDirectory = path.join(import.meta.dirname, '../src/content/projects')
  const publishedProjects = fs.readdirSync(projectsDirectory).filter((file) => file.endsWith('.md') && file !== 'template.md')

  for (const expected of ['ia-compra-pisos.md', 'basketball-intelligence.md', 'anderdata-systems.md', 'connected-home-lab.md', 'industrial-cutting-optimizer.md']) {
    assert.ok(publishedProjects.includes(expected), `falta ${expected}`)
  }
  assert.match(fs.readFileSync(path.join(projectsDirectory, 'template.md'), 'utf8'), /draft: true/)

  const automationsDirectory = path.join(import.meta.dirname, '../src/content/automations')
  const automations = fs.readdirSync(automationsDirectory).filter((file) => file.endsWith('.md'))
  for (const expected of ['vehicle-daily-report.md', 'periodic-data-ingestion.md', 'appointment-reminders.md', 'infrastructure-health-check.md']) {
    assert.ok(automations.includes(expected), `falta ${expected}`)
  }
})

test('agrupa tecnologías conservando su capacidad y cubriendo categorías ausentes', () => {
  const groups = groupTechnologies([{ name: 'Python', category: 'Datos' }, { name: 'Docker', category: 'Infra' }, { name: 'HTML' }])

  assert.deepEqual(Object.keys(groups), ['Datos', 'Infra', 'Otras tecnologías'])
  assert.equal(groups.Datos[0].name, 'Python')
})

test('prepara un correo de contacto sin perder el contexto introducido', () => {
  const url = new URL(contactMailto({ name: 'Ana & Co', email: 'ana@example.com', service: 'Automatización de procesos', message: 'Reducir tareas manuales.' }))

  assert.equal(url.protocol, 'mailto:')
  assert.equal(url.searchParams.get('subject'), 'Consulta web: Automatización de procesos')
  assert.match(url.searchParams.get('body'), /Ana & Co/)
  assert.match(url.searchParams.get('body'), /Reducir tareas manuales\./)
})

test('Lab muestra solo productos publicados con un enlace público', () => {
  const items = labItems([
    { id: 'demo', data: { title: 'Demo', description: 'Visible', status: 'Público', draft: false, externalUrl: 'https://example.com' } },
    { id: 'borrador', data: { title: 'Borrador', description: 'Oculto', status: 'Borrador', draft: true, externalUrl: 'https://example.com' } },
    { id: 'sin-enlace', data: { title: 'Interno', description: 'Sin demo', status: 'Interno', draft: false } },
  ])

  assert.deepEqual(items, [{ id: 'demo', title: 'Demo', description: 'Visible', status: 'Público', href: 'https://example.com' }])
})

test('normaliza contexto, UTM y atributos de eventos de clic', () => {
  const calls = []
  const element = { dataset: { trackEvent: 'demo_open', trackLocation: 'lab', trackProject: 'demo' }, getAttribute: () => 'https://example.com' }
  const location = { pathname: '/lab/', search: '?utm_source=linkedin&utm_campaign=septiembre' }

  assert.deepEqual(analyticsContext(location), { page_path: '/lab/', utm_source: 'linkedin', utm_campaign: 'septiembre' })
  assert.equal(trackClick({ target: { closest: () => element } }, location, { track: (...args) => calls.push(args) }), true)
  assert.deepEqual(calls, [['demo_open', { page_path: '/lab/', utm_source: 'linkedin', utm_campaign: 'septiembre', placement: 'lab', project: 'demo', destination: 'https://example.com' }]])
})

test('el sitemap incluye proyectos y automatizaciones públicas y excluye borradores', () => {
  const urls = sitemapUrls(
    [{ id: 'caso-publico', data: { draft: false } }, { id: 'borrador', data: { draft: true } }],
    [{ id: 'flow-publico', data: { draft: false } }, { id: 'flow-borrador', data: { draft: true } }],
  )

  assert.equal(urls[0], 'https://anderdata.es/')
  assert.ok(urls.includes('https://anderdata.es/automations/'))
  assert.ok(urls.includes('https://anderdata.es/proyectos/caso-publico/'))
  assert.ok(urls.includes('https://anderdata.es/automations/flow-publico/'))
  assert.ok(!urls.some((url) => url.includes('borrador')))
})
