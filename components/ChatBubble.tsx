
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! Welcome to Cloud9 Smoke Shop. How can I help you elevate your experience today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: `You are the AI concierge for "Cloud9 Smoke Shop" located at 132 Talmage Road, Ukiah, CA 95482. 
          You are professional, premium, and friendly. You provide information about vape devices, e-liquids, and smoke shop accessories.
          Always mention that users must be 21+ to purchase. 
          If they ask for pricing or specific inventory, give general ranges based on standard premium pricing ($20-50 for disposables, $40-100 for devices). 
          Our phone is 707-367-2896.`
        }
      });

      const aiText = response.text || "I'm sorry, I'm having a little trouble connecting. Please call us at 707-367-2896!";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to shop assistant. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <div className="bg-white rounded-3xl w-[350px] sm:w-[400px] h-[500px] mb-4 border border-brand-light flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="p-4 bg-gradient-to-r from-brand-blue to-brand-blue flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-bold">C9</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Cloud9 Concierge</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-[10px] text-white/70">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-700 rounded-tl-none border-brand-light'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none border border-brand-light">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-brand-light bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about products, hours..."
                className="flex-grow bg-white border border-brand-light rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 group relative"
      >
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-brand-blue text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-brand-blue">
          AI
        </div>
        <svg className="w-8 h-8 text-white transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatBubble;
