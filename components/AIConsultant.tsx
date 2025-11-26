import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, MessageSquare, Loader2, Send } from 'lucide-react';

const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleConsultation = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      const apiKey = process.env.API_KEY || '';
      // Fallback or error handling if key is missing is handled by standard error catch or empty string check
      if (!apiKey) {
        setResponse("AI service is currently unavailable. Please contact us directly for a consultation.");
        setLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = 'gemini-2.5-flash';
      
      const systemInstruction = `
        You are 'Zai AI', a virtual assistant for Luxe Zai, a high-end hair salon specializing in textured and black hair.
        Your tone is elegant, professional, warm, and knowledgeable.
        Advise users on hair care, styles suitable for their face shape (if described), and maintenance for hairstyles like silk presses, braids, and extensions.
        Keep answers concise (under 100 words), helpful, and always encourage booking a consultation for personalized advice.
        If asked about prices, say "Please check our booking page for the most current investment tiers."
      `;

      const result = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction,
        }
      });
      
      setResponse(result.text || "I couldn't generate a response. Please try again.");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("An error occurred while connecting to Zai AI. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6">
                        <Sparkles className="w-3 h-3" />
                        AI Powered Styling
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        Not sure what <br /> <span className="text-amber-400 italic">style fits you?</span>
                    </h2>
                    <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                        Ask <strong>Zai AI</strong> about maintenance tips, style recommendations, or hair health advice. We combine luxury care with cutting-edge technology to guide your hair journey.
                    </p>
                    
                    <div className="flex gap-4 flex-wrap">
                        {['How to maintain a silk press?', 'Best protective style for vacation?', 'Routine for 4C hair?'].map((q) => (
                            <button 
                                key={q}
                                onClick={() => setPrompt(q)}
                                className="px-4 py-2 rounded-full border border-stone-700 text-stone-400 text-sm hover:border-amber-400 hover:text-amber-400 transition-colors"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-stone-700 shadow-2xl">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                    Your Question
                                </label>
                                <div className="relative">
                                    <textarea
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="Describe your hair type or ask for a style suggestion..."
                                        className="w-full bg-stone-900/50 border border-stone-700 rounded-xl p-4 text-stone-100 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all resize-none h-32"
                                    />
                                    <button 
                                        onClick={handleConsultation}
                                        disabled={loading || !prompt}
                                        className="absolute bottom-4 right-4 p-2 bg-amber-400 text-stone-900 rounded-lg hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {response && (
                                <div className="mt-6 animate-fade-in-up">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
                                            <Sparkles className="w-4 h-4 text-stone-900" />
                                        </div>
                                        <div className="bg-stone-700/30 p-4 rounded-r-xl rounded-bl-xl border border-stone-600/50">
                                            <p className="text-stone-200 leading-relaxed text-sm">
                                                {response}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AIConsultant;
