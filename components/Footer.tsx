import React from 'react';
import { CONTENT } from '../constants';

const Footer: React.FC = () => {
  const { links } = CONTENT.footer;

  return (
    <footer className="bg-sand py-20 text-center">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-[0.2em] text-gray-400 mb-12">
          EXPLORE TOGETHER, FLY TOGETHER
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Social / Contact in a row */}
            <a href="#" className="w-10 h-10 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                <span className="font-bold">IG</span>
            </a>
            <a href="#" className="w-10 h-10 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                <span className="font-bold">TW</span>
            </a>
            <a href="#" className="w-10 h-10 border border-dark rounded-full flex items-center justify-center hover:bg-dark hover:text-white transition-all">
                <span className="font-bold">YT</span>
            </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          {links && links.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <span>© 2023 AERODYNAMICS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;