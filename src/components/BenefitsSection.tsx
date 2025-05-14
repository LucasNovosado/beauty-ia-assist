import React, { useState, useEffect, useRef } from 'react';
import { Bell, Calendar, Clock, MessageSquare, User, Users, ChevronLeft, ChevronRight, Sparkles, Bot } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Atendimento 24/7",
    description: "Sua clínica disponível via WhatsApp e Instagram a qualquer hora do dia ou da noite.",
    icon: Clock,
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "from-violet-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Lembretes Automáticos",
    description: "Lembretes por texto e áudio para seus clientes, evitando esquecimentos.",
    icon: Bell,
    gradient: "from-purple-500 to-rose-400",
    bgGlow: "from-purple-500/20 to-rose-400/20"
  },
  {
    id: 3,
    title: "Confirmação Inteligente",
    description: "Sistema que confirma horários e envia instruções importantes automaticamente.",
    icon: Calendar,
    gradient: "from-purple-400 to-red-400",
    bgGlow: "from-rose-400/20 to-red-400/20"
  },
  {
    id: 4,
    title: "Redução de No-shows",
    description: "Diminua ausências e cancelamentos de última hora com lembretes eficientes.",
    icon: Users,
    gradient: "from-red-400 to-orange-400",
    bgGlow: "from-red-400/20 to-orange-400/20"
  },
  {
    id: 5,
    title: "Mais Tempo para Você",
    description: "Dedique-se à estética enquanto a IA cuida da parte operacional do seu negócio.",
    icon: User,
    gradient: "from-orange-400 to-yellow-400",
    bgGlow: "from-orange-400/20 to-yellow-400/20"
  },
  {
    id: 6,
    title: "Integração Completa",
    description: "Conecte WhatsApp e Instagram em uma única plataforma de atendimento.",
    icon: MessageSquare,
    gradient: "from-yellow-400 to-green-400",
    bgGlow: "from-yellow-400/20 to-green-400/20"
  }
];

const BenefitsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);
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

  // Auto-play carousel with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      // Check if container is available before auto-advancing
      if (scrollContainerRef.current && !scrollContainerRef.current.matches(':hover')) {
        nextCard();
      }
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle scroll updates for carousel position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Throttle scroll handler for better performance
      clearTimeout(container.scrollTimeout);
      container.scrollTimeout = setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        // Find the card closest to center
        Array.from(container.children).forEach((child, index) => {
          const childRect = child.getBoundingClientRect();
          const childCenter = childRect.left + childRect.width / 2;
          const distance = Math.abs(childCenter - containerCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        
        if (closestIndex !== currentIndex) {
          setCurrentIndex(closestIndex);
        }
      }, 100);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(container.scrollTimeout);
    };
  }, [currentIndex]);

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container || !container.children[index]) return;
    
    // Get actual card width including gap
    const cardElement = container.children[index];
    const containerRect = container.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();
    
    // Calculate scroll position for centering
    const cardCenter = cardRect.left + cardRect.width / 2 - containerRect.left;
    const containerCenter = containerRect.width / 2;
    const scrollOffset = container.scrollLeft + cardCenter - containerCenter;
    
    container.scrollTo({
      left: Math.max(0, scrollOffset),
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  };

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % benefits.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = currentIndex === 0 ? benefits.length - 1 : currentIndex - 1;
    scrollToCard(newIndex);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-violet-50/30 to-purple-50/30 overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-rose-400 rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/3 left-5 w-16 h-16 border border-indigo-200 rounded-full rotate-12 animate-spin opacity-20" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-purple-200 rounded-lg rotate-45 animate-spin opacity-15" style={{ animationDuration: '12s' }}></div>
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-indigo-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div 
            className={`
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <Bot className="h-8 w-8 text-indigo-600" />
                <div className="absolute inset-0 animate-ping">
                  <Bot className="h-8 w-8 text-indigo-400 opacity-20" />
                </div>
              </div>
              <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">
                Tecnologia Inteligente
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="font-playfair">Benefícios que </span>
              <span className="relative">
                <span className="animated-gradient-text from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-playfair">
                  Transformam
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-30"></div>
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra como a inteligência artificial revoluciona a gestão da sua clínica estética,
              <br className="hidden md:block" />
              criando experiências excepcionais para você e seus clientes.
            </p>
          </div>
        </div>

        {/* Benefits Carousel */}
        <div className="relative">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevCard}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-gray-700 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextCard}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-gray-700 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const delay = index * 150;
              
              return (
                <div
                  key={benefit.id}
                  className="flex-none w-72 sm:w-80 md:w-96 snap-center"
                >
                  <div 
                    className={`
                      group relative h-80 sm:h-96 md:h-[420px] p-6 md:p-8 
                      transition-all duration-700 ease-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    {/* Glassmorphism Container */}
                    <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden hover:bg-white/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                      
                      {/* Animated Border Gradient */}
                      <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="h-full w-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
                      </div>
                      
                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-center items-center text-center p-4 md:p-8">
                        {/* Icon Container */}
                        <div className="relative mb-6 md:mb-8">
                          <div className={`
                            w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} 
                            flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-500
                            shadow-lg group-hover:shadow-xl
                          `}>
                            <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-white" />
                          </div>
                          
                          {/* Pulse Effect */}
                          <div className={`
                            absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient}
                            opacity-0 group-hover:opacity-40 animate-ping
                          `}></div>
                          
                          {/* Sparkle Effect */}
                          <Sparkles className="absolute -top-2 -right-2 h-5 w-5 md:h-6 md:w-6 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                        </div>
                        
                        {/* Text Content */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-playfair text-gray-900 mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                          {benefit.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`
            text-center mt-16 transition-all duration-1000 ease-out delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl">
            <span className="font-poppins">Experimente Grátis</span>
            <div className="relative">
              <Bot className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 animate-ping opacity-30">
                <Bot className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        /* Prevent horizontal overflow */
        @media (max-width: 768px) {
          .snap-x {
            scroll-padding: 0 1rem;
          }
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
          animation: gradientWave 4s ease-in-out infinite;
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

export default BenefitsSection;