
import { WhatsApp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blacklux text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img
              src="/lovable-uploads/2fbb8fdc-7917-459b-a603-9eff367e0e83.png"
              alt="Beauty.IA Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="mb-4 text-white/80 max-w-md">
              O agente inteligente que cuida do WhatsApp e Instagram da sua clínica 24h por dia,
              automatizando agendamentos sem perder o toque humano.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4 text-lg">Links rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#beneficios" className="text-white/80 hover:text-rose transition-colors">Benefícios</a></li>
              <li><a href="#comofunciona" className="text-white/80 hover:text-rose transition-colors">Como funciona</a></li>
              <li><a href="#depoimentos" className="text-white/80 hover:text-rose transition-colors">Depoimentos</a></li>
              <li><a href="#planos" className="text-white/80 hover:text-rose transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4 text-lg">Contato</h4>
            <ul className="space-y-2">
              <li className="text-white/80">contato@beautyia.com.br</li>
              <li className="text-white/80">+55 (11) 99999-9999</li>
              <li><a href="#" className="text-white/80 hover:text-rose transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Beauty.IA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Termos de Uso</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Política de Privacidade</a>
          </div>
        </div>
      </div>
      
      <a 
        href="#" 
        className="float-whatsapp"
        aria-label="Contato por WhatsApp"
      >
        <WhatsApp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
