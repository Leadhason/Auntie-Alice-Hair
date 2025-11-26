import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Transparent at the very top, solid dark background when scrolled
  const navBackground = isScrolled 
    ? 'bg-stone-900/95 backdrop-blur-md py-4 shadow-lg' 
    : 'bg-transparent py-6';

  // Text colors
  const logoColor = isScrolled ? 'text-amber-100' : 'text-white';
  const textColor = isScrolled ? 'text-stone-300' : 'text-stone-200';
  const hoverColor = 'hover:text-amber-400';
  const buttonStyle = isScrolled 
    ? 'bg-amber-400 text-stone-900 hover:bg-amber-500' 
    : 'bg-amber-400 text-stone-900 hover:bg-amber-500';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className={`text-xl md:text-2xl font-serif font-bold tracking-widest flex items-center gap-2 ${logoColor}`}
        >
          <Sparkles className="w-5 h-5 text-amber-400" />
          AUNTIE ALICE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm tracking-widest uppercase transition-colors ${textColor} ${hoverColor}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')}>
            <button className={`${buttonStyle} px-6 py-2 rounded-none font-bold uppercase text-xs tracking-widest transition-all`}>
              Book Now
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-stone-100' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-900 border-t border-stone-800 p-6 flex flex-col space-y-4 shadow-2xl h-screen">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-stone-300 hover:text-amber-400 text-lg font-serif"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')}>
            <button className="w-full bg-amber-400 text-stone-900 px-6 py-3 mt-4 font-bold uppercase text-sm tracking-widest">
              Book Appointment
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;