
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Bot, Zap, Users, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useClientOnly } from "../hooks/useClientOnly";

const HeroSection = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [conversationIndex, setConversationIndex] = useState(0);
  const isClient = useClientOnly();
  
  const conversations = [
    {
      name: 'Juliana',
      messages: [
        { type: 'user', text: 'Olá, gostaria de saber sobre os horários', name: 'Juliana' },
        { type: 'bot', text: 'Olá Juliana! Temos horários disponíveis hoje às 14h e 16h. Qual prefere?' },
        { type: 'user', text: 'Prefiro às 14h' },
        { type: 'bot', text: '✅ Agendado para hoje às 14h. Vou enviar um lembrete 1h antes.' }
      ]
    },
    {
      name: 'Carlos',
      messages: [
        { type: 'user', text: 'Oi, preciso remarcar minha consulta', name: 'Carlos' },
        { type: 'bot', text: 'Oi Carlos! Claro, vou te ajudar. Para quando gostaria de remarcar?' },
        { type: 'user', text: 'Pode ser na sexta-feira de manhã?' },
        { type: 'bot', text: '✅ Perfeito! Remarcado para sexta-feira às 9h. Confirmado para você!' }
      ]
    },
    {
      name: 'Rafaela',
      messages: [
        { type: 'user', text: 'Boa tarde! Qual o valor da limpeza de pele?', name: 'Rafaela' },
        { type: 'bot', text: 'Boa tarde Rafaela! A limpeza de pele custa R$ 120. Posso agendar para você?' },
        { type: 'user', text: 'Sim, pode ser amanhã?' },
        { type: 'bot', text: '✅ Agendado para amanhã às 15h. Até lá!' }
      ]
    }
  ];

  useEffect(() => {
    if (!isClient) return;
    
    const currentConversation = conversations[conversationIndex].messages;
    let currentMessageIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const showNextMessage = () => {
      if (currentMessageIndex < currentConversation.length) {
        setMessageIndex(currentMessageIndex);
        currentMessageIndex++;
        timeoutId = setTimeout(showNextMessage, 2000);
      } else {
        // Aguarda 5 segundos antes de iniciar próxima conversa
        timeoutId = setTimeout(() => {
          setConversationIndex((prev) => (prev + 1) % conversations.length);
          setMessageIndex(0);
        }, 5000);
      }
    };

    timeoutId = setTimeout(showNextMessage, 1000);

    return () => clearTimeout(timeoutId);
  }, [conversationIndex, isClient]);

  const currentConversation = conversations[conversationIndex];
  const currentMessages = currentConversation.messages;

  const companyLogos = [
    { name: 'TechCorp', width: 'w-20' },
    { name: 'InnovateSoft', width: 'w-24' },
    { name: 'DataSync', width: 'w-16' },
    { name: 'CloudFlow', width: 'w-22' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-lavender/5 to-rose/5 overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D6C8F1%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Static Circuit Lines for SSR */}
        <svg className="absolute inset-0 w-full h-full opacity-5 hidden lg:block">
          <defs>
            <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5e40df" />
              <stop offset="50%" stopColor="#9982f7" />
              <stop offset="100%" stopColor="#af7945" />
            </linearGradient>
          </defs>
          <g className="opacity-60">
            <path
              d="M50,100 L200,100 L200,200 L350,200 L350,300 L500,300"
              stroke="url(#circuit1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M700,150 L850,150 L850,250 L1000,250 L1000,350 L1150,350"
              stroke="url(#circuit1)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="200" cy="100" r="4" fill="#9982f7" />
            <circle cx="350" cy="200" r="4" fill="#af7945" />
            <circle cx="850" cy="150" r="4" fill="#5e40df" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-20 min-h-screen flex flex-col justify-center">
          
          {/* Mobile First Layout */}
          <div className="lg:hidden text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center">
              <Badge 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm border-lavender/40 text-blacklux px-4 py-2 rounded-full shadow-lg"
              >
                <Bot className="w-4 h-4 mr-2 text-rose" />
                Líder em IA para Atendimento
              </Badge>
            </div>

            {/* Mobile Headline */}
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold leading-tight px-2">
              <span className="bg-gradient-to-r from-blacklux via-rose to-lavender bg-clip-text text-transparent">
                Agende mais clientes
              </span>
              <br />
              <span className="bg-gradient-to-r from-lavender via-sage to-rose bg-clip-text text-transparent">
                com a Beauty IA
              </span>
            </h1>

            {/* Mobile Subtitle */}
            <p className="text-base sm:text-lg text-blacklux/80 px-4 leading-relaxed">
              Automatize conversas com clientes usando IA
              <span className="text-rose font-medium"> treinada com seu próprio conhecimento</span>
            </p>

            {/* Mobile Chat Demo - Static for SSR */}
            <div className="relative mx-auto max-w-sm">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-lavender/20">
                <div className="space-y-3 max-h-60 overflow-hidden">
                  {/* Show first message by default for SSR */}
                  {(isClient ? currentMessages.slice(0, messageIndex + 1) : [currentMessages[0]]).map((message, idx) => (
                    <div
                      key={idx}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-rose to-rose/80 text-white'
                            : 'bg-gray-100 text-blacklux border-l-4 border-lavender'
                        }`}
                      >
                        {message.type === 'bot' && <Bot className="w-4 h-4 inline mr-1 text-lavender" />}
                        {message.type === 'user' && message.name && idx === 0 && (
                          <div className="text-xs opacity-70 mb-1">{message.name}</div>
                        )}
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Typing indicator - only show on client when animating */}
                {isClient && (
                  <div className="flex items-center justify-start mt-3">
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-lavender rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-lavender rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-lavender rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="flex flex-col gap-3 px-4">
              <Button className="group bg-gradient-to-r from-rose to-lavender hover:from-rose/90 hover:to-lavender/90 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                <span className="flex items-center justify-center">
                  Demonstração
                  <div className="ml-2 group-hover:ml-3 transition-all duration-300">
                    <Zap className="w-4 h-4" />
                  </div>
                </span>
              </Button>
              
              <Button 
                variant="outline"
                className="group bg-white/80 border-lavender/40 text-blacklux hover:bg-lavender hover:text-white px-4 py-3 rounded-full font-medium shadow-lg transition-all duration-300 backdrop-blur-sm w-full"
              >
                <PlayCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Ver Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-lavender/20 mx-4">
              <p className="text-xs text-blacklux/60 mb-3">📈 Confiança de quem vende mais com atendimento inteligente</p>
              <div className="flex justify-center items-center space-x-4 opacity-60">
                {companyLogos.map((logo, index) => (
                  <div key={index} className={`${logo.width} h-8 bg-blacklux/20 rounded`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center">
                <Badge 
                  variant="outline" 
                  className="bg-white/70 backdrop-blur-sm border-lavender/40 text-blacklux px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Bot className="w-5 h-5 mr-2 text-rose" />
                  1° IA do Brasil para atendimentos de clínicas de estética
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl xl:text-6xl font-playfair font-bold leading-tight">
                <span className="bg-gradient-to-r from-blacklux via-rose to-lavender bg-clip-text text-transparent">
                  Agende mais clientes
                </span>
                <br />
                <span className="bg-gradient-to-r from-lavender via-sage to-rose bg-clip-text text-transparent">
                  com a Beauty IA
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-blacklux/80 max-w-lg leading-relaxed">
                Automatize conversas com clientes usando IA
                <span className="text-rose font-medium"> treinada com seu próprio conhecimento. </span>
                Implemente em minutos, não em meses.
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {[
                  'Responde como seu melhor funcionário',
                  'Aprende com suas conversas reais',
                  'Integra com WhatsApp, email e site'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sage" />
                    <span className="text-blacklux/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group bg-gradient-to-r from-rose to-lavender hover:from-rose/90 hover:to-lavender/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Teste Grátis Agora
                    <div className="ml-2 group-hover:ml-4 transition-all duration-300">
                      <Zap className="w-5 h-5" />
                    </div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="group bg-white/80 border-lavender/40 text-blacklux hover:bg-lavender hover:text-white px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Ver em Ação (2min)
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-lavender/20">
                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-rose to-lavender border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <div className="flex space-x-4 mt-2 opacity-60">
                      {companyLogos.map((logo, index) => (
                        <div key={index} className={`${logo.width} h-6 bg-blacklux/20 rounded`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Demo */}
            <div className="relative">
              <div className="relative">
                {/* Main Demo Container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-lavender/20">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <Badge className="bg-gradient-to-r from-sage to-lavender text-white">
                      <Bot className="w-3 h-3 mr-1" />
                      IA Ativa
                    </Badge>
                  </div>

                  {/* Chat Interface */}
                  <div className="space-y-4 max-h-80 overflow-hidden">
                    {(isClient ? currentMessages.slice(0, messageIndex + 1) : [currentMessages[0]]).map((message, idx) => (
                      <div
                        key={idx}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-rose to-rose/80 text-white'
                              : 'bg-gray-50 text-blacklux border-l-4 border-lavender'
                          }`}
                        >
                          {message.type === 'bot' && <Bot className="w-4 h-4 inline mr-2 text-lavender" />}
                          {message.type === 'user' && message.name && idx === 0 && (
                            <div className="text-xs opacity-70 mb-1">{message.name}</div>
                          )}
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Typing Indicator - only show on client when animating */}
                  {isClient && (
                    <div className="flex items-center justify-start mt-4">
                      <div className="bg-gray-50 rounded-2xl px-4 py-3 border-l-4 border-lavender">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-lavender rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-lavender rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-lavender rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Input Field */}
                  <div className="mt-6 p-3 bg-gray-50 rounded-2xl border border-lavender/20">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="text" 
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-transparent text-blacklux placeholder-blacklux/50 outline-none text-sm"
                        disabled
                      />
                      <Button size="sm" className="bg-gradient-to-r from-rose to-lavender text-white rounded-xl">
                        <Zap className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-lavender to-rose w-16 h-16 rounded-full shadow-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-sage to-lavender w-12 h-12 rounded-full shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-sage to-lavender opacity-20"></div>
                </div>

                {/* Stats Panel */}
                <div className="absolute -bottom-4 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-lavender/20">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-blacklux/80 font-medium">Atendendo {currentConversation.name}</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose/10 via-lavender/10 to-sage/10 rounded-3xl blur-3xl opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
