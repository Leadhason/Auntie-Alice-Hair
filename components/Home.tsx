
import React from 'react';
import Hero from './Hero';
import Testimonials from './Testimonials';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Featured Services Preview */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">Expertise</span>
                    <h2 className="text-4xl font-serif mt-2 text-stone-900">Signature Styles</h2>
                </div>
                <Link to="/services" className="hidden md:flex items-center text-sm uppercase tracking-widest font-bold text-stone-900 hover:text-amber-600 transition-colors mt-4 md:mt-0">
                    View All Services <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES.slice(0, 3).map((service) => (
                    <Link to="/services" key={service.id} className="group block">
                        <div className="relative h-80 overflow-hidden mb-4">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                            {service.title}
                        </h3>
                        <p className="text-stone-500 text-sm line-clamp-2">
                            {service.description}
                        </p>
                    </Link>
                ))}
            </div>

            <div className="mt-12 md:hidden text-center">
                 <Link to="/services" className="inline-flex items-center text-sm uppercase tracking-widest font-bold text-stone-900 hover:text-amber-600 transition-colors border-b border-stone-900 pb-1">
                    View All Services <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="bg-stone-900 py-24 border-t border-stone-800">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Your Hair Deserves Luxury</h2>
              <p className="text-stone-400 max-w-2xl mx-auto mb-10 text-lg">
                  Experience the premier destination for textured hair care. Appointments fill up quickly.
              </p>
              <Link to="/booking">
                <button className="bg-amber-400 hover:bg-amber-500 text-stone-900 px-10 py-4 uppercase tracking-widest font-bold text-sm transition-all transform hover:-translate-y-1">
                    Book Your Visit
                </button>
              </Link>
          </div>
      </section>
    </>
  );
};

export default Home;
