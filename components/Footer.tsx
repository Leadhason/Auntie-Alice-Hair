import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <a href="#" className="text-lg font-serif font-bold tracking-widest flex items-center gap-2 text-white mb-6">
                <Sparkles className="w-5 h-5 text-amber-400" />
                AUNTIE ALICE
              </a>
              <p className="text-sm leading-relaxed mb-6">
                Redefining the standard of hair care for the modern woman. 
                Experience the difference of dedicated artistry and family-like care.
              </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-amber-400" />
                <span>Almond Street<br/>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+233 24 360 1675</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>hello@auntiealicehair.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif mb-6">Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Tue - Fri</span>
                <span className="text-white">10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Sun - Mon</span>
                <span className="text-amber-400">Closed</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif mb-6">Stay Updated</h4>
            <p className="text-xs mb-4">Subscribe for exclusive offers and hair care tips.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-stone-900 border border-stone-800 p-3 text-sm focus:border-amber-400 outline-none text-white"
              />
              <button className="bg-amber-400 text-stone-900 font-bold uppercase text-xs tracking-widest py-3 hover:bg-amber-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Auntie Alice Hair Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;