
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, Search, MessageSquare, Send } from "lucide-react";

const faqs = [
  {
    question: "Como o Beauty.IA se integra aos meus perfis existentes?",
    answer: "O Beauty.IA se conecta facilmente ao seu WhatsApp Business e Instagram com apenas alguns cliques. Nossa equipe oferece suporte completo durante a configuração, garantindo uma integração rápida e sem complicações, sem necessidade de conhecimentos técnicos."
  },
  {
    question: "Quanto tempo leva para configurar o Beauty.IA?",
    answer: "A configuração do Beauty.IA é extremamente rápida, levando em média apenas 5 minutos. Nossa interface intuitiva guia você através do processo, e nossa equipe de suporte está sempre disponível para ajudar caso necessário."
  },
  {
    question: "O Beauty.IA pode ser personalizado para minha clínica?",
    answer: "Sim! O Beauty.IA é totalmente personalizável. Adaptamos o tom de comunicação, mensagens automáticas e fluxos de atendimento de acordo com a identidade da sua clínica, criando uma experiência única para seus clientes."
  },
  {
    question: "Como os clientes reagirão ao atendimento automatizado?",
    answer: "Os clientes têm uma reação extremamente positiva. Nossa IA avançada utiliza linguagem natural que realmente engaja os clientes. A maioria não percebe que está falando com um assistente virtual nos primeiros contatos, proporcionando uma experiência fluida e humana."
  },
  {
    question: "Quais tipos de lembretes o Beauty.IA pode enviar?",
    answer: "O Beauty.IA envia lembretes por texto e áudio para confirmação de consultas, instruções pré e pós-procedimentos, aniversários, ofertas especiais e acompanhamentos personalizados. Todos os lembretes são personalizáveis para se adequarem à sua clínica."
  },
  {
    question: "O que acontece quando a IA precisa de intervenção humana?",
    answer: "Sempre que uma situação exigir intervenção humana, o Beauty.IA transfere elegantemente a conversa para um atendente real, alertando sua equipe. A transição é tão suave que os clientes nem percebem a mudança, mantendo a qualidade do atendimento."
  },
  {
    question: "Quais sistemas de agendamento são compatíveis?",
    answer: "O Beauty.IA é compatível com os principais sistemas de agendamento do mercado, incluindo Google Calendar, Agenda Beauty, EasyClinic, Clinicorp, Conexa, Docplanner e muitos outros. Se você utiliza um sistema específico, entre em contato conosco para verificar a compatibilidade."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section 
      ref={sectionRef}
      id="faq" 
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            className={`
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="font-playfair">Perguntas </span>
              <span className="relative">
                <span className="animated-gradient-text font-playfair">
                  Frequentes
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 animated-gradient-bg rounded-full opacity-30"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Tudo o que você precisa saber sobre o Beauty.IA. Não encontrou sua dúvida? 
              Entre em contato com nosso suporte.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-violet-500" />
              </div>
              <input
                type="text"
                placeholder="Buscar perguntas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-xl border border-white/30 rounded-full focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => {
              const delay = index * 100;
              return (
                <div 
                  key={index} 
                  className={`
                    group relative transition-all duration-700 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  `}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden hover:bg-white/70 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-full w-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <button
                        className="w-full flex justify-between items-center p-6 text-left"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                            <HelpCircle className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="font-semibold text-lg font-playfair text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-violet-500 transition-transform duration-300 ${
                            activeIndex === index ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-6 text-gray-600 border-t border-white/20 pt-4 group-hover:text-gray-700 transition-colors duration-300">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Nenhuma pergunta encontrada para "{searchQuery}"</p>
              <p className="mt-2 text-violet-500">Tente outros termos ou entre em contato conosco</p>
            </div>
          )}
        </div>
        
        {/* Contact Box */}
        <div 
          className={`
            mt-16 relative transition-all duration-1000 ease-out delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:bg-white/70 transition-all duration-500">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="h-full w-full bg-white/70 backdrop-blur-xl rounded-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Nossa equipe está pronta para responder todas as suas perguntas.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full font-medium text-gray-700 border border-white/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <MessageSquare className="h-4 w-4 text-violet-500" />
                  <span>Fale com o suporte</span>
                </a>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  <span>Agendar demonstração</span>
                </a>
              </div>
            </div>
          </div>
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

export default FAQSection;
