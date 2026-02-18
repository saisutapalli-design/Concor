import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIChatbotProps {
  context: 'KYCL' | 'Logistics' | 'Filing';
}

// Updated AI Icon: Modern Sparkle/Chatbot hybrid for high-end feel
export const AI_ICON = (size = "w-6 h-6") => (
  <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10L8.45 8.45L10 8L8.45 7.55L8 6L7.55 7.55L6 8L7.55 8.45L8 10Z" fill="currentColor"/>
    <path d="M19 14L18.1 10.9L15 10L18.1 9.1L19 6L19.9 9.1L23 10L19.9 10.9L19 14Z" fill="currentColor"/>
    <path d="M11 20L10.1 16.9L7 16L10.1 15.1L11 12L11.9 15.1L15 16L11.9 16.9L11 20Z" fill="currentColor"/>
    <path d="M4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 20H6C4.89543 20 4 19.1046 4 18V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 14H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AIChatbot: React.FC<AIChatbotProps> = ({ context }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getSystemInstruction = () => {
    const base = "You are the CONCOR AI Assistant. Strictly use professional tone. You specialize in Indian multi-modal logistics, EXIM policy, and the ETMS (Export-Import Terminal Management System). Keep responses concise and formatted for a chat interface.";
    if (context === 'KYCL') return `${base} CURRENT APP: KYCL Tracker. Terminology: RDT scans, Yard block coordinates, RFID telemetry, ICD Tughlakabad.`;
    if (context === 'Logistics') return `${base} CURRENT APP: e-Logistics Ops Center. Terminology: TEU capacity, rail scheduling, intermodal transport, terminal throughput.`;
    if (context === 'Filing') return `${base} CURRENT APP: Filing & ETMS Hub. Terminology: PDA settlement, CFN filing, Digital Signatures, manifest declaration, HS codes, and Customs documentation.`;
    return base;
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: `Greetings. I am the CONCOR Digital Assistant specialized in ${context} protocols. How may I facilitate your operations today?` }]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleTrigger = (event: any) => {
      setIsOpen(true);
      if (event.detail?.message) {
        setTimeout(() => {
          setInput(event.detail.message);
        }, 300);
      }
    };
    window.addEventListener('concor-open-chat', handleTrigger);
    return () => window.removeEventListener('concor-open-chat', handleTrigger);
  }, []);

  const handleSend = async () => {
    const messageToSend = input.trim();
    if (!messageToSend) return;
    
    const userMessage: Message = { role: 'user', text: messageToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction: getSystemInstruction() },
        contents: [...messages, userMessage].map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });
      
      const responseText = response.text || "I apologize, the terminal network returned an empty response. Please try your request again.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Signal interruption detected. Please verify your secure network connection and re-authenticate your session." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[400px] h-[640px] bg-white rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
          {/* Header with AI Shimmer */}
          <div className="bg-slate-900 p-8 text-white flex items-center justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors pointer-events-none"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-[#0096D6] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                {AI_ICON("w-7 h-7")}
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-[0.3em] leading-none mb-1.5 ai-shimmer-text">CONCOR AI</h4>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{context} PROTOCOL HUB</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-3 hover:bg-white/10 rounded-2xl transition-all relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Chat area with subtle movement background */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#F8FAFC] relative">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0096D6 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} message-enter`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-[2rem] text-sm font-semibold shadow-sm leading-relaxed border ${
                  m.role === 'user' 
                  ? 'bg-[#0096D6] text-white border-transparent rounded-tr-none' 
                  : 'bg-white border-slate-100 text-slate-800 rounded-tl-none shadow-xl shadow-slate-200/40'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start message-enter">
                <div className="bg-white border border-slate-100 px-6 py-4 rounded-[2rem] rounded-tl-none flex gap-2 items-center shadow-md">
                  <div className="w-2 h-2 bg-[#0096D6] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#0096D6] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#0096D6] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-2">Processing Node</span>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-slate-50 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Submit operational query..."
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold pr-14 outline-none focus:border-[#0096D6] focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="absolute right-2 top-2 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-[#0096D6] transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-black/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pulsing Toggle Button */}
      <div className="relative">
        {!isOpen && (
          <>
            <div className="absolute inset-0 bg-[#0096D6] rounded-[2rem] animate-ai-ring"></div>
            <div className="absolute inset-0 bg-[#0096D6] rounded-[2rem] animate-ai-ring [animation-delay:1s]"></div>
          </>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 bg-[#0096D6] rounded-[2rem] shadow-2xl shadow-blue-500/30 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all duration-500 group overflow-hidden border border-white/20 relative z-10 ${!isOpen ? 'animate-ai-float' : ''}`}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            AI_ICON("w-10 h-10")
          )}
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;