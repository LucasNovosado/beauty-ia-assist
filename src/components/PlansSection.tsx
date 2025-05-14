import React, { useState, useEffect, useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Iniciante",
    price: "R$ 97",
    period: "por mês",
    description: "Perfeito para profissionais autônomos",
    features: [
      "1 número de WhatsApp",
      "50 agendamentos/mês",
      "Lembretes automáticos",
      "Confirmações de horários",
      "Suporte por e-mail",
    ],
    cta: "Começar teste grátis",
    isFeatured: false
  },
  {
    name: "Profissional",
    price: "R$ 197",
    period: "por mês",
    description: "Ideal para clínicas em crescimento",
    features: [
      "2 números de WhatsApp",
      "1 Instagram conectado",
      "200 agendamentos/mês",
      "Lembretes personalizados",
      "Relatórios de desempenho",
      "Integração com Google Calendar",
      "Suporte prioritário",
    ],
    cta: "Começar teste grátis",
    isFeatured: true
  },
  {
    name: "Empresarial",
    price: "R$ 1.797",
    period: "por ano",
    description: "Para clínicas estabelecidas",
    features: [
      "Até 5 números de WhatsApp",
      "Até 3 Instagram conectados",
      "Agendamentos ilimitados",
      "API para integração personalizada",
      "Chatbot 100% personalizado",
      "Dashboard completo",
      "Suporte VIP com gerente dedicado",
    ],
    cta: "Falar com consultor",
    isFeatured: false
  }
];

const PlansSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="planos" 
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-violet-50/30 to-purple-50/30 overflow-hidden"
    >
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
          <div 
            className={`
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h2 className="text-xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-8">
              <span className="font-playfair">Planos que cabem no seu </span>
              <span className="relative">
                <span className="animated-gradient-text font-playfair">
                  Negócio
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 animated-gradient-bg rounded-full opacity-30"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano ideal para sua clínica e comece a economizar tempo hoje mesmo
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 xl:gap-8">
          {plans.map((plan, index) => {
            const delay = index * 150;
            
            return (
              <div 
                key={index} 
                className={`
                  group relative transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${plan.isFeatured ? 'md:-mt-2 md:mb-2' : ''}
                `}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`
                  relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/30 
                  hover:bg-white/70 transition-all duration-500 group-hover:scale-[1.02] 
                  group-hover:shadow-2xl group-hover:shadow-purple-500/10 h-full
                  ${plan.isFeatured ? 'ring-2 ring-violet-500/30' : ''}
                  ${plan.isFeatured ? 'mt-6' : ''}
                `}>
                  
                  {/* Featured Badge */}
                  {plan.isFeatured && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                        <Star className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Mais popular</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="h-full w-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col z-10">
                    <div className="text-center mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-playfair text-gray-900 mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {plan.name}
                      </h3>
                      <div className="mb-2 md:mb-3">
                        <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1 md:ml-2 text-sm md:text-base">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
                        {plan.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                            <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                          </div>
                          <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <button 
                        className={`
                          w-full py-2.5 md:py-3 px-4 md:px-6 rounded-full font-semibold transition-all duration-300 text-sm md:text-base
                          ${plan.isFeatured 
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl' 
                            : 'bg-white/80 backdrop-blur-sm border border-violet-300 text-violet-600 hover:bg-violet-50 hover:border-violet-400'
                          }
                        `}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom trust indicators */}
        <div 
          className={`
            text-center mt-12 md:mt-16 transition-all duration-1000 ease-out delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-4 text-sm md:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Teste grátis por 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Suporte 24/7</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500">Mais de 1.000 clínicas já confiam na Beauty.IA</p>
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

export default PlansSection;