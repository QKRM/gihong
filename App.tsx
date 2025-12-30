
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Business from './pages/Business';
import Research from './pages/Research';
import Support from './pages/Support';

export type View = 'home' | 'company' | 'business' | 'research' | 'support';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0); // Reset scroll on view change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={setCurrentView} />;
      case 'company': return <Company />;
      case 'business': return <Business />;
      case 'research': return <Research />;
      case 'support': return <Support />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentView={currentView} setView={setCurrentView} scrolled={scrolled} />
      <main className="flex-grow pt-20">
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
