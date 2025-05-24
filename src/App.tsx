import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import { useClientOnly } from "./hooks/useClientOnly";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Componente de rotas separado
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const AppContent = ({ url }: { url?: string }) => {
  const isClient = useClientOnly();

  // Durante o SSR, usar MemoryRouter (funciona no servidor)
  if (!isClient) {
    return (
      <MemoryRouter initialEntries={[url || '/']}>
        <AppRoutes />
      </MemoryRouter>
    );
  }

  // No cliente, usar BrowserRouter
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

const App = ({ url }: { url?: string } = {}) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent url={url} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;