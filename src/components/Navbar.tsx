import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#9982f7]/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center group">
              <div className="relative">
                <img
                  src="/lovable-uploads/2fbb8fdc-7917-459b-a603-9eff367e0e83.png"
                  alt="Beauty.IA Logo"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                {/* Glow effect on logo hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5e40df]/20 to-[#af7945]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "#beneficios", label: "Benefícios" },
              { href: "#comofunciona", label: "Como funciona" },
              { href: "#depoimentos", label: "Depoimentos" },
              { href: "#planos", label: "Planos" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative font-poppins font-medium text-blacklux/80 hover:text-[#5e40df] transition-all duration-300 group py-2"
              >
                {item.label}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5e40df] to-[#af7945] group-hover:w-full transition-all duration-300" />
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#5e40df]/10 to-[#af7945]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="group bg-gradient-to-r from-rose to-[#af7945] hover:from-rose/90 hover:to-[#af7945]/90 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center font-poppins">
                Agendar demonstração
                <div className="ml-2 group-hover:ml-3 transition-all duration-300">
                  <Sparkles className="w-4 h-4" />
                </div>
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-blacklux hover:text-[#5e40df] hover:bg-[#9982f7]/10 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-[#9982f7]/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {[
              { href: "#beneficios", label: "Benefícios" },
              { href: "#comofunciona", label: "Como funciona" },
              { href: "#depoimentos", label: "Depoimentos" },
              { href: "#planos", label: "Planos" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium font-poppins text-blacklux/80 hover:text-[#5e40df] hover:bg-gradient-to-r hover:from-[#9982f7]/10 hover:to-[#af7945]/10 transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center">
                  {item.label}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-[#9982f7]" />
                  </div>
                </span>
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-[#9982f7]/10">
              <Button 
                className="group bg-gradient-to-r from-rose to-[#af7945] hover:from-rose/90 hover:to-[#af7945]/90 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 w-full relative overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center font-poppins">
                  Agendar demonstração
                  <div className="ml-2 group-hover:ml-3 transition-all duration-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Overlay for Mobile Menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;