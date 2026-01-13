import React from 'react';
import { CONTENT } from '../constants';

const IntroCollage: React.FC = () => {
  const { kicker, title, body } = CONTENT.intro;
  // Tropical/Drone themed images
  const img1 = "https://images.unsplash.com/photo-1524748967916-22a488c0374e?q=80&w=2027&auto=format&fit=crop"; // Tropical foliage
  const img2 = "https://images.unsplash.com/photo-1508614589041-895b8c9d7ef5?q=80&w=2070&auto=format&fit=crop"; // Drone detail
  const img3 = "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=2073&auto=format&fit=crop"; // Controller/Tech

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-[0.15em] text-dark mb-8">
              {title.split(':')[1] || "Precision in the Air"}
            </h2>
            <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
              {body.replace("TEXT_SECTION_BODY:", "").split('\n').map((p, i) => (
                <p key={i} className="mb-6">{p}</p>
              ))}
            </div>
            {/* Optional Signature or small graphic */}
            <div className="mt-8">
                <span className="font-vibe text-2xl text-primary">fly high.</span>
            </div>
          </div>

          {/* Right Collage Content */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
                {/* Large top image spanning 2 columns */}
                <div className="col-span-2 aspect-[16/9] overflow-hidden">
                     <img src={img1} alt="Tropical drone landscape" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Two bottom images */}
                <div className="col-span-1 aspect-square overflow-hidden">
                     <img src={img2} alt="Drone detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="col-span-1 aspect-square overflow-hidden">
                     <img src={img3} alt="Tech view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroCollage;