import React, { useState } from 'react';
import { Calendar, CreditCard, Clock, AlertCircle, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Is hair included in braiding services?",
    answer: "Yes, for most standard braiding styles (Knotless, Box Braids), we provide pre-stretched X-pression hair in natural colors (1, 1B, 2, 4). If you desire a specific color or custom blend, please mention this in your booking notes."
  },
  {
    question: "Do you need to wash my hair before my appointment?",
    answer: "For Braids and Extension installs, please arrive with your hair freshly washed, blow-dried straight, and free of oils. For Silk Presses, Cuts, and Treatments, a luxury wash and steam hydration service is included in your appointment."
  },
  {
    question: "Can I bring a guest or children?",
    answer: "To maintain the tranquility of our center and privacy for our clients, we enforce a strict no-guest policy. Space is limited to the client receiving service only."
  },
  {
    question: "How long does a Silk Press last?",
    answer: "With proper maintenance (wrapping nightly, avoiding humidity/water), a silk press can last 2-3 weeks. However, this varies based on your lifestyle and natural texture."
  },
  {
    question: "Do you take walk-ins?",
    answer: "Auntie Alice Hair Center operates by appointment only to ensure every client receives our undivided attention and full service time. We recommend booking 2-3 weeks in advance."
  }
];

const Booking: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="booking" className="py-24 bg-stone-50 min-h-screen scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">Reservations</span>
           <h1 className="text-4xl md:text-6xl font-serif mt-3 text-stone-900">Book Appointment</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto mb-24">
            {/* Policy Column */}
            <div className="lg:w-1/3 space-y-8">
                <div className="bg-white p-8 border-t-4 border-amber-400 shadow-sm">
                    <h3 className="font-serif text-2xl mb-6">Center Policies</h3>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <CreditCard className="w-6 h-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Deposits</h4>
                                <p className="text-stone-600 text-sm">A $50 non-refundable deposit is required to secure all appointments. This goes towards your final service.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Clock className="w-6 h-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Late Policy</h4>
                                <p className="text-stone-600 text-sm">There is a 15-minute grace period. After 15 minutes, a $20 fee applies. After 20 minutes, your appointment may be cancelled.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Cancellations</h4>
                                <p className="text-stone-600 text-sm">Please reschedule at least 48 hours in advance to transfer your deposit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-stone-900 text-stone-300 p-8">
                    <h3 className="font-serif text-xl text-white mb-4">Questions?</h3>
                    <p className="mb-4 text-sm">Not sure what to book? Send us a message or check our FAQ.</p>
                    <a href="mailto:hello@auntiealicehair.com" className="text-amber-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Contact Us &rarr;</a>
                </div>
            </div>

            {/* Booking Form Column */}
            <div className="lg:w-2/3">
                <div className="bg-white p-8 md:p-12 shadow-lg">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-100">
                        <Calendar className="w-6 h-6 text-amber-500" />
                        <h3 className="text-xl font-serif">Request a Date</h3>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">First Name</label>
                                <input type="text" className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Last Name</label>
                                <input type="text" className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Phone</label>
                                <input type="tel" className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors" placeholder="+233 24 360 1675" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Service of Interest</label>
                            <select className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors appearance-none">
                                <option>Select a service...</option>
                                <option>Silk Press</option>
                                <option>Braids (Knotless/Fulani)</option>
                                <option>Extensions (Microlinks/Sew-in)</option>
                                <option>Color Consultation</option>
                                <option>Treatment Only</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Desired Date (Optional)</label>
                            <input type="date" className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Notes</label>
                            <textarea className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-400 outline-none transition-colors h-32 resize-none" placeholder="Tell us about your hair history or specific concerns..."></textarea>
                        </div>

                        <button type="button" className="w-full bg-stone-900 text-white py-5 uppercase tracking-widest font-bold text-sm hover:bg-amber-500 hover:text-stone-900 transition-all shadow-lg mt-4">
                            Submit Request
                        </button>
                        <p className="text-xs text-stone-400 text-center mt-4">
                            * This is a request form. We will contact you within 24 hours to confirm availability.
                        </p>
                    </form>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24">
            <div className="text-center mb-12">
                <HelpCircle className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h2 className="text-3xl font-serif text-stone-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
                {FAQS.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-white border border-stone-200 overflow-hidden transition-all duration-300 hover:border-amber-300"
                    >
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                        >
                            <span className={`font-serif text-lg ${openFaqIndex === index ? 'text-amber-600' : 'text-stone-900'}`}>
                                {faq.question}
                            </span>
                            {openFaqIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-amber-500" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-stone-400" />
                            )}
                        </button>
                        
                        <div 
                            className={`px-6 transition-all duration-300 ease-in-out ${
                                openFaqIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;