import React from 'react';
import { CONTENT } from '../constants';
import { Calendar } from 'lucide-react';

const UpdateLog: React.FC = () => {
  const { title, items } = CONTENT.updates;

  // Placeholder Empty State if no items
  if (!items || items.length === 0) {
    return (
      <section id="updates" className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">{title}</h2>
          <p className="text-gray-500">No updates logged yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="updates" className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-12 text-center">
          {title}
        </h2>

        <div className="space-y-6">
          {items.map((update, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-secondary flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex items-center text-gray-400 text-sm md:w-32 flex-shrink-0">
                <Calendar size={16} className="mr-2" />
                <span>{update.date}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-dark mb-2">
                  {update.title}
                </h3>
                <p className="font-sans text-gray-600">
                  {update.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdateLog;