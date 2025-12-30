
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4">About GIHONG</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            25년 역사와 기술 <br/>
            <span className="text-gray-500 font-medium">산업 현장의 든든한 파트너</span>
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            주식회사 기홍은 사료, 제분, 신재생에너지 화학 등 다양한 산업 분야에서 PLANT 설계, 시공 및 관련 기기 제작을 주력으로 성장해 왔습니다. 25년이 넘는 시간 동안 안정적인 성장을 이룩하며, 사료 및 산업 PLANT에 관한 독자적인 노하우와 핵심 역량을 축적해 왔습니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            우리는 일찍부터 INTRANET 및 CAD 등의 인프라를 구축하여, 수입 기계의 국산화와 신제품 개발에 힘을 기울여 왔으며, 새로운 아이템 개발을 위해 실용신안 및 각종 특허를 획득하며 기술 개발에 매진하고 있습니다.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="block text-2xl font-bold text-gray-900">2002</span>
              <span className="text-gray-500 text-sm">설립 연도</span>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="block text-2xl font-bold text-gray-900">25+</span>
              <span className="text-gray-500 text-sm">사업 경력</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/industrial/800/600" 
              alt="Industrial Plant" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
            <p className="text-orange-600 font-bold italic text-lg">"The Leader in Industrial Solutions"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
