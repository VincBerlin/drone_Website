import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SplitSectionProps {
  id?: string;
  kicker?: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  ctaLabel?: string;
  reverse?: boolean; // If true, image on left, text on right
  bgColor?: 'white' | 'light-gray';
}

const SplitSection: React.FC<SplitSectionProps> = ({ 
  id, 
  kicker, 
  title, 
  body, 
  image, 
  alt, 
  ctaLabel, 
  reverse = false,
  bgColor = 'white' 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgColor === 'light-gray' ? 'bg-light-gray' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Column */}
          <div className="flex-1">
            {kicker && (
              <span className="block text-secondary font-bold text-sm uppercase tracking-widest mb-3">
                {kicker}
              </span>
            )}
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-6">
              {title}
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8 font-sans whitespace-pre-line">
              {body}
            </div>
            {ctaLabel && (
              <button className="group flex items-center text-primary font-semibold text-lg hover:text-opacity-80 transition-colors">
                {ctaLabel}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Media Column */}
          <div className="flex-1 w-full">
            <div className="relative rounded-lg overflow-hidden shadow-soft group">
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional decor element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full -z-10 blur-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SplitSection;