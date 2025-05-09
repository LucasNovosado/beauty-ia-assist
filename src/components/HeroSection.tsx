
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-offwhite to-white pt-10 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 fade-in">
            <Badge 
              variant="outline" 
              className="scarcity-badge mb-6 animate-pulse"
            >
              Vagas limitadas para acesso gratuito na fase beta
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-blacklux mb-6 leading-tight">
              Automatize seu atendimento sem perder o toque humano.
            </h1>
            
            <p className="text-lg sm:text-xl text-blacklux/80 mb-8 max-w-lg">
              O agente inteligente que cuida do WhatsApp e Instagram da sua clínica 24h por dia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button className="cta-button pulse-animation">
                Quero agendar minha demonstração gratuita
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
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-lavender/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
