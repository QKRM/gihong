
import React from 'react';

const History: React.FC = () => {
  const events = [
    { year: "2019's", content: "아프리카 우간다 배합사료공장 신축공사, 네오베이스 자돈 배합사료공장 신축" },
    { year: "2018's", content: "2018년 기술평가 우수기업 인증" },
    { year: "2017's", content: "캄보디아 법인 설립 GiHong Farms Co., Ltd." },
    { year: "2016's", content: "ISO 14001 : 2004 / KS I ISO 14001 : 2009 인증" },
    { year: "2010's", content: "신·재생에너지 전문기업 인증(지식경제부), 반월공단 확장 이전" },
    { year: "2006's", content: "사료배합장치 특허 출원, (주)선진 중국 성도공장 배합사료공장 신축(TURNKEY BASE)" },
    { year: "2002's", content: "(주)기홍 법인 설립 (산업기계, 농축산용기계 전문작업업체)" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4">Milestones</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">기홍이 걸어온 발자취</h3>
      </div>

      <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:left-1/2">
        {events.map((event, index) => (
          <div key={index} className="mb-12 relative">
            {/* Dot */}
            <div className="absolute top-0 -left-[9px] md:left-[-9px] w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
            
            <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:-translate-x-full' : 'md:pl-12'}`}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                <span className="text-orange-600 font-black text-2xl mb-2 block">{event.year}</span>
                <p className="text-gray-700 leading-relaxed font-medium">{event.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
