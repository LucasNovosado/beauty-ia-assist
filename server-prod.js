
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createProdServer() {
  const app = express()

  // Servir arquivos estáticos
  app.use(express.static(path.resolve(__dirname, 'dist/client')))

  app.use('*', async (req, res) => {
    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, 'dist/client/index.html'),
        'utf-8'
      )

      const { render } = await import('./dist/server/entry-server.js')
      const { html: appHtml } = render()

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  const port = process.env.PORT || 8080
  app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor de produção rodando em http://localhost:${port}`)
  })
}

createProdServer()
