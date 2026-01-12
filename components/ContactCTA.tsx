import React from 'react';
import { CONTENT } from '../constants';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const { headline, body, ctaLabel, email } = CONTENT.contact;

  return (
    <section id="contact" className="py-24 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
          {headline}
        </h2>
        <p className="font-sans text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {body}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${email}`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="mr-2" size={20} />
            {ctaLabel}
          </a>
          {/* Optional Secondary link if needed */}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;