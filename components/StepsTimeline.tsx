import React from 'react';
import { CONTENT } from '../constants';

const StepsTimeline: React.FC = () => {
  const { title, steps } = CONTENT.process;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-16">
          {title}
        </h2>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <div className={`flex-1 w-full ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-dark font-bold text-xs rounded-full mb-3">
                      STEP 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-sans">{step.body}</p>
                  </div>

                  {/* Marker (Center) */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-white shadow-md z-10 relative">
                  </div>

                  {/* Image Side */}
                  <div className={`flex-1 w-full ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    {step.image && (
                      <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64 w-full relative group">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsTimeline;