
import React from 'react';

const Products: React.FC = () => {
  const plantProducts = [
    { name: 'Taco Dryer', desc: '고효율 순환식 건조기', icon: '♨️' },
    { name: 'Sludge Dryer', desc: '산업용 슬러지 건조 시스템', icon: '🏗️' },
    { name: 'Pellet Mill', desc: '대용량 펠렛 제조 설비', icon: '⚙️' },
    { name: 'Hammer Mill', desc: '고성능 분쇄기', icon: '🔨' },
    { name: 'Batch Mixer', desc: '정밀 혼합 장치', icon: '🌀' },
    { name: 'Bucket Elevator', desc: '수직 반송 시스템', icon: '⬆️' },
  ];

  const precisionProducts = [
    { name: 'Pellet Die', desc: '고품질 크롬강 펠렛 다이', icon: '⭕' },
    { name: 'Roller Shell', desc: '정밀 가공 롤러 쉘', icon: '🔘' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4">Our Products</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">주요 생산 제품</h3>
      </div>

      <div className="mb-20">
        <h4 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <span className="w-8 h-1 bg-orange-600 rounded"></span>
          PLANT 사업부문
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantProducts.map((p) => (
            <div key={p.name} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{p.name}</h5>
              <p className="text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <span className="w-8 h-1 bg-orange-600 rounded"></span>
          정밀사업부문
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {precisionProducts.map((p) => (
            <div key={p.name} className="flex gap-6 bg-orange-50 p-8 rounded-2xl border border-orange-100 group">
              <div className="text-5xl">{p.icon}</div>
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{p.name}</h5>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 빠른 기동특성 및 적은 소모비용</li>
                  <li>• 독일 수입 GUN DRILL MACHINE 가공</li>
                  <li>• 진공 열처리를 통한 최고 품질 유지</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
