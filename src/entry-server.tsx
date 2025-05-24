import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export function render() {
  let html = '';
  
  try {
    // Renderizar aplicação sem parâmetros (sempre renderiza Index durante SSR)
    html = renderToString(<App />);
  } catch (error) {
    console.error('SSR Error:', error);
    // Fallback seguro
    html = '<div id="root"></div>';
  }
  
  return { html }
}