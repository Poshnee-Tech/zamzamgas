// Post-build script: injects Subresource Integrity (SRI) hashes into the
// hosting entry file. If any asset is modified after deployment the browser
// will refuse to execute it.
import { createHash } from 'crypto'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST  = resolve(__dirname, '..', 'dist')
const ENTRY = resolve(DIST, '__zz_runtime__.html')

if (!existsSync(ENTRY)) {
  console.error('  ✗ __zz_runtime__.html not found — run build:hosting first')
  process.exit(1)
}

function integrity(assetPath) {
  const full = resolve(DIST, assetPath.replace(/^\//, ''))
  const buf  = readFileSync(full)
  return 'sha384-' + createHash('sha384').update(buf).digest('base64')
}

let html = readFileSync(ENTRY, 'utf8')
let count = 0

// <script ... src="/assets/...js">
html = html.replace(
  /<script\b([^>]*)\bsrc="(\/assets\/[^"]+\.js)"([^>]*)>/g,
  (_, pre, path, post) => {
    if (_.includes('integrity=')) return _
    count++
    return `<script${pre}src="${path}"${post} integrity="${integrity(path)}">`
  }
)

// <link ... href="/assets/...(js|css)">
html = html.replace(
  /<link\b([^>]*)\bhref="(\/assets\/[^"]+\.(js|css))"([^>]*)>/g,
  (_, pre, path, _ext, post) => {
    if (_.includes('integrity=')) return _
    count++
    return `<link${pre}href="${path}"${post} integrity="${integrity(path)}">`
  }
)

writeFileSync(ENTRY, html, 'utf8')
console.log(`  ✓ SRI hashes injected (${count} assets hardened)`)
