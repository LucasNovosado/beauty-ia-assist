import { useState } from "react";
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

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 md:py-20 bg-gradient-to-b from-offwhite to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-blacklux mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-blacklux/80 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Beauty.IA. Não encontrou sua dúvida? 
            Entre em contato com nosso suporte.
          </p>
          
          {/* Search bar */}
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-rose/70" />
            </div>
            <input
              type="text"
              placeholder="Buscar perguntas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-lavender/20 rounded-full focus:outline-none focus:border-rose/40 focus:ring-2 focus:ring-rose/20 transition-all"
            />
          </div>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-lavender/20 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="flex-shrink-0 h-5 w-5 text-rose" />
                    <h3 className="font-semibold text-blacklux">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-rose transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-blacklux/80 border-t border-lavender/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-blacklux/60">Nenhuma pergunta encontrada para "{searchQuery}"</p>
              <p className="mt-2 text-rose">Tente outros termos ou entre em contato conosco</p>
            </div>
          )}
        </div>
        
        {/* Contact Box */}
        <div className="mt-12 bg-gradient-to-r from-rose/10 to-lavender/20 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-playfair text-blacklux mb-2">Ainda tem dúvidas?</h3>
              <p className="text-blacklux/80">Nossa equipe está pronta para responder todas as suas perguntas.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white px-5 py-3 rounded-full font-medium text-blacklux border border-lavender/20 hover:shadow-md transition-all"
              >
                <MessageSquare className="h-4 w-4 text-rose" />
                <span>Fale com o suporte</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-rose text-white px-5 py-3 rounded-full font-medium hover:bg-rose/90 hover:shadow-md transition-all"
              >
                <Send className="h-4 w-4" />
                <span>Agendar demonstração</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;