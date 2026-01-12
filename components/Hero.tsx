import React from 'react';
import { CONTENT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { headline, subline, ctaPrimary, ctaPrimaryTarget, ctaSecondary, bgImage, alt } = CONTENT.hero;

  return (
    <section id="overview" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={alt} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-light max-w-7xl">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight">
            {headline}
          </h1>
          <p className="font-sans text-lg sm:text-xl mb-10 text-gray-200 leading-relaxed max-w-lg">
            {subline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={ctaPrimaryTarget} 
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-soft hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {ctaPrimary}
            </a>
            {ctaSecondary && (
              <a 
                href="#media" 
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-center"
              >
                {ctaSecondary}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;