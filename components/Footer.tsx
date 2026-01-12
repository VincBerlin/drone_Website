import React from 'react';
import { CONTENT } from '../constants';

const Footer: React.FC = () => {
  const { line1, line2, links } = CONTENT.footer;

  return (
    <footer className="bg-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-white mb-1">{line1}</p>
          <p className="text-sm">{line2}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {links && links.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-sm hover:text-secondary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;