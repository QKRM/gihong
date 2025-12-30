
import React, { useState } from 'react';

const Business: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'plant' | 'precision'>('plant');

  const plantItems = [
    { 
      name: 'Taco Dryer (순환식 건조기)', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      features: ['열효율 극대화 설계', '자동 온도 조절 시스템', '대용량 처리 가능 (10~100 ton/hr)', '내부식성 특수강 사용']
    },
    { 
      name: 'Pellet Mill (펠렛 성형기)', 
      image: 'https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=800',
      features: ['고밀도 성형 기술', '저소음 구동 메커니즘', '이지 컨트롤 패널 탑재', '다양한 원료 대응 가능 (사료, 우드 등)']
    },
    { 
      name: 'Industrial Mixer (혼합기)', 
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800',
      features: ['균일한 혼합 품질 보증', '최단 시간 혼합 사이클', '오염 방지용 밀폐 구조', '잔류량 제로화 배출 설계']
    },
  ];

  const precisionItems = [
    {
      name: 'Pellet Die (펠렛 다이)',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
      features: ['독일 Gun Drill Machine 가공', '특수 크롬강 (X46Cr13) 사용', '진공 열처리를 통한 내마모성 확보', '정밀 설계로 생산 효율 20% 향상']
    },
    {
      name: 'Roller Shell (롤러 쉘)',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      features: ['고하중 견디는 표면 경화 처리', '다양한 치형 패턴 (Dimple, Fluted)', '균일한 압력 분산 설계', '긴 교체 주기 실현']
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">사업분야</h1>
          <p className="text-gray-400 text-lg">최상의 효율과 품질을 보장하는 기홍의 솔루션입니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl">
            <button 
              onClick={() => setActiveCategory('plant')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeCategory === 'plant' ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-800'}`}
            >
              PLANT 사업부문
            </button>
            <button 
              onClick={() => setActiveCategory('precision')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeCategory === 'precision' ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-800'}`}
            >
              정밀사업부문
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-20">
          {(activeCategory === 'plant' ? plantItems : precisionItems).map((item, idx) => (
            <div key={item.name} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{item.name}</h3>
                <div className="space-y-4">
                  {item.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 px-6 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-all">
                  기술자료 요청하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
