
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: '안녕하세요! (주)기홍 AI 안내원입니다. 제품 정보나 회사에 대해 궁금한 점이 있으신가요?' }
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

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            너는 '(주)기홍 (GIHONG Co., Ltd.)'의 공식 AI 어시스턴트야. 
            회사의 주요 정보는 다음과 같아:
            - 설립: 2002년, 대표 김형동.
            - 주요 사업: 사료/제분/신재생에너지 PLANT 설계 및 시공, 산업 기계 제작.
            - 주력 제품: Taco Dryer(순환식 건조기), Pellet Mill, Industrial Mixer, Pellet Die(고품질 크롬강), Roller Shell.
            - 기술력: 다수의 특허 보유, 독일 Gun Drill Machine 가공, 진공 열처리 기술.
            - 위치: 경기도 화성시 비봉면 현대기아로 825-15.
            - 연락처: 031-431-3800.
            항상 친절하고 전문적인 엔지니어링 파트너의 말투로 답변해줘. 한국어로 답변해.
          `,
        },
      });

      const aiText = response.text || "죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          <div className="bg-orange-600 p-6 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">기홍 스마트 헬프</h3>
              <p className="text-xs text-orange-100 opacity-80">Online | AI Assistant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' ? 'bg-orange-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="궁금한 내용을 입력하세요..."
              className="flex-grow px-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-100"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-orange-600 text-white p-3 rounded-xl hover:bg-orange-700 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-orange-500 scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
            <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
