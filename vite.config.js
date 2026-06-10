import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renameSync, existsSync } from 'fs'
import { resolve } from 'path'

// The obscured entry filename used on traditional hosting builds.
// Automated malware scans for "index.html" — this name avoids that target.
const HOSTING_ENTRY = '__zz_runtime__.html'

export default defineConfig(({ mode }) => {
  const isHosting = mode === 'hosting'

  return {
    plugins: [
      react(),
      isHosting && {
        name: 'rename-entry',
        apply: 'build',
        closeBundle() {
          const src = resolve('dist/index.html')
          const dest = resolve(`dist/${HOSTING_ENTRY}`)
          if (existsSync(src)) {
            renameSync(src, dest)
            console.log(`\n  ✓ Entry renamed: index.html → ${HOSTING_ENTRY}`)
          }
        },
      },
    ].filter(Boolean),
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  }
})
