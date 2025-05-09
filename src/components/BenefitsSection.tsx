
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
    <section id="beneficios" className="bg-offwhite py-20">
      <div className="section-container">
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
    </section>
  );
};

export default BenefitsSection;
