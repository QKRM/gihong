
import React from 'react';

const Company: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="bg-orange-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">회사소개</h1>
          <p className="text-orange-100 text-lg">25년의 신뢰와 기술로 미래를 설계합니다.</p>
        </div>
      </div>

      {/* CEO Message */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="CEO" className="rounded-2xl shadow-xl w-full" />
            <div className="mt-4 text-center">
              <p className="text-xl font-bold">김형동</p>
              <p className="text-gray-500">주식회사 기홍 대표이사</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-orange-600 font-bold mb-2 uppercase tracking-widest">CEO Greeting</h2>
            <h3 className="text-3xl font-bold mb-8 italic">"신뢰를 바탕으로 가치를 창출하는 기업"</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>안녕하십니까. 주식회사 기홍의 홈페이지를 방문해 주셔서 진심으로 환영합니다.</p>
              <p>저희 (주)기홍은 2002년 설립 이래, 산업 현장의 PLANT 설계 및 정밀 기계 제작 분야에서 외길을 걸어왔습니다. 수입에 의존하던 핵심 부품의 국산화를 시작으로 이제는 글로벌 시장에서도 경쟁력을 인정받는 기술 중심 기업으로 성장했습니다.</p>
              <p>우리는 단순히 기계를 만드는 것을 넘어, 고객사의 생산 효율을 극대화하고 친환경적이며 지속 가능한 산업 생태계를 구축하는 데 기여하고자 합니다.</p>
              <p>항상 초심을 잃지 않고, 고객 여러분의 목소리에 귀 기울이며 함께 성장해 나가는 든든한 파트너가 될 것을 약속드립니다. 감사합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Mission</h4>
              <p className="text-gray-600">창의적인 엔지니어링을 통해 산업 인프라의 가치를 높입니다.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🔭</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Vision 2030</h4>
              <p className="text-gray-600">아시아 No.1 친환경 PLANT 엔지니어링 선두주자</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Core Value</h4>
              <p className="text-gray-600">신뢰(Trust), 혁신(Innovation), 상생(Cooperation)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CI Introduction */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Corporate Identity</h3>
          <p className="text-gray-500">기홍의 정체성을 담은 로고 시스템입니다.</p>
        </div>
        <div className="bg-white border border-gray-100 p-12 rounded-3xl flex flex-col md:flex-row items-center justify-around gap-12">
          <div className="flex items-center gap-4">
            <span className="text-6xl font-black text-orange-600">GID</span>
            <div className="h-12 w-[2px] bg-gray-200"></div>
            <span className="text-3xl font-bold text-gray-800">(주)기홍</span>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 leading-relaxed">
              오렌지 컬러는 <strong>에너지와 도전 정신</strong>을 상징하며, 
              볼드한 산세리프 폰트는 <strong>산업의 견고함과 정밀한 기술력</strong>을 의미합니다.
              GID는 Gihong Industrial Development의 약자로 글로벌 확장을 지향합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
