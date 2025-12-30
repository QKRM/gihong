
import React, { useState } from 'react';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="animate-fadeIn">
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">고객지원</h1>
          <p className="text-gray-600 text-lg">문의 사항을 남겨주시면 정성을 다해 답변해 드리겠습니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white border-2 border-orange-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">고객 상담 안내</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 uppercase">업무 시간</p>
                  <p className="text-lg font-medium">평일 09:00 - 18:00 (주말 공휴일 제외)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase">견적 문의</p>
                  <p className="text-2xl font-bold text-orange-600">031-431-3800</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase">FAX</p>
                  <p className="text-lg">031-356-5257</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white p-8 rounded-3xl">
              <h4 className="font-bold mb-4">자료 다운로드</h4>
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-xl flex justify-between items-center transition-all mb-3">
                <span>(주)기홍 카탈로그 국문</span>
                <span>PDF ↓</span>
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-xl flex justify-between items-center transition-all">
                <span>Company Brochure ENG</span>
                <span>PDF ↓</span>
              </button>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-10">1:1 문의하기</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">성함/업체명 *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" 
                    placeholder="홍길동 / (주)OO산업"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일 주소 *</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" 
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">문의 제목 *</label>
                <input 
                  required 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" 
                  placeholder="제목을 입력해 주세요"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
                <textarea 
                  required 
                  rows={6} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" 
                  placeholder="세부적인 문의 사항을 남겨주시면 정확한 상담이 가능합니다."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 shadow-xl shadow-orange-100 transition-all">
                상담 문의 제출
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
