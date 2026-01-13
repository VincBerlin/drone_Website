import React from 'react';
import { CONTENT } from '../constants';

const FeatureGrid: React.FC = () => {
  const { title, cards } = CONTENT.capabilities;

  return (
    <section id="capabilities" className="bg-sand py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Layout mimicking Base Camp: Text top-left, Images filling rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          
          {/* Text Block */}
          <div className="col-span-1 lg:col-span-1 flex flex-col justify-center py-8">
            <h2 className="font-display font-bold text-2xl uppercase tracking-[0.15em] text-dark mb-6">
              {title.split(':')[1] || "Core Capabilities"}
            </h2>
            <p className="font-sans text-gray-600 mb-8 leading-relaxed">
              From high-altitude surveys to low-level cinematic tracking, our platform is adaptable to any environment.
            </p>
            <a href="#media" className="inline-block text-xs font-bold uppercase tracking-widest border-b border-dark pb-1 self-start hover:opacity-60 transition-opacity">
              Explore Specs
            </a>
          </div>

          {/* Image 1 (Top Right equivalent in a 2x4 grid flow, but here flexible) */}
          <div className="col-span-1 aspect-square overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" alt="Tech" />
             <div className="absolute bottom-4 left-4 text-white font-display font-bold uppercase text-sm z-10">Long Range</div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Cards as Images/Blocks */}
          {cards.slice(0, 2).map((card, idx) => (
             <div key={idx} className="col-span-1 aspect-square bg-white p-8 flex flex-col justify-between group hover:bg-primary transition-colors duration-300">
                <card.icon className="w-8 h-8 text-primary group-hover:text-white mb-4" />
                <div>
                    <h3 className="font-display font-bold text-lg uppercase mb-2 group-hover:text-white transition-colors">{card.title}</h3>
                    <p className="font-sans text-sm text-gray-500 group-hover:text-white/80 transition-colors">{card.body.replace("TEXT_CARD_BODY:", "")}</p>
                </div>
             </div>
          ))}

        </div>
        
        {/* Second Row - Large Image */}
        <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
             <div className="aspect-[16/9] md:aspect-auto overflow-hidden relative group">
                 <img src="https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Detail" />
             </div>
             <div className="bg-primary p-12 flex flex-col justify-center text-white">
                 <h3 className="font-vibe text-3xl mb-4">built for the wild.</h3>
                 <p className="font-sans opacity-90 leading-relaxed">
                    Carbon fiber reinforced frame, weather-sealed electronics, and redundant power systems ensure you always come home.
                 </p>
             </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;