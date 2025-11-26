import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { ArrowRight, Clock, Sparkles, Info, X, Droplets } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  return (
    <section id="services" className="py-24 bg-stone-50 min-h-screen scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 text-stone-900">Our Services</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-96 overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
                   <span className="text-white font-serif italic text-lg">{service.price}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4 border-l-2 border-amber-200 pl-4">
                {service.description}
              </p>
              <button className="flex items-center text-xs uppercase tracking-widest font-bold text-stone-900 hover:text-amber-600 transition-colors">
                View Details <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="relative bg-stone-50 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl flex flex-col md:flex-row animate-fade-in-up">
            <button 
              onClick={() => setSelectedService(null)} 
              className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full hover:bg-amber-400 hover:text-stone-900 transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Side */}
            <div className="md:w-5/12 h-64 md:h-auto relative">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                <h3 className="text-3xl font-serif text-white">{selectedService.title}</h3>
              </div>
            </div>

            {/* Modal Content Side */}
            <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto">
              <div className="hidden md:block">
                <span className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-2 block">Service Details</span>
                <h3 className="text-4xl font-serif text-stone-900 mb-2">{selectedService.title}</h3>
                <p className="text-2xl font-serif italic text-stone-500 mb-6">{selectedService.price}</p>
              </div>

              <div className="md:hidden mb-6">
                <p className="text-xl font-serif italic text-stone-900">{selectedService.price}</p>
              </div>

              <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                {selectedService.description}
              </p>

              <div className="space-y-6">
                {/* Duration */}
                <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-1">Time Investment</h4>
                    <p className="text-stone-600">{selectedService.duration}</p>
                  </div>
                </div>

                {/* Products */}
                <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Droplets className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-1">Products Used</h4>
                    <ul className="text-stone-600 text-sm flex flex-wrap gap-2">
                      {selectedService.productsUsed?.map((product, idx) => (
                        <li key={idx} className="bg-stone-100 px-2 py-1 rounded text-stone-700">
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preparation */}
                <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Info className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide mb-1">Client Prep</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{selectedService.preparation}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-100">
                <button className="w-full bg-stone-900 text-white py-4 uppercase tracking-widest font-bold text-sm hover:bg-amber-400 hover:text-stone-900 transition-all shadow-lg hover:shadow-amber-400/20">
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;