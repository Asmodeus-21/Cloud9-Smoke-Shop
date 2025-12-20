
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-premium-purple/20 to-premium-dark"></div>
        <img 
          src="https://picsum.photos/seed/store/1920/1080" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          alt="Cloud9 Store Interior"
        />
        <div className="relative z-10 text-center px-6">
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-premium-purple to-premium-pink blur-2xl opacity-20"></div>
              <div className="glass p-4 rounded-[2.5rem] relative z-10 border-white/10">
                <img 
                  src="https://picsum.photos/seed/crew/800/1000" 
                  className="rounded-[2rem] w-full object-cover aspect-[4/5]"
                  alt="The Cloud9 Experience"
                />
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
               { title: "Friendly Staff", desc: "Knowledgeable experts who prioritize your satisfaction." },
               { title: "Authentic Products", desc: "Every item we sell is verified genuine with zero clones." }
             ].map((val, i) => (
               <div key={i} className="glass p-10 rounded-3xl border-white/5 hover:border-premium-purple/20 transition-all text-center">
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
