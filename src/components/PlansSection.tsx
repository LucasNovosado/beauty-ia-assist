
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
  return (
    <section id="planos" className="bg-white py-20 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-offwhite to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Planos que cabem no seu negócio
          </h2>
          <p className="text-lg text-blacklux/80">
            Escolha o plano ideal para sua clínica e comece a economizar tempo hoje mesmo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={plan.isFeatured ? "plan-card-featured" : "plan-card"}
            >
              {plan.isFeatured && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose text-white">
                  Mais popular
                </Badge>
              )}
              
              <h3 className="text-2xl font-playfair font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-blacklux/70 ml-1">{plan.period}</span>
              </div>
              <p className="text-blacklux/80 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-sage mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={plan.isFeatured ? "cta-button w-full" : "w-full bg-white border border-rose text-rose hover:bg-rose/5"} 
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
