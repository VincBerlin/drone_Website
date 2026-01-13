import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { brandTitle1, brandTitle2, navItems } = CONTENT.header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-primary/95 text-white py-4 shadow-md' 
            : 'bg-transparent text-white py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex flex-col group">
            <h1 className="font-vibe text-2xl md:text-3xl leading-none">
              {brandTitle1.toLowerCase()} {brandTitle2.toLowerCase()}
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                className={`text-xs font-display font-bold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-70 ${isScrolled ? 'text-white' : 'text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-40 bg-primary transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-vibe text-3xl hover:text-secondary transition-colors"
            >
              {item.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;