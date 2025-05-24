
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Este arquivo agora é usado apenas como fallback
// O entry-client.tsx é o ponto de entrada principal
createRoot(document.getElementById("root")!).render(<App />);
