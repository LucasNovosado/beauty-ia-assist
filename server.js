
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  // Criar servidor Vite em modo middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.ssrLoadModule)
  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      // 1. Ler index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )

      // 2. Aplicar transformações do Vite HTML
      template = await vite.transformIndexHtml(url, template)

      // 3. Carregar entrada do servidor
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')

      // 4. Renderizar HTML da aplicação
      const { html: appHtml } = render()

      // 5. Injetar HTML renderizado no template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      // 6. Retornar HTML renderizado
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // Se um erro for capturado, deixe o Vite corrigir o stack trace
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  app.listen(8080, '0.0.0.0', () => {
    console.log('Servidor SSR rodando em http://localhost:8080')
  })
}

createServer()
