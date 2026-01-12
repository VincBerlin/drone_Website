import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { brandTitle1, brandTitle2, tagline, navItems } = CONTENT.header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col">
          <h1 className="font-display font-bold text-xl leading-none tracking-wide text-dark">
            <span className="text-primary">{brandTitle1}</span> {brandTitle2}
          </h1>
          <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 hidden sm:block">
            {tagline}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className="text-sm font-semibold text-dark hover:text-primary transition-colors duration-300 uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-dark hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;