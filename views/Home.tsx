
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
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(76, 106, 189, 0.05) 60%, transparent 100%)',
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
    {/* Premium Chrome Underglow with Blue Accent */}
    <div className="absolute inset-0 bg-brand-blue/35 blur-[90px] md:blur-[140px] rounded-full transition-all duration-1000 scale-125 md:scale-150 animate-pulse"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/25 to-brand-blue/5 blur-[110px] rounded-full transition-all duration-1000 scale-110 opacity-60"></div>
    
    {/* Stylized Premium Vape Graphic */}
    <div className="relative w-52 h-80 animate-float translate-z-0">
      {/* Device Body - Brushed Silver Premium Finish */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8e8e8] via-[#d0d0d0] to-[#b8b8b8] rounded-[3.5rem] border border-gray-300 shadow-[0_0_60px_rgba(76,106,189,0.25),0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Premium Metallic Highlights */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-brand-blue/15 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.4)_50%,transparent_65%)] bg-[length:200%_100%] animate-[shimmer_6s_infinite]"></div>

        {/* Top Juice Chamber (Premium Glass Window) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[85%] h-[20%] bg-white border-2 border-brand-blue/30 rounded-2xl overflow-hidden shadow-[inset_0_2px_8px_rgba(76,106,189,0.15)]">
          {/* Animated Premium Liquid */}
          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-t from-brand-blue/60 to-brand-blue/35">
            <div className="absolute -top-3 left-0 w-[200%] h-6 bg-brand-blue/50 rounded-[100%] animate-[wave_3s_infinite_linear] blur-sm"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
        
        {/* Premium LED Display Panel */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[85%] h-[35%] bg-gradient-to-b from-gray-900 to-gray-950 backdrop-blur-xl rounded-2xl border-2 border-brand-blue/40 flex flex-col items-center justify-center overflow-hidden shadow-[inset_0_0_20px_rgba(76,106,189,0.1)]">
           {/* Animated Grid Pattern */}
           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(rgba(76,106,189,0.4)_1px,transparent_1px)] [background-size:10px_10px]"></div>
           
           <div className="relative z-10 flex flex-col items-center space-y-3">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white tracking-tighter neon-text drop-shadow-[0_0_10px_rgba(76,106,189,0.5)]">92.0</span>
                <span className="text-xs font-bold text-brand-blue drop-shadow-[0_0_8px_rgba(76,106,189,0.4)]">W</span>
              </div>
              <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden border border-brand-blue/30 shadow-[0_0_12px_rgba(76,106,189,0.3)]">
                <div className="h-full bg-gradient-to-r from-brand-blue/80 via-brand-blue to-brand-blue w-[88%] animate-pulse drop-shadow-[0_0_8px_rgba(76,106,189,0.8)]"></div>
              </div>
              <div className="flex gap-4">
                 <div className="text-[9px] font-black text-brand-blue drop-shadow-[0_0_6px_rgba(76,106,189,0.6)] uppercase tracking-widest">Puff: 2.4k</div>
                 <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Temp: 420°</div>
              </div>
           </div>
        </div>
        
        {/* Premium Branding Accent */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-[11px] font-black text-gray-700 tracking-[0.6em] uppercase mb-2 opacity-80">CLOUD9 ELITE</div>
          <div className="w-16 h-1.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent rounded-full shadow-[0_0_25px_rgba(76,106,189,0.8),0_0_12px_rgba(76,106,189,0.5)] animate-pulse"></div>
        </div>
      </div>
      
      {/* Premium Mouthpiece - Chrome Finish */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-[#d0d0d0] to-[#a8a8a8] rounded-t-2xl border-t-2 border-x-2 border-gray-400 shadow-[0_0_20px_rgba(76,106,189,0.2)] flex items-center justify-center">
        <div className="w-10 h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-gray-600"></div>
      </div>
      
      {/* Rapid-Fire Vapor Rings - Enhanced Glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        {[0, 0.16, 0.32, 0.48, 0.64].map((delay, i) => (
          <div 
            key={i}
            className="absolute w-12 h-12 border-4 border-brand-blue/40 rounded-full blur-[1px] animate-[vapor-ring_0.8s_infinite_linear] shadow-[0_0_12px_rgba(76,106,189,0.4)]"
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
      <div className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full bg-brand-blue/10 animate-pulse-slow blur-[100px]"></div>
      
      {/* Geometric Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[550px] md:h-[550px] border border-brand-blue/10 rounded-full -rotate-12 animate-[spin_30s_linear_infinite]"></div>
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
          className="absolute bg-brand-blue rounded-full blur-[2px] animate-pulse"
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
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-brand-blue/30 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-brand-blue/20 blur-[200px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-60"></div>
          
          <div className="absolute inset-0 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1552331500-1c5c06637e1a?q=80&w=1920&auto=format&fit=crop" 
              className="w-full h-full object-cover filter contrast-125 brightness-[0.2] saturate-[1.2]"
              alt="Cloud Atmosphere"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-4xl text-left order-2 lg:order-1">
              <div className="inline-block px-5 py-2 bg-white border border-brand-light rounded-full mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-blue">
                  Ukiah's Premier Smoke Destination
                </span>
              </div>
              
              <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.95] tracking-tighter text-near-black animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Elevate Your <br />
                <span className="bg-gradient-to-r from-brand-blue to-brand-blue bg-clip-text text-transparent">
                  Atmosphere.
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                Premium hardware. Exotic flavors. Artisan glass. <br className="hidden md:block" />Discover the next generation of smoke culture in Ukiah.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
                <Link
                  to="/shop"
                  className="px-12 py-5 bg-brand-blue text-white font-black rounded-2xl text-lg transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(76,106,189,0.4)] active:scale-95 text-center"
                >
                  Shop Now
                </Link>
                <Link
                  to="/gallery"
                  className="px-12 py-5 bg-white border border-brand-light text-brand-blue font-bold rounded-2xl text-lg transition-all hover:bg-gray-50 active:scale-95 text-center"
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
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-near-black mb-4 uppercase tracking-tighter">Premium Collections</h2>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-brand-blue to-transparent"></div>
            </div>
            <Link to="/shop" className="text-brand-blue font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group text-sm md:text-base">
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
                className="group relative h-64 md:h-80 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex items-end p-6 md:p-8 transition-all hover:scale-[1.03] bg-white border border-brand-light hover:border-brand-blue/40 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={cat.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-120 opacity-70" 
                  alt={cat.name}
                />
                <div className="relative z-20">
                   <h3 className="text-near-black font-black text-lg md:text-xl tracking-tight group-hover:text-brand-blue transition-colors uppercase">
                    {cat.name}
                  </h3>
                  <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-1">Explore Range</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Shelf Picks */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-near-black mb-6 uppercase tracking-tighter">Top Shelf Picks</h2>
            <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-brand-blue via-brand-blue to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PRODUCTS.filter(p => p.featured).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 text-center border border-brand-light">
            <h2 className="text-3xl md:text-7xl font-black mb-16 leading-tight uppercase tracking-tighter text-near-black">
              Ukiah's Premier <br className="md:hidden" />
              <span className="bg-gradient-to-r from-brand-blue to-brand-blue bg-clip-text text-transparent">Authentic</span> Boutique
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div className="space-y-4 group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 border-2 border-brand-blue/40 shadow-[0_0_20px_rgba(76,106,189,0.15),inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(76,106,189,0.3)]">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-blue drop-shadow-[0_0_4px_rgba(76,106,189,0.4)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-near-black uppercase tracking-tight">100% Authentic</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Strict zero-clone policy. Every device carries a manufacturer-certified serial for total peace of mind.</p>
              </div>
              
              <div className="space-y-4 group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 border-2 border-brand-blue/40 shadow-[0_0_20px_rgba(76,106,189,0.15),inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_30px_rgba(76,106,189,0.3)]">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-blue drop-shadow-[0_0_4px_rgba(76,106,189,0.4)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-near-black uppercase tracking-tight">Boutique Variety</h3>
                <p className="text-gray-600 leading-relaxed text-sm">From luxury mods to artist-signed functional glass. We curate our inventory like a high-end gallery.</p>
              </div>
              
              <div className="space-y-4 group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-8 border-2 border-brand-blue/40 shadow-[0_0_20px_rgba(76,106,189,0.15),inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(76,106,189,0.3)]">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-blue drop-shadow-[0_0_4px_rgba(76,106,189,0.4)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-near-black uppercase tracking-tight">Cloud Concierge</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Personalized guidance from Ukiah's most passionate experts. Find your flavor and your perfect setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
