import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { projectPath } from '../src/lib/project-paths.mjs'
import { groupTechnologies } from '../src/lib/technology-groups.mjs'
import { contactMailto } from '../src/lib/contact-mailto.mjs'
import { labItems } from '../src/lib/lab-items.mjs'
import { analyticsContext, trackClick } from '../src/lib/analytics.mjs'

test('crea rutas de casos de estudio estables', () => {
  assert.equal(projectPath('stats-feb'), '/proyectos/stats-feb/')
  assert.equal(projectPath('ia/compra-pisos'), '/proyectos/ia/compra-pisos/')
  assert.equal(projectPath('automatización'), '/proyectos/automatizaci%C3%B3n/')
})

test('publica los tres casos previstos y deja la plantilla en borrador', () => {
  const contentDirectory = path.join(import.meta.dirname, '../src/content/projects')
  const publishedCases = fs.readdirSync(contentDirectory).filter((file) => file !== 'template.md')

  assert.deepEqual(publishedCases.sort(), ['ia-compra-pisos.md', 'stats-feb.md', 'whatsapp-saas.md'])
  assert.match(fs.readFileSync(path.join(contentDirectory, 'template.md'), 'utf8'), /draft: true/)
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
    { slug: 'demo', data: { title: 'Demo', description: 'Visible', status: 'Público', draft: false, externalUrl: 'https://example.com' } },
    { slug: 'borrador', data: { title: 'Borrador', description: 'Oculto', status: 'Borrador', draft: true, externalUrl: 'https://example.com' } },
    { slug: 'sin-enlace', data: { title: 'Interno', description: 'Sin demo', status: 'Interno', draft: false } },
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
