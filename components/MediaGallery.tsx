import React from 'react';
import { CONTENT } from '../constants';

const MediaGallery: React.FC = () => {
  const { title, items } = CONTENT.gallery;

  return (
    <section id="media" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 border-l-4 border-primary pl-6">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-lg bg-gray-800 ${idx === 1 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="font-display font-semibold text-lg">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;