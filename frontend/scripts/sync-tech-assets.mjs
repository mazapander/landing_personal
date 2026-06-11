import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { extname, join, resolve } from 'node:path'

const frontendRoot = resolve(process.cwd())
const publicTechDir = join(frontendRoot, 'public', 'tech')
const bundledTechDir = join(frontendRoot, 'src', 'assets', 'tech')

if (!existsSync(publicTechDir)) {
  throw new Error(`Tech icon source folder not found: ${publicTechDir}`)
}

rmSync(bundledTechDir, { recursive: true, force: true })
mkdirSync(bundledTechDir, { recursive: true })

const svgFiles = readdirSync(publicTechDir)
  .filter(fileName => extname(fileName).toLowerCase() === '.svg')
  .sort((a, b) => a.localeCompare(b))

if (svgFiles.length === 0) {
  throw new Error(`No SVG icons found in ${publicTechDir}`)
}

for (const fileName of svgFiles) {
  const normalizedFileName = fileName.toLowerCase()
  copyFileSync(
    join(publicTechDir, fileName),
    join(bundledTechDir, normalizedFileName),
  )
}

console.log(`Synced ${svgFiles.length} tech SVG icons into src/assets/tech`)
