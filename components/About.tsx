import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import { Sparkles, Heart, Award, Leaf, Users, Coffee, Scissors, Wifi } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="bg-stone-50 overflow-hidden scroll-mt-20">
      {/* 1. Hero Section - Full width header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.ABOUT_HERO} 
            alt="Auntie Alice Hair Center Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]"></div>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 text-center px-6"
        >
          <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Est. 2005</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">About Us</h1>
          <p className="text-stone-200 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Where traditional care meets modern styling in a sanctuary of calm.
          </p>
        </motion.div>
      </div>

      {/* 2. Founder / Bio Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative order-2 lg:order-1"
          >
             {/* Decorative Elements */}
             <div className="absolute top-6 -left-6 w-full h-full border-2 border-amber-200 z-0 hidden md:block"></div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-stone-100 rounded-full z-0 opacity-50 blur-3xl"></div>
             
             <img 
               src={IMAGES.ABOUT_ZAI} 
               alt="Auntie Alice - Founder" 
               className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl rounded-sm"
             />
             <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 shadow-xl max-w-xs hidden md:block">
                <p className="font-serif italic text-stone-900 text-lg">"Healthy hair is the ultimate luxury."</p>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <span className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-3 block">The Matriarch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              Meet <span className="italic text-amber-600">Auntie Alice</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
              <p>
                For over 20 years, Alice has been a pillar in the hair care community. Starting in her mother's kitchen and expanding to renowned salons across Accra and internationally, she mastered the art of listening to hair.
              </p>
              <p>
                Auntie Alice Hair Center was established to bring a sense of home back to the salon experience. "I noticed that high-end salons often felt cold," Alice says. "I wanted to create a place that felt like visiting family—if your family happened to be world-class styling experts."
              </p>
              <p>
                Here, you are treated with the respect and care of an old friend. Whether you need a protective style or a silk press, Alice prioritizes the long-term integrity of your crown above all else.
              </p>
            </div>
            
            <div className="flex items-center gap-8 mt-10 border-t border-stone-200 pt-8">
               <div>
                  <h4 className="text-3xl font-serif text-amber-600">20+</h4>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Years Experience</p>
               </div>
               <div className="h-12 w-px bg-stone-200"></div>
               <div>
                  <h4 className="text-3xl font-serif text-amber-600">8k+</h4>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Happy Clients</p>
               </div>
               <div className="h-12 w-px bg-stone-200"></div>
               <div>
                  <h4 className="text-3xl font-serif text-amber-600">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Care Focused</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. The Luxe Process (New Section) */}
      <section className="bg-stone-100 py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
             <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">The Standard</span>
             <h2 className="text-4xl font-serif mt-3 text-stone-900">The Signature Experience</h2>
             <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: <Users className="w-8 h-8 text-amber-600" />,
                title: "Consultation",
                desc: "We never start without talking. We analyze your scalp health, porosity, and lifestyle to create a hair plan that works for you."
              },
              {
                icon: <Leaf className="w-8 h-8 text-amber-600" />,
                title: "Custom Care",
                desc: "Every wash includes a steam hydration treatment and a cocktail of premium products mixed specifically for your hair's needs."
              },
              {
                icon: <Scissors className="w-8 h-8 text-amber-600" />,
                title: "Precision Styling",
                desc: "From the trim to the final style, our techniques are designed to promote retention and minimize heat damage."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-400"
              >
                <div className="mb-6 bg-stone-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Philosophy Section - Dark Contrast */}
      <div className="bg-stone-900 text-stone-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={IMAGES.PHILOSOPHY_BG} alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-stone-900/50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="md:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our Philosophy</h2>
                    <p className="text-stone-400 text-lg leading-relaxed mb-8">
                        We don't just style hair, we cultivate it. We believe that true beauty starts with health, and we are dedicated to educating our clients on how to maintain their crowns between visits.
                    </p>
                    <ul className="space-y-6">
                        {[
                            "Healthy scalp is the foundation of growth.",
                            "Gentle detangling to protect your density.",
                            "Protective styles that actually protect."
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-stone-300 text-lg">
                                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="md:w-1/2 grid grid-cols-2 gap-4"
                >
                    <div className="bg-stone-800 p-8 rounded-xl border border-stone-700 hover:border-amber-500/50 transition-colors">
                        <Heart className="w-8 h-8 text-amber-400 mb-4" />
                        <h3 className="font-serif text-xl mb-2">We Care</h3>
                        <p className="text-stone-500 text-sm">We check your hair health at every visit.</p>
                    </div>
                    <div className="bg-stone-800 p-8 rounded-xl border border-stone-700 hover:border-amber-500/50 transition-colors translate-y-8">
                        <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
                        <h3 className="font-serif text-xl mb-2">Quality First</h3>
                        <p className="text-stone-500 text-sm">We only use top-tier, salon-grade products.</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>

      {/* 5. The Sanctuary (New Section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="md:w-1/2 h-[500px] relative"
            >
              <div className="absolute inset-0 bg-amber-200 transform translate-x-4 translate-y-4"></div>
              <img 
                src={IMAGES.SALON_DETAIL} 
                alt="Salon Amenities" 
                className="relative z-10 w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="md:w-1/2"
            >
              <span className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-3 block">The Space</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">A Sanctuary for You</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                We designed the Hair Center to be a retreat from the hustle of the city. Our salon is a quiet, private space where you can unwind.
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-center gap-3 text-stone-800 font-serif">
                  <Coffee className="w-5 h-5 text-amber-600" />
                  <span>Complimentary Coffee & Tea</span>
                </div>
                <div className="flex items-center gap-3 text-stone-800 font-serif">
                  <Wifi className="w-5 h-5 text-amber-600" />
                  <span>High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3 text-stone-800 font-serif">
                  <Users className="w-5 h-5 text-amber-600" />
                  <span>One-on-One Attention</span>
                </div>
                <div className="flex items-center gap-3 text-stone-800 font-serif">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span>Relaxing Environment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <div className="bg-stone-50 py-24 border-t border-stone-200">
        <div className="container mx-auto px-6 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl mx-auto"
           >
             <Award className="w-12 h-12 text-amber-500 mx-auto mb-6" />
             <h2 className="text-4xl font-serif text-stone-900 mb-6">Ready for the Auntie Alice Experience?</h2>
             <p className="text-stone-600 mb-10 text-lg">
                Join the hundreds of women who trust Auntie Alice with their hair. 
                We are here to help you look your best, naturally.
             </p>
             <button className="bg-stone-900 text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-amber-500 hover:text-stone-900 transition-all shadow-lg hover:shadow-amber-500/20">
                Book Appointment
             </button>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;