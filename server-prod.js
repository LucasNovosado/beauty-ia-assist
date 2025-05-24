import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createProdServer() {
  const app = express()

  // Servir arquivos estáticos
  app.use(express.static(path.resolve(__dirname, 'dist/client'), {
    maxAge: '1d'
  }))

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    
    try {
      // Ler template HTML
      const template = fs.readFileSync(
        path.resolve(__dirname, 'dist/client/index.html'),
        'utf-8'
      )

      // Importar e executar renderização SSR
      const { render } = await import('./dist/server/entry-server.js')
      const { html: appHtml } = render(url)

      // Injetar HTML renderizado
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      // Headers para SEO
      res.set({
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600'
      })

      res.status(200).end(html)
    } catch (e) {
      console.error('❌ SSR Error:', e)
      
      // Fallback: servir HTML estático
      try {
        const template = fs.readFileSync(
          path.resolve(__dirname, 'dist/client/index.html'),
          'utf-8'
        )
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
      } catch (fallbackError) {
        console.error('❌ Fallback Error:', fallbackError)
        res.status(500).end('Erro interno do servidor')
      }
    }
  })

  const port = process.env.PORT || 8080
  app.listen(port, '0.0.0.0', () => {
    console.log(`✅ Beauty.IA SSR rodando na porta ${port}`)
    console.log(`🌐 URL: http://localhost:${port}`)
  })
}

createProdServer().catch(err => {
  console.error('❌ Erro ao iniciar servidor:', err)
  process.exit(1)
})