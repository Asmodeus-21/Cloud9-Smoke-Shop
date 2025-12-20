
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-premium-purple/30 to-premium-dark z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1920&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          alt="Cloud9 Atmosphere"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Locally owned, community focused, and dedicated to the premium experience.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Modern Culture Meets <br />
                <span className="text-premium-purple">Unmatched Quality</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Cloud9 Smoke Shop is Ukiah’s trusted destination for premium vapes, e-liquids, and smoke accessories. We combine style, service, and quality under one roof. Born from a passion for the evolving industry, we aimed to create a space that feels more like a boutique lounge than a traditional smoke shop.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you're a seasoned enthusiast or just starting your journey, our expert team is here to guide you through our curated collection of authentic, high-performance gear.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-premium-accent font-bold">Authentic Products</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">5+</h4>
                  <p className="text-xs uppercase tracking-widest text-premium-accent font-bold">Years in Ukiah</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-premium-purple to-premium-pink blur-3xl opacity-20"></div>
              <div className="glass p-4 rounded-[3rem] relative z-10 border-white/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550418406-930438138982?q=80&w=800&h=1000&auto=format&fit=crop" 
                  className="rounded-[2.5rem] w-full object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-700"
                  alt="Premium Hardware Close-up"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Why Ukiah Chooses Cloud9</h2>
            <p className="text-gray-400">Our core values define every interaction we have with our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { title: "Locally Owned", desc: "A true California business invested in the Ukiah community." },
               { title: "Premium Brands", desc: "Only the biggest names like Geek Bar, Lost Mary, and more." },
               { title: "Expert Service", desc: "Passionate guides who prioritize your satisfaction and safety." },
               { title: "Authentic Products", desc: "Every item we sell is verified genuine with zero tolerance for clones." }
             ].map((val, i) => (
               <div key={i} className="glass p-10 rounded-3xl border-white/5 hover:border-premium-purple/20 transition-all text-center group">
                 <div className="w-12 h-1 bg-premium-purple mb-6 mx-auto group-hover:w-20 transition-all"></div>
                 <h3 className="text-xl font-bold mb-4 text-white">{val.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
