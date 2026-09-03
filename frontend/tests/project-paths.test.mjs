import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { projectPath } from '../src/lib/project-paths.mjs'

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
