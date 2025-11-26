
import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-100 min-h-screen scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Our Work</h2>
           <p className="text-stone-500 mt-4 font-light">See some of our recent styles</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.GALLERY.map((src, index) => (
            <div key={index} className={`relative overflow-hidden group ${index === 1 ? 'row-span-2 h-full' : 'h-80'}`}>
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif italic text-xl">View Style</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block border-b border-stone-900 text-stone-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors uppercase text-xs tracking-widest font-bold">
             Follow us on Instagram
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
