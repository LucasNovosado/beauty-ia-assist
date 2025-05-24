import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export function render(url: string = '/') {
  let html = '';
  
  try {
    // Renderizar com URL para o StaticRouter
    html = renderToString(<App url={url} />);
  } catch (error) {
    console.error('SSR Error:', error);
    // Fallback: renderizar versão básica
    html = renderToString(<App />);
  }
  
  return { html }
}