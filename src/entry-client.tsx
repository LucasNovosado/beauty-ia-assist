
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById("root")!;

if (container.innerHTML) {
  // Se já há conteúdo (vindo do SSR), hidrata
  hydrateRoot(container, <App />);
} else {
  // Fallback para desenvolvimento/cliente-only
  createRoot(container).render(<App />);
}
