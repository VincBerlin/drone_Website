import React from 'react';
import { CONTENT } from '../constants';

const CardGrid: React.FC = () => {
  const { title, cards } = CONTENT.capabilities;

  return (
    <section id="capabilities" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-secondary md:mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <card.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-dark mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;