import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-stone-100 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">Client Love</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 text-white">Testimonials</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-stone-800 p-8 md:p-10 rounded-sm border border-stone-700/50 relative flex-1 min-w-[300px] max-w-md hover:border-amber-500/30 transition-colors"
            >
              {/* Decorative Quote Icon */}
              <Quote className="w-10 h-10 text-stone-700 absolute top-8 right-8" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/50 p-1"
                />
                <div>
                  <h4 className="font-serif text-xl text-amber-100 leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">{testimonial.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-stone-300 font-light text-lg italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;