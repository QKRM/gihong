
import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4">Innovation & R&D</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">최고의 기술력이 경쟁력입니다</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            (주)기홍은 수입 기계의 의존도를 낮추고 국내 산업 환경에 최적화된 설비를 위해 지속적으로 연구 개발에 투자하고 있습니다. CAD/CAM 시스템과 통합 인트라넷을 통해 설계부터 제작까지 모든 공정을 정밀하게 관리합니다.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.952 11.952 0 00-1.02 5.492c0 3.1 1.254 5.927 3.292 7.992l4.326 4.326a1 1 0 001.414 0l4.326-4.326c2.038-2.065 3.292-4.932 3.292-7.992 0-1.926-.454-3.74-1.258-5.348z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">다수의 특허 및 실용신안 보유</h4>
                <p className="text-gray-600">신재생에너지 및 산업 기계 분야의 독창적인 기술 보호 및 상용화</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">R&D 기술연구소 운영</h4>
                <p className="text-gray-600">외부 전문가 및 연구 기관과의 협력을 통한 차세대 설비 개발</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/tech1/300/400" alt="Tech" className="rounded-2xl shadow-lg w-full h-auto mt-8" />
          <img src="https://picsum.photos/seed/tech2/300/400" alt="Tech" className="rounded-2xl shadow-lg w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
