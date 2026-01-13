import React from 'react';

interface SplitSectionProps {
  id?: string;
  kicker?: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  ctaLabel?: string;
  reverse?: boolean; // If true, image on left, text on right
}

const SplitSection: React.FC<SplitSectionProps> = ({ 
  id, 
  kicker, 
  title, 
  body, 
  image, 
  alt, 
  reverse = false,
}) => {
  return (
    <section 
      id={id} 
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Column */}
          <div className="flex-1 max-w-xl">
            {kicker && (
              <h2 className="font-display font-bold text-3xl uppercase tracking-[0.15em] text-dark mb-8">
                {kicker.toUpperCase()}
              </h2>
            )}
            
            <div className="prose prose-lg text-gray-600 mb-8 font-sans leading-relaxed whitespace-pre-line">
               {/* Just showing body directly for cleaner look */}
               {body.replace(/TEXT_.*:/, "")}
            </div>
            
            {/* Minimalist divider */}
            <div className="w-12 h-1 bg-primary mb-6"></div>
          </div>

          {/* Media Column */}
          <div className="flex-1 w-full h-full">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SplitSection;