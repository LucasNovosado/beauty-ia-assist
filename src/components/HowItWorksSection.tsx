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
    <section id="comofunciona" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-violet-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/3 left-5 w-16 h-16 border border-violet-200 rounded-full rotate-12 animate-spin opacity-20" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-purple-200 rounded-lg rotate-45 animate-spin opacity-15" style={{ animationDuration: '12s' }}></div>
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-violet-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="font-playfair">Como </span>
            <span className="relative">
              <span className="animated-gradient-text font-playfair">
                Funciona
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 animated-gradient-bg rounded-full opacity-30"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Três passos simples para automatizar o atendimento da sua clínica
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 w-3/4 opacity-30"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 text-center hover:bg-white/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full w-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl">
            Começar agora
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        /* Animated gradient wave effect for text */
        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #5e40df,
            #9982f7,
            #a2c8b5,
            #5e40df,
            #9982f7,
            #a2c8b5
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: gradientWave 7s ease-in-out infinite;
          display: inline-block;
        }
        
        /* Animated gradient for background line */
        .animated-gradient-bg {
          background: linear-gradient(
            90deg,
            #5e40df,
            #9982f7,
            #a2c8b5,
            #5e40df,
            #9982f7,
            #a2c8b5
          );
          background-size: 400% 100%;
          animation: gradientWave 4s ease-in-out infinite;
        }
        
        @keyframes gradientWave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;