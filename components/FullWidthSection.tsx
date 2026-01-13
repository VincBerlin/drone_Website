import React from 'react';

interface FullWidthSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaLabel?: string;
  buttonStyle?: 'solid' | 'outline';
  overlayStrength?: 'light' | 'medium' | 'heavy';
}

const FullWidthSection: React.FC<FullWidthSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  image, 
  ctaLabel,
  buttonStyle = 'outline',
  overlayStrength = 'medium'
}) => {
  
  const overlayClass = {
    light: 'bg-black/20',
    medium: 'bg-black/40',
    heavy: 'bg-primary/60 mix-blend-multiply'
  }[overlayStrength];

  return (
    <section id={id} className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${image})` }}>
      
      <div className={`absolute inset-0 ${overlayClass} transition-colors duration-500`} />

      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
        <h2 className="font-vibe text-5xl md:text-7xl mb-6 drop-shadow-md">
          {title}
        </h2>
        
        {subtitle && (
          <p className="font-sans font-light text-lg md:text-xl tracking-wide opacity-90 mb-10 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}

        {ctaLabel && (
          <button className={`
            px-8 py-3 text-sm font-display font-bold uppercase tracking-[0.2em] transition-all duration-300
            ${buttonStyle === 'outline' 
                ? 'border border-white text-white hover:bg-white hover:text-dark' 
                : 'bg-white text-dark hover:bg-opacity-90'}
          `}>
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default FullWidthSection;