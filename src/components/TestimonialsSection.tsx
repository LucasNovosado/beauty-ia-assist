import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Ana Paula",
    role: "Esteticista, São Paulo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "O Beauty.IA transformou minha clínica. Reduzi em 70% o tempo gasto com agendamentos e os no-shows diminuíram drasticamente."
  },
  {
    name: "Marcela Santos",
    role: "Proprietária de Spa, Rio de Janeiro",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Minhas clientes adoram a praticidade de marcar pelo WhatsApp a qualquer hora, e eu amo não precisar responder mensagens às 2h da manhã!"
  },
  {
    name: "Carolina Lima",
    role: "Esteticista, Belo Horizonte",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    text: "A IA é impressionantemente humana nos atendimentos. Minhas clientes nem percebem que estão falando com um robô nos primeiros contatos."
  }
];

const TestimonialsSection = () => {
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
      id="depoimentos" 
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="font-playfair">O que dizem nossas </span>
              <span className="relative">
                <span className="animated-gradient-text font-playfair">
                  Clientes
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 animated-gradient-bg rounded-full opacity-30"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Esteticistas de todo o Brasil já estão transformando seus negócios com Beauty.IA
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const delay = index * 150;
            
            return (
              <div 
                key={index} 
                className={`
                  group relative transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full w-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="mb-6 flex items-center">
                      <div className="relative">
                        <img 
                          src="/api/placeholder/64/64" 
                          alt={testimonial.name} 
                          className="rounded-full w-16 h-16 object-cover border-2 border-violet-300 group-hover:border-purple-400 transition-colors duration-300"
                        />
                        {/* Profile glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg font-playfair text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      {/* Quote icon */}
                      <div className="absolute -top-2 -left-2 text-4xl text-violet-400/30 font-serif">"</div>
                      <p className="text-gray-600 italic pl-6 group-hover:text-gray-700 transition-colors duration-300">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-2 -right-2 text-4xl text-violet-400/30 font-serif rotate-180">"</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

export default TestimonialsSection;
