import React from 'react';
import { CONTENT } from '../constants';

const MediaGrid: React.FC = () => {
  const { items } = CONTENT.gallery;

  return (
    <section id="media" className="bg-sand py-20 md:py-32 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
            <div className="md:w-1/3">
                <h2 className="font-display font-bold text-3xl uppercase tracking-[0.15em] mb-6">
                    LATEST LOGS
                </h2>
                <p className="font-sans text-gray-600 mb-6">
                    Documenting every flight, every test, and every breakthrough.
                </p>
                <a href="#updates" className="text-sm font-bold uppercase tracking-widest border-b border-dark pb-1 hover:opacity-60">View All Updates</a>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {/* Vertical Image (Fuel Up style right side) */}
                 <div className="aspect-[3/4] overflow-hidden">
                    <img src={items[0].src} alt={items[0].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <div className="flex flex-col gap-4">
                    <div className="aspect-square overflow-hidden">
                        <img src={items[1].src} alt={items[1].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="aspect-square overflow-hidden bg-primary flex items-center justify-center p-6 text-center text-white">
                        <div>
                            <span className="font-vibe text-2xl block mb-2">join us</span>
                            <span className="font-sans text-xs uppercase tracking-widest">on the journey</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MediaGrid;