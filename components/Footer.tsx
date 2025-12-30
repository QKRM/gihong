
import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView?: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView?.('home')}>
            <span className="text-2xl font-bold tracking-tighter text-orange-600">GID</span>
            <span className="text-xl font-medium text-gray-800">(주)기홍</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <button onClick={() => setView?.('company')} className="hover:text-orange-600">회사소개</button>
            <button onClick={() => setView?.('business')} className="hover:text-orange-600">사업분야</button>
            <button onClick={() => setView?.('research')} className="hover:text-orange-600">기술연구</button>
            <button onClick={() => setView?.('support')} className="hover:text-orange-600">고객지원</button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between text-xs text-gray-400 gap-4">
          <div className="space-y-1">
            <p>경기도 화성시 비봉면 현대기아로 825-15 | (주)기홍 | 대표이사: 김형동</p>
            <p>사업자등록번호: [번호확인필요] | TEL: 031-431-3800 | FAX: 031-356-5257</p>
          </div>
          <p>© {new Date().getFullYear()} GIHONG Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
