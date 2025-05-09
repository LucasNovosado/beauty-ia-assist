
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
  return (
    <section id="depoimentos" className="bg-offwhite py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            O que dizem nossas clientes
          </h2>
          <p className="text-lg text-blacklux/80">
            Esteticistas de todo o Brasil já estão transformando seus negócios com Beauty.IA
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="mb-6 flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="rounded-full w-16 h-16 object-cover border-2 border-lavender"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-blacklux/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-blacklux/80 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
