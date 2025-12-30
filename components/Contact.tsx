
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">기홍은 언제나 <br/>항상 열려있습니다</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm uppercase mb-1">Address</h4>
                <p className="text-lg">경기도 화성시 비봉면 현대기아로 825-15</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm uppercase mb-1">Phone / Fax</h4>
                <p className="text-lg">031-431-3800 / 031-356-5257</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm uppercase mb-1">Email</h4>
                <p className="text-lg">hdkim600@naver.com (전자세금계산서)</p>
                <p className="text-lg">ghplant@nate.com (회사전용)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.7601950247954!2d126.85309317676646!3d37.25333557212176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b718991a0c8b9%3A0xc3f5c97356612e0b!2z6rK96riw64-EIOtmkeyEseyLnCDruYTrubnrqbQg7ZiE64yA6riw7JWE66GcIDgyNS0xNQ!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GIHONG Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
