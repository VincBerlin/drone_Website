import React from 'react';
import { CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { headline, ctaPrimary } = CONTENT.hero;
  // Updated to top-down beach aerial view as requested
  const bgImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop";

  return (
    <section id="overview" className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Aerial beach view" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to ensure text legibility on bright sand */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in-up flex flex-col items-center">
          <h1 className="font-vibe text-6xl sm:text-7xl md:text-9xl mb-8 leading-none drop-shadow-lg tracking-wide">
            {headline.split(':')[1]?.trim() || "Beyond The Horizon"}
          </h1>
          
          {/* Vertical line below title */}
          <div className="hidden md:block w-px h-24 bg-white/80 mx-auto shadow-sm"></div>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            {/* Action buttons hidden as per minimal design reference */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;