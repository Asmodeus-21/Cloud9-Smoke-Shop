
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const CATEGORY_ITEMS = [
  { name: 'Vape Devices', image: '/categories/vape-devices.svg' },
  { name: 'E-Liquids', image: '/categories/e-liquids.svg' },
  { name: 'Disposables', image: '/categories/disposables.svg' },
  { name: 'Glassware', image: '/categories/glassware.svg' },
  { name: 'Accessories', image: '/categories/accessories.svg' },
];

const VaporCloudLayer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-0 animate-[vapor-drift_12s_infinite]"
          style={{
            width: `${300 + Math.random() * 400}px`,
            height: `${200 + Math.random() * 300}px`,
            top: `${15 + Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(139, 92, 246, 0.05) 60%, transparent 100%)',
            filter: 'blur(80px)',
            animationDelay: `${i * 1.5}s`,
            transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px) translateZ(0)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      ))}
    </div>
  );
};

const VapeDeviceGraphic = () => (
  <div className="relative group/vape select-none scale-[0.7] md:scale-110 will-change-transform">
    {/* Vivid Neon Pink Underglow */}
    <div className="absolute inset-0 bg-premium-pink/40 blur-[80px] md:blur-[120px] rounded-full transition-all duration-1000 scale-125 md:scale-150 animate-pulse"></div>
    <div className="absolute inset-0 bg-premium-purple/20 blur-[100px] rounded-full transition-all duration-1000 scale-110 opacity-50"></div>
    
    {/* Stylized Premium Vape Graphic */}
    <div className="relative w-52 h-80 animate-float translate-z-0">
      {/* Device Body - Metallic Midnight Chrome Finish */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#4a1d4d] to-[#050505] rounded-[3.5rem] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Metallic Highlight Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-premium-pink/10 opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_45%,rgba(255,255,255,0.15)_50%,transparent_55%)] bg-[length:200%_100%] animate-[shimmer_5s_infinite]"></div>

        {/* Top Juice Chamber (Visible Window) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[85%] h-[20%] glass border-white/10 rounded-2xl overflow-hidden">
          {/* Animated Liquid */}
          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-t from-premium-pink/50 to-premium-purple/30">
            <div className="absolute -top-3 left-0 w-[200%] h-6 bg-premium-pink/40 rounded-[100%] animate-[wave_3s_infinite_linear] blur-sm"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>
        
        {/* High-Tech LED Display Panel */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[85%] h-[35%] bg-black/70 backdrop-blur-2xl rounded-2xl border border-white/10 flex flex-col items-center justify-center overflow-hidden">
           {/* Grid Pattern */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(236,72,153,0.3)_1px,transparent_1px)] [background-size:8px_8px]"></div>
           
           <div className="relative z-10 flex flex-col items-center space-y-3">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white tracking-tighter neon-text">92.0</span>
                <span className="text-xs font-bold text-premium-pink">W</span>
              </div>
              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-premium-pink to-premium-purple w-[88%] animate-pulse"></div>
              </div>
              <div className="flex gap-4">
                 <div className="text-[9px] font-black text-premium-pink/90 uppercase tracking-widest">Puff: 2.4k</div>
                 <div className="text-[9px] font-black text-white/70 uppercase tracking-widest">Temp: 420°</div>
              </div>
           </div>
        </div>
        
        {/* Branding Accent */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-[11px] font-black text-white tracking-[0.6em] uppercase mb-1 opacity-60">CLOUD9 ELITE</div>
          <div className="w-12 h-1.5 bg-gradient-to-r from-premium-pink via-premium-purple to-premium-pink bg-[length:200%_auto] animate-[gradient-shift_3s_linear_infinite] rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)]"></div>
        </div>
      </div>
      
      {/* Premium Mouthpiece */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-20 h-10 bg-[#0a0a0a] rounded-t-2xl border-t border-x border-white/20 shadow-inner flex items-center justify-center">
        <div className="w-10 h-4 bg-black rounded-full border border-white/10"></div>
      </div>
      
      {/* Rapid-Fire Vapor Rings - Faster (0.8s) and Multiple Rings */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        {[0, 0.16, 0.32, 0.48, 0.64].map((delay, i) => (
          <div 
            key={i}
            className="absolute w-12 h-12 border-4 border-white/20 rounded-full blur-[1px] animate-[vapor-ring_0.8s_infinite_linear]"
            style={{ animationDelay: `${delay}s` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const HeroGraphics = () => (
  <div className="relative w-full h-[400px] md:h-[650px] flex items-center justify-center translate-z-0">
    {/* Atmosphere Background */}
    <div className="absolute z-0">
      <div className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full bg-premium-pink/10 animate-pulse-slow blur-[100px]"></div>
      
      {/* Geometric Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[550px] md:h-[550px] border border-premium-pink/10 rounded-full -rotate-12 animate-[spin_30s_linear_infinite]"></div>
    </div>

    {/* The Premium Vape Device */}
    <div className="relative z-20">
      <VapeDeviceGraphic />
    </div>

    {/* Particle Field - Performance Optimized */}
    <div className="absolute inset-0 opacity-40 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="absolute bg-premium-pink rounded-full blur-[2px] animate-pulse"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            opacity: 0.1 + Math.random() * 0.4
          }}
        />
      ))}
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden relative">
      <VaporCloudLayer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 pb-16 lg:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-premium-pink/30 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-premium-purple/20 blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-60"></div>
          
          <div className="absolute inset-0 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1552331500-1c5c06637e1a?q=80&w=1920&auto=format&fit=crop" 
              className="w-full h-full object-cover filter contrast-125 brightness-[0.2] saturate-[1.2]"
              alt="Cloud Atmosphere"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-premium-dark via-premium-dark/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-4xl text-left order-2 lg:order-1">
              <div className="inline-block px-5 py-2 glass rounded-full mb-8 md:mb-10 border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-premium-accent">
                  Ukiah's Premier Smoke Destination
                </span>
              </div>
              
              <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.95] tracking-tighter text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Elevate Your <br />
                <span className="bg-gradient-to-r from-premium-pink via-premium-purple to-premium-blue bg-clip-text text-transparent">
                  Atmosphere.
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                Premium hardware. Exotic flavors. Artisan glass. <br className="hidden md:block" />Discover the next generation of smoke culture in Ukiah.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
                <Link
                  to="/shop"
                  className="px-12 py-5 bg-white text-black font-black rounded-2xl text-lg transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(236,72,153,0.4)] active:scale-95 text-center"
                >
                  Shop Now
                </Link>
                <Link
                  to="/gallery"
                  className="px-12 py-5 glass border-white/20 text-white font-bold rounded-2xl text-lg transition-all hover:bg-white/10 active:scale-95 text-center"
                >
                  View Vibe
                </Link>
              </div>
            </div>

            {/* Right: Premium Graphic */}
            <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-1000 delay-300 flex justify-center lg:justify-end">
              <HeroGraphics />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 md:py-32 bg-premium-dark relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Premium Collections</h2>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-premium-pink to-transparent"></div>
            </div>
            <Link to="/shop" className="text-premium-pink font-bold hover:text-premium-accent transition-colors flex items-center gap-2 group text-sm md:text-base">
              Browse All Gear
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {CATEGORY_ITEMS.map((cat) => (
              <Link 
                key={cat.name}
                to={`/shop?category=${cat.name}`}
                className="glass group relative h-64 md:h-80 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-white/5 flex items-end p-6 md:p-8 transition-all hover:scale-[1.03] hover:border-premium-pink/40 hover:shadow-2xl hover:shadow-premium-pink/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={cat.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-120 opacity-70" 
                  alt={cat.name}
                />
                <div className="relative z-20">
                   <h3 className="text-white font-black text-lg md:text-xl tracking-tight group-hover:text-premium-pink transition-colors uppercase">
                    {cat.name}
                  </h3>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Explore Range</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Shelf Picks */}
      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Top Shelf Picks</h2>
            <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-premium-pink via-premium-purple to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PRODUCTS.filter(p => p.featured).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 text-center border-white/10 bg-white/[0.01]">
            <h2 className="text-3xl md:text-7xl font-black mb-16 leading-tight uppercase tracking-tighter">
              Ukiah's Premier <br className="md:hidden" />
              <span className="bg-gradient-to-r from-premium-pink to-premium-purple bg-clip-text text-transparent">Authentic</span> Boutique
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div className="space-y-4 group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-premium-purple/10 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 border border-premium-purple/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-premium-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase">100% Authentic</h3>
                <p className="text-gray-400 leading-relaxed text-sm">Strict zero-clone policy. Every device carries a manufacturer-certified serial for total peace of mind.</p>
              </div>
              
              <div className="space-y-4 group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-premium-pink/10 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 border border-premium-pink/20 transition-all group-hover:scale-110 group-hover:-rotate-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-premium-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase">Boutique Variety</h3>
                <p className="text-gray-400 leading-relaxed text-sm">From luxury mods to artist-signed functional glass. We curate our inventory like a high-end gallery.</p>
              </div>
              
              <div className="space-y-4 group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-premium-blue/10 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 border border-premium-blue/20 transition-all group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-premium-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase">Cloud Concierge</h3>
                <p className="text-gray-400 leading-relaxed text-sm">Personalized guidance from Ukiah's most passionate experts. Find your flavor and your perfect setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
