
import React from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, scrolled }) => {
  const navLinks: { name: string; view: View }[] = [
    { name: '홈', view: 'home' },
    { name: '회사소개', view: 'company' },
    { name: '사업분야', view: 'business' },
    { name: '기술연구', view: 'research' },
    { name: '고객지원', view: 'support' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setView('home')}
          >
            <span className="text-2xl font-bold tracking-tighter text-orange-600">GID</span>
            <span className="text-xl font-medium text-gray-800">(주)기홍</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setView(link.view)}
                className={`font-medium transition-colors ${
                  currentView === link.view 
                    ? 'text-orange-600 border-b-2 border-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
