import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden flex flex-col md:flex-row items-center justify-center">
      {/* Spline 3D Embed - Added pointer-events-none to allow scrolling over the iframe */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe 
          src='https://my.spline.design/transformmachine-ZeclrQt3dnmZKvfkD6YkFY3f/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="GIHONG 3D Machine"
          className="opacity-90 w-full h-full"
        ></iframe>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left pointer-events-none">
        <div className="max-w-2xl bg-white/10 backdrop-blur-[2px] p-8 rounded-2xl">
          <h2 className="text-orange-600 font-bold text-lg mb-2 tracking-widest uppercase">Technology & Innovation</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            고객을 위한 <br/>
            <span className="text-orange-600">끊임없는 연구와 개발</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
            25년 역사와 기술의 (주)기홍은 PLANT 설계, 시공 및 관련 기기 제작을 통해 산업 기계의 국산화와 신제품 개발에 앞장서고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 text-center"
            >
              제품 카탈로그 보기
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all text-center"
            >
              상담 문의하기
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;