
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Technology from '../components/Technology';
import History from '../components/History';
import Contact from '../components/Contact';
import { View } from '../App';

interface HomeProps {
  setView: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <>
      <Hero />
      <section className="py-20 bg-gray-50">
        <About />
        <div className="max-w-7xl mx-auto px-4 mt-8 text-right">
          <button onClick={() => setView('company')} className="text-orange-600 font-bold hover:underline">회사소개 더보기 →</button>
        </div>
      </section>
      <section className="py-20">
        <Products />
        <div className="max-w-7xl mx-auto px-4 mt-8 text-center">
          <button onClick={() => setView('business')} className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700">전체 사업분야 보기</button>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <Technology />
        <div className="max-w-7xl mx-auto px-4 mt-8 text-right">
          <button onClick={() => setView('research')} className="text-orange-600 font-bold hover:underline">연구개발 상세 →</button>
        </div>
      </section>
      <section className="py-20">
        <History />
      </section>
      <section className="py-20 bg-gray-900 text-white">
        <Contact />
      </section>
    </>
  );
};

export default Home;
