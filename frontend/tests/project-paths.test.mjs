import assert from 'node:assert/strict'
import test from 'node:test'
import { projectPath } from '../src/lib/project-paths.mjs'

test('crea rutas de casos de estudio estables', () => {
  assert.equal(projectPath('stats-feb'), '/proyectos/stats-feb/')
  assert.equal(projectPath('ia/compra-pisos'), '/proyectos/ia/compra-pisos/')
  assert.equal(projectPath('automatización'), '/proyectos/automatizaci%C3%B3n/')
})
