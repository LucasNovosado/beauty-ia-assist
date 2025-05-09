
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-muted shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/lovable-uploads/2fbb8fdc-7917-459b-a603-9eff367e0e83.png"
                alt="Beauty.IA Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#beneficios" className="font-medium nav-link">Benefícios</a>
            <a href="#comofunciona" className="font-medium nav-link">Como funciona</a>
            <a href="#depoimentos" className="font-medium nav-link">Depoimentos</a>
            <a href="#planos" className="font-medium nav-link">Planos</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="cta-button">
              Agendar demonstração
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-blacklux"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-muted">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#beneficios"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#comofunciona"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Como funciona
            </a>
            <a 
              href="#depoimentos"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#planos"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </a>
            <div className="mt-4 px-3 py-2">
              <Button className="cta-button w-full">
                Agendar demonstração
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
