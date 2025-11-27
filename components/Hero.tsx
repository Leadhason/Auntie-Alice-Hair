import React from 'react';
import { ArrowDown } from 'lucide-react';
import { IMAGES } from '../constants';

const RevealText = ({ text, delayStart = 0, className = "" }: { text: string, delayStart?: number, className?: string }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="animate-reveal inline-block opacity-0"
          style={{ 
            animationDelay: `${delayStart + index * 0.06}s`,
            transition: 'all 0.5s ease'
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-1000 { animation-delay: 1.5s; } /* Adjusted for after text reveal */
        .delay-1200 { animation-delay: 1.7s; }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/alice-7.jfif" 
          alt="Luxury Hair Model" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-10 container mx-auto px-6 text-center">
        <h2 className="text-amber-400 tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in-up">
          Welcome to Auntie Alice Hair Center
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          <RevealText text="Love Your" delayStart={0.3} /> 
          <br />
          <span className="italic text-stone-300">
            <RevealText text="Natural Hair" delayStart={1.0} className="italic" />
          </span>
        </h1>

        <p className="text-stone-300 max-w-xl mx-auto mb-10 text-lg font-light leading-relaxed animate-fade-in-up delay-1000">
          Specializing in silk presses, braids, and healthy hair treatments. Experience the care of a true expert.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-1200">
          <button 
            onClick={() => scrollTo('booking')}
            className="bg-amber-400 hover:bg-amber-500 text-stone-900 px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all transform hover:-translate-y-1"
          >
            Book Appointment
          </button>
          <button 
            onClick={() => scrollTo('gallery')}
            className="border border-stone-400 hover:border-white text-stone-300 hover:text-white px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all bg-transparent backdrop-blur-sm"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => scrollTo('services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce delay-1200 opacity-0 animate-fade-in-up cursor-pointer hover:text-amber-400 transition-colors animate-bounce" 
        style={{ animationDelay: '2s' }}
      >
        <ArrowDown className="w-6 h-6 opacity-70" />
      </div>
    </section>
  );
};

export default Hero;