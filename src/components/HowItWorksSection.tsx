
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Conecte seus canais",
    description: "Integre facilmente seu WhatsApp Business e Instagram à nossa plataforma em poucos cliques."
  },
  {
    number: "02",
    title: "Configure o fluxo",
    description: "Nosso time te ajuda a personalizar todo o fluxo de conversas para sua clínica específica."
  },
  {
    number: "03",
    title: "Deixe a IA trabalhar",
    description: "A partir daí, a Beauty.IA atende, agenda e lembra seus clientes automaticamente."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="comofunciona" className="bg-white py-20 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-offwhite to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-blacklux/80">
            Três passos simples para automatizar o atendimento da sua clínica
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 h-0.5 bg-lavender/30 w-3/4"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 border border-muted hover:border-lavender transition-all duration-300 text-center relative z-10">
                <div className="w-12 h-12 bg-rose text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-playfair font-semibold mb-4">{step.title}</h3>
                <p className="text-blacklux/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="cta-button">
            Começar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
