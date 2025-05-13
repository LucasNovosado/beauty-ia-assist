import { Bell, Calendar, Clock, MessageSquare, User, Users } from "lucide-react";

const benefits = [
  {
    title: "Atendimento 24/7",
    description: "Sua clínica disponível via WhatsApp e Instagram a qualquer hora do dia ou da noite.",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Lembretes automáticos",
    description: "Lembretes por texto e áudio para seus clientes, evitando esquecimentos.",
    icon: <Bell className="h-6 w-6" />
  },
  {
    title: "Confirmação inteligente",
    description: "Sistema que confirma horários e envia instruções importantes automaticamente.",
    icon: <Calendar className="h-6 w-6" />
  },
  {
    title: "Redução de no-shows",
    description: "Diminua ausências e cancelamentos de última hora com lembretes eficientes.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Mais tempo para você",
    description: "Dedique-se à estética enquanto a IA cuida da parte operacional do seu negócio.",
    icon: <User className="h-6 w-6" />
  },
  {
    title: "Integração completa",
    description: "Conecte WhatsApp e Instagram em uma única plataforma de atendimento.",
    icon: <MessageSquare className="h-6 w-6" />
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-offwhite py-16 md:py-20">
      {/* Desktop version */}
      <div className="hidden md:block section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Benefícios que transformam sua rotina
          </h2>
          <p className="text-lg text-blacklux/80">
            Com o Beauty.IA, sua clínica estética ganha um assistente virtual incansável,
            que trabalha enquanto você foca no que realmente importa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="feature-icon">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">{benefit.title}</h3>
              <p className="text-blacklux/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile version - seguindo a referência da imagem */}
      <div className="md:hidden px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-playfair text-blacklux leading-tight mb-4">
            Benefícios que transformam sua rotina
          </h2>
          <p className="text-blacklux/80 mx-auto max-w-xs">
            Com o Beauty.IA, sua clínica estética ganha um assistente virtual incansável,
            que trabalha enquanto você foca no que realmente importa.
          </p>
        </div>
        
        {/* Cards de benefícios em estilo de lista */}
        <div className="space-y-4 mb-6">
          {/* Card de Atendimento 24/7 */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blacklux mb-1">Atendimento 24/7</h3>
                <p className="text-blacklux/80 text-sm">
                  Sua clínica disponível via WhatsApp e Instagram a qualquer hora do dia ou da noite.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card de Lembretes automáticos */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blacklux mb-1">Lembretes automáticos</h3>
                <p className="text-blacklux/80 text-sm">
                  Lembretes por texto e áudio para seus clientes, evitando esquecimentos.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card de Confirmação inteligente */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blacklux mb-1">Confirmação inteligente</h3>
                <p className="text-blacklux/80 text-sm">
                  Sistema que confirma horários e envia instruções importantes automaticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seção "Veja mais benefícios" */}
        <div className="bg-rose/5 rounded-xl p-5 mb-6">
          <h3 className="text-center text-lg font-semibold text-blacklux mb-4">Veja mais benefícios</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Item 1: Redução de no-shows */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-blacklux" />
              </div>
              <span className="text-xs text-center leading-tight">Redução de no-shows</span>
            </div>
            
            {/* Item 2: Mais tempo para você */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                <User className="h-5 w-5 text-blacklux" />
              </div>
              <span className="text-xs text-center leading-tight">Mais tempo para você</span>
            </div>
            
            {/* Item 3: Integração completa */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                <MessageSquare className="h-5 w-5 text-blacklux" />
              </div>
              <span className="text-xs text-center leading-tight">Integração completa</span>
            </div>
          </div>
        </div>
        
        {/* Indicadores de paginação */}
        <div className="flex justify-center gap-1 mb-2">
          <div className="w-6 h-1 rounded-full bg-rose"></div>
          <div className="w-1.5 h-1 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;