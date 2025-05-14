import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-offwhite via-offwhite to-lavender/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Neural Network Waves */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5e40df" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#D4A5A5" stopOpacity="0.08" />
              <stop offset="60%" stopColor="#9982f7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#A8C9B4" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D6C8F1" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#9982f7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#af7945" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          
          {/* Primary Wave */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            className="animate-[wave_8s_ease-in-out_infinite]"
          />
          
          {/* Secondary Wave */}
          <path
            d="M0,450 Q400,250 800,450 T1600,450 L1600,800 L0,800 Z"
            fill="url(#wave2)"
            className="animate-[wave_12s_ease-in-out_infinite_reverse]"
          />
        </svg>

        {/* Floating Sparkles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <Sparkles 
                className={`w-3 h-3 text-lavender/25 opacity-50 animate-pulse`}
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            </div>
          ))}
        </div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15 hidden lg:block">
          <g className="animate-[pulse_4s_ease-in-out_infinite]">
            <path
              d="M100,100 Q200,200 400,150 T700,200"
              stroke="#5e40df"
              strokeWidth="1"
              fill="none"
              className="opacity-40"
            />
            <path
              d="M200,300 Q400,200 600,350 T900,300"
              stroke="#9982f7"
              strokeWidth="1"
              fill="none"
              className="opacity-40"
            />
            <path
              d="M50,500 Q300,400 550,500 T850,450"
              stroke="#af7945"
              strokeWidth="1"
              fill="none"
              className="opacity-40"
            />
            <path
              d="M150,150 Q350,250 650,200 T950,150"
              stroke="#D6C8F1"
              strokeWidth="1"
              fill="none"
              className="opacity-30"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile First Layout */}
        <div className="pt-10 pb-40 min-h-screen flex flex-col justify-center">
          
          {/* Mobile Content */}
          <div className="lg:hidden text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center">
              <Badge 
                variant="outline" 
                className="bg-white/70 backdrop-blur-sm border-lavender/30 text-blacklux px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm"
              >
                <Zap className="w-3 h-3 mr-1 text-rose" />
                Tecnologia inédita para estética
              </Badge>
            </div>

            {/* Mobile Heading */}
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold leading-tight px-2">
              <span className="bg-gradient-to-r from-blacklux via-[#5e40df] to-[#9982f7] bg-clip-text text-transparent animate-gradient-slow">
                Automatize seu atendimento
              </span>
              <br />
              <span className="bg-gradient-to-r from-sage via-[#af7945] to-rose bg-clip-text text-transparent animate-gradient-slow" style={{ animationDelay: '0.5s' }}>
                sem perder o
              </span>
              <br />
              <span className="bg-gradient-to-r from-rose via-[#9982f7] to-lavender bg-clip-text text-transparent animate-gradient-slow" style={{ animationDelay: '1s' }}>
                toque humano.
              </span>
            </h1>

            {/* Mobile Subtitle */}
            <p className="text-base sm:text-lg text-blacklux/80 px-4 leading-relaxed">
              Sua assistente virtual no WhatsApp 24h,
              <span className="text-rose font-medium"> agendando consultas </span>
              enquanto você foca na estética.
            </p>

            {/* Mobile Image */}
            <div className="relative mx-auto max-w-sm">
              <div className="relative bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/c29d6e52-a9ba-4b72-bed2-e6d2127af8a8.png"
                    alt="Esteticista robótica atendendo pelo celular"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Mobile Floating Elements - Smaller */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-[#9982f7] to-[#5e40df] w-12 h-12 rounded-full shadow-md animate-pulse" />
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-[#af7945] to-rose/60 w-10 h-10 rounded-full shadow-md animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Mobile Badge */}
                <div className="absolute -top-2 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-[#9982f7]/30 transform -rotate-2">
                  <span className="text-xs font-semibold bg-gradient-to-r from-[#5e40df] to-[#af7945] bg-clip-text text-transparent flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-[#9982f7]" />
                    IA
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 px-4">
              <Button className="group bg-gradient-to-r from-rose to-[#af7945] hover:from-rose/90 hover:to-[#af7945]/90 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full text-sm sm:text-base">
                <span className="flex items-center justify-center">
                  Agendar demonstração
                  <div className="ml-2 group-hover:ml-3 transition-all duration-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </span>
              </Button>
              
              <Button 
                variant="outline"
                className="group bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-3 rounded-full font-medium shadow-lg transition-all duration-300 backdrop-blur-sm w-full text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-lavender/20 mx-4">
              {[
                { value: "70%", label: "Redução faltas" },
                { value: "24/7", label: "Disponível" },
                { value: "5min", label: "Configuração" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold font-playfair text-rose">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-blacklux/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-left">
              {/* Badge */}
              <div className="inline-flex items-center">
                <Badge 
                  variant="outline" 
                  className="bg-white/60 backdrop-blur-sm border-lavender/30 text-blacklux px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2 text-rose" />
                  Tecnologia inédita para clínicas de estética
                </Badge>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl xl:text-6xl font-playfair font-bold leading-tight">
                <span className="bg-gradient-to-r from-blacklux via-[#5e40df] to-[#9982f7] bg-clip-text text-transparent animate-gradient-slow">
                  Automatize seu atendimento
                </span>
                <br />
                <span className="bg-gradient-to-r from-sage via-[#af7945] to-rose bg-clip-text text-transparent animate-gradient-slow" style={{ animationDelay: '0.5s' }}>
                  sem perder o
                </span>
                <br />
                <span className="bg-gradient-to-r from-rose via-[#9982f7] to-lavender bg-clip-text text-transparent animate-gradient-slow" style={{ animationDelay: '1s' }}>
                  toque humano.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-blacklux/80 max-w-lg leading-relaxed">
                Sua assistente virtual que conversa com seus clientes no WhatsApp 24h por dia,
                <span className="text-rose font-medium"> agendando consultas e lembretes </span>
                enquanto você foca na arte da estética.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group bg-gradient-to-r from-rose to-[#af7945] hover:from-rose/90 hover:to-[#af7945]/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Agendar demonstração
                    <div className="ml-2 group-hover:ml-4 transition-all duration-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="group bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Fale conosco pelo WhatsApp
                </Button>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-lavender/20">
                {[
                  { value: "70%", label: "Redução em faltas" },
                  { value: "24/7", label: "Disponibilidade" },
                  { value: "5min", label: "Tempo de configuração" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold font-playfair text-rose">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blacklux/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/c29d6e52-a9ba-4b72-bed2-e6d2127af8a8.png"
                      alt="Esteticista robótica atendendo pelo celular"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#9982f7] to-[#5e40df] w-20 h-20 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#af7945] to-rose/60 w-16 h-16 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/4 -left-4 bg-gradient-to-br from-sage to-[#9982f7] w-12 h-12 rounded-full shadow-lg animate-pulse" />
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#9982f7]/30 transform -rotate-3 animate-float">
                    <span className="text-sm font-semibold bg-gradient-to-r from-[#5e40df] to-[#af7945] bg-clip-text text-transparent flex items-center">
                      <Sparkles className="w-4 h-4 mr-1 text-[#9982f7]" />
                      Inteligência Artificial
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5e40df]/15 via-[#9982f7]/15 to-[#af7945]/15 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-2deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-slow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-slow {
          background-size: 300% 300%;
          animation: gradient-slow 8s ease-in-out infinite;
        }
        
        @media (max-height: 700px) {
          .min-h-screen {
            min-height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;