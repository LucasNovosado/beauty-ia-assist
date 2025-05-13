import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-offwhite to-white pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop/Tablet Layout */}
        <div className="hidden sm:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-10 lg:mb-0 fade-in">
            <Badge 
              variant="outline" 
              className="scarcity-badge mb-4 md:mb-6 animate-pulse"
            >
Tecnologia inédita para clínicas de estética          </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blacklux mb-4 md:mb-6 leading-tight">
              Automatize seu atendimento sem perder o toque humano.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-blacklux/80 mb-6 md:mb-8 max-w-lg">
              Sua assistente virtual que conversa com seus clientes no WhatsApp 24h por dia.
            </p>
            
            <div className="flex flex-col gap-4 items-start">
              <Button className="cta-button pulse-animation w-full sm:w-auto">
                Quero agendar minha demonstração gratuita
              </Button>
              
              <Button 
                className="bg-[#25D366] text-white hover:bg-[#20AE5C] rounded-full flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto py-6"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Fale conosco pelo WhatsApp</span>
              </Button>
            </div>
          </div>
          
          <div className="relative slide-in-right">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c29d6e52-a9ba-4b72-bed2-e6d2127af8a8.png"
                  alt="Esteticista robótica atendendo pelo celular"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-32 sm:h-32 bg-rose/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-lavender/20 rounded-full"></div>
              
              {/* Floating tag */}
              <div className="absolute -top-4 -left-4 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg rotate-[-5deg] border border-lavender/40">
                <span className="text-xs md:text-sm font-semibold text-rose">Inteligência Artificial</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="sm:hidden">
          <div className="mb-6 fade-in text-center">
            <Badge 
              variant="outline" 
              className="scarcity-badge mb-4 animate-pulse mx-auto"
            >
Tecnologia inédita para clínicas de estética            </Badge>
            
            <h1 className="text-3xl font-bold text-blacklux mb-4 leading-tight">
              Automatize seu atendimento sem perder o toque humano.
            </h1>
            
            <p className="text-base text-blacklux/80 mb-6 max-w-lg mx-auto">
              Sua assistente virtual que conversa com seus clientes no WhatsApp 24h por dia.
            </p>
          </div>
          
          <div className="relative slide-in-right mb-6">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c29d6e52-a9ba-4b72-bed2-e6d2127af8a8.png"
                  alt="Esteticista robótica atendendo pelo celular"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-lavender/20 rounded-full"></div>
              
              {/* Floating tag */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg rotate-[-5deg] border border-lavender/40">
                <span className="text-xs font-semibold text-rose">Inteligência Artificial</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 items-center mb-8 px-6">
            <Button className="cta-button pulse-animation w-11/12 max-w-[300px] text-sm py-2">
              Agendar demonstração gratuita
            </Button>
            
            <Button 
              className="bg-[#25D366] text-white hover:bg-[#20AE5C] rounded-full flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all duration-300 w-10/12 max-w-[280px] text-sm py-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Fale conosco pelo WhatsApp</span>
            </Button>
          </div>
          
          {/* Mobile-only benefits preview */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-lavender/30 text-center">
              <span className="text-sm font-medium text-blacklux">Zero mensagens perdidas</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-lavender/30 text-center">
              <span className="text-sm font-medium text-blacklux">Mais clientes agendados</span>
            </div>
          </div>
        </div>
        
        {/* Stats bar - visible from tablet up */}
        <div className="hidden sm:flex mt-12 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-lavender/20 justify-around">
          <div className="text-center">
            <p className="text-3xl font-bold text-rose">70%</p>
            <p className="text-sm text-blacklux/70">Redução em faltas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-rose">24/7</p>
            <p className="text-sm text-blacklux/70">Disponibilidade</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-rose">5min</p>
            <p className="text-sm text-blacklux/70">Tempo de configuração</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;