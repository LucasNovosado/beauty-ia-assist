
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function buildSSR() {
  // Build do cliente
  await build({
    build: {
      outDir: 'dist/client',
      rollupOptions: {
        input: './src/entry-client.tsx'
      }
    }
  })

  // Build do servidor
  await build({
    build: {
      outDir: 'dist/server',
      ssr: true,
      rollupOptions: {
        input: './src/entry-server.tsx'
      }
    }
  })

  console.log('Build SSR concluído!')
}

buildSSR()
