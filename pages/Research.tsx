
import React from 'react';

const Research: React.FC = () => {
  const patents = [
    { title: '사료 자동 배합 장치 시스템', date: '2022-05', number: '10-2022-XXXXXXX' },
    { title: '고효율 산업용 건조기 공기 순환 기술', date: '2020-11', number: '10-2020-XXXXXXX' },
    { title: '신재생 에너지 펠렛 성형 다이의 표면 처리 방법', date: '2019-03', number: '10-2019-XXXXXXX' },
    { title: '슬러지 처리용 스크류 컨베이어 특수 설계', date: '2017-08', number: '10-2017-XXXXXXX' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">기술연구</h1>
          <p className="text-orange-700 text-lg">기홍의 성장은 멈추지 않는 기술 혁신에서 시작됩니다.</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">R&D 기술연구소</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              (주)기홍 부설 기술연구소는 산업 기계의 스마트화와 탄소 중립 시대를 대비한 친환경 설비 연구에 매진하고 있습니다. 
              최신 CAD/CAM 소프트웨어와 시뮬레이션 툴을 활용하여 설계 단계에서부터 완벽을 기합니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-orange-600 font-bold text-3xl mb-2">15+</p>
                <p className="text-gray-500 text-sm">핵심 연구 인력</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <p className="text-orange-600 font-bold text-3xl mb-2">30+</p>
                <p className="text-gray-500 text-sm">지적재산권 보유</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl p-1 w-full h-[400px] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" alt="Laboratory" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Intellectual Property</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patents.map((p, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl flex justify-between items-center group hover:bg-orange-600 transition-all">
                <div>
                  <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                  <p className="text-gray-400 group-hover:text-white/80">{p.number}</p>
                </div>
                <div className="text-right">
                  <span className="text-orange-400 font-mono group-hover:text-white">{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
