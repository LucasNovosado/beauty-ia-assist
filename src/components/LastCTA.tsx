import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

const LastCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Icon and subtitle */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <Bot className="h-8 w-8 text-violet-600" />
              <div className="absolute inset-0 animate-ping">
                <Bot className="h-8 w-8 text-violet-400 opacity-20" />
              </div>
            </div>
            <span className="text-sm font-semibold text-violet-600 tracking-wider uppercase">
              Transforme sua clínica hoje
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-8 px-2">
            <span className="font-playfair">Está pronta para encantar suas clientes e ter </span>
            <br className="hidden md:block" />
            <span className="relative">
              <span className="animated-gradient-text font-playfair">
                Mais Tempo
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 animated-gradient-bg rounded-full opacity-30"></div>
            </span>
            <span className="font-playfair"> pra você?</span>
          </h2>
                  
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dê um passo à frente na transformação digital da sua clínica com o Beauty.IA.
            <br className="hidden md:block" />
            Automatize processos, encante clientes e foque no que realmente importa: a arte da estética.
          </p>

          {/* CTA Button with enhanced design */}
          <div className="relative inline-block">
            <button className="group relative bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:via-red-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-3">
                <span>Comece agora com o Beauty.IA</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 rounded-full opacity-30 group-hover:animate-ping"></div>
            </button>
            
            {/* Sparkles */}
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
            <Sparkles className="absolute -bottom-2 -left-2 h-4 w-4 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Trust elements */}
          <div className="mt-12 text-sm text-gray-500">
            <p>⚡ Setup em apenas 5 minutos • 🔒 Dados seguros e protegidos • 💝 Teste grátis por 7 dias</p>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <div className="w-20 h-20 border-2 border-violet-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <div className="w-16 h-16 border-2 border-purple-400 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <style>{`
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

export default LastCTA;
