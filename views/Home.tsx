
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const CATEGORY_ITEMS = [
  { name: 'Vape Devices', image: 'https://images.unsplash.com/photo-1550418290-a8d86ad674a6?q=80&w=600&h=800&auto=format&fit=crop' },
  { name: 'E-Liquids', image: 'https://images.unsplash.com/photo-1594918715878-1b2d7f87a8e7?q=80&w=600&h=800&auto=format&fit=crop' },
  { name: 'Disposables', image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=600&h=800&auto=format&fit=crop' },
  { name: 'Glassware', image: 'https://images.unsplash.com/photo-1610444697397-6c8411b43521?q=80&w=600&h=800&auto=format&fit=crop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&h=800&auto=format&fit=crop' },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 lg:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-premium-purple/30 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-premium-pink/20 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-60"></div>
          
          {/* Moody Dark Cloudy Atmosphere */}
          <div className="absolute inset-0 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1920&auto=format&fit=crop" 
              className="w-full h-full object-cover filter contrast-125 brightness-[0.25] grayscale"
              alt="Dark Atmosphere"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-premium-dark via-premium-dark/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-4xl text-left">
              <div className="inline-block px-5 py-2 glass rounded-full mb-10 border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-premium-accent">
                  Ukiah's Premier Smoke Destination
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Elevate Your <br />
                <span className="bg-gradient-to-r from-premium-purple via-premium-pink to-premium-blue bg-clip-text text-transparent">
                  Atmosphere.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                Discover a curated collection of premium hardware, exotic e-liquids, and handcrafted artisan glass in the heart of California.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
                <Link
                  to="/shop"
                  className="px-12 py-5 bg-white text-black font-black rounded-2xl text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 text-center"
                >
                  Shop Collection
                </Link>
                <Link
                  to="/gallery"
                  className="px-12 py-5 glass border-white/20 text-white font-bold rounded-2xl text-lg transition-all hover:bg-white/10 active:scale-95 text-center"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Right: Floating Vape Device */}
            <div className="hidden lg:flex justify-center items-center relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div className="absolute inset-0 bg-premium-purple/20 blur-[100px] rounded-full animate-pulse-slow"></div>
              <div className="relative z-10 animate-float">
                <div className="relative">
                  {/* Subtle Vapor emanating from device */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-64 bg-white/10 blur-[40px] rounded-full animate-pulse opacity-40"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=800&auto=format&fit=crop" 
                    className="w-[450px] h-[600px] object-cover rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 grayscale-[0.2] contrast-110"
                    alt="Premium Vape Device"
                  />
                  
                  {/* Glowing accents on the device */}
                  <div className="absolute top-1/4 right-0 w-1 h-20 bg-premium-purple blur-sm opacity-50"></div>
                  <div className="absolute bottom-1/4 left-0 w-1 h-32 bg-premium-pink blur-sm opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 bg-premium-dark relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Curated Selections</h2>
              <p className="text-gray-400 max-w-lg">Hand-picked premium products from the world's most trusted manufacturers.</p>
            </div>
            <Link to="/shop" className="text-premium-purple font-bold hover:text-premium-accent transition-colors flex items-center gap-2 group">
              Browse All Categories
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORY_ITEMS.map((cat) => (
              <Link 
                key={cat.name}
                to={`/shop?category=${cat.name}`}
                className="glass group relative h-72 rounded-3xl overflow-hidden border-white/5 flex items-end p-6 transition-all hover:scale-[1.03] hover:border-premium-purple/40 hover:shadow-2xl hover:shadow-premium-purple/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <img 
                  src={cat.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80" 
                  alt={cat.name}
                />
                <h3 className="relative z-20 text-white font-bold text-lg tracking-tight group-hover:text-premium-accent transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Top Shelf Picks</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-premium-purple to-premium-pink mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRODUCTS.filter(p => p.featured).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass rounded-[3.5rem] p-12 md:p-24 text-center border-white/10 bg-white/[0.02]">
            <h2 className="text-4xl md:text-6xl font-black mb-14 leading-tight">
              Ukiah's Hub for <br />
              <span className="bg-gradient-to-r from-premium-purple to-premium-pink bg-clip-text text-transparent">Authentic</span> Smoking Gear
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-premium-purple/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-premium-purple/20 transition-transform hover:rotate-6">
                  <svg className="w-10 h-10 text-premium-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">100% Authentic</h3>
                <p className="text-gray-400 leading-relaxed">Zero tolerance for clones. Every device is verified genuine with original manufacturer security codes.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-20 h-20 bg-premium-pink/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-premium-pink/20 transition-transform hover:-rotate-6">
                  <svg className="w-10 h-10 text-premium-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Curated Variety</h3>
                <p className="text-gray-400 leading-relaxed">From the latest high-performance mods and disposables to artisan-crafted functional glass art.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-20 h-20 bg-premium-blue/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-premium-blue/20 transition-transform hover:rotate-6">
                  <svg className="w-10 h-10 text-premium-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Expert Service</h3>
                <p className="text-gray-400 leading-relaxed">Our passionate team in Ukiah provides personalized guidance to ensure you find your perfect setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
