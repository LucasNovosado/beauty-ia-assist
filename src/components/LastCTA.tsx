
import { Button } from "@/components/ui/button";

const LastCTA = () => {
  return (
    <section className="bg-rose/10 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-blacklux">
          Está pronta para encantar suas clientes e ter mais tempo pra você?
        </h2>
        
        <p className="text-lg text-blacklux/80 mb-10 max-w-2xl mx-auto">
          Dê um passo à frente na transformação digital da sua clínica com o Beauty.IA.
          Automatize processos, encante clientes e foque no que realmente importa: a arte da estética.
        </p>
        
        <Button className="cta-button text-lg py-4 px-8">
          Comece agora com o Beauty.IA
        </Button>
      </div>
    </section>
  );
};

export default LastCTA;
