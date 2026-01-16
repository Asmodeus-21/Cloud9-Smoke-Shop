
import React, { useEffect, useState, useRef } from 'react';

const SmokeEffect: React.FC = () => {
  const [wisps, setWisps] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[]>([]);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const isMobile = () => {
      return (
        typeof window !== 'undefined' &&
        ('ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          (navigator as any).msMaxTouchPoints > 0 ||
          window.matchMedia('(max-width: 768px)').matches)
      );
    };

    // Check for prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setIsMobileDevice(isMobile());
    setPrefersReducedMotion(prefersReduced);

    // Generate thick, luxurious vapor clouds with a subtle pink tint
    // Reduce wisps on mobile for better performance
    const wispCount = isMobile() || prefersReduced ? 3 : 14;
    const initialWisps = Array.from({ length: wispCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 450 + Math.random() * 450, 
      duration: 18 + Math.random() * 22,
      delay: Math.random() * -25,
      opacity: 0.12 + Math.random() * 0.18
    }));
    setWisps(initialWisps);
  }, []);

  // Don't render interactive vapor on mobile for performance
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
        {/* Static minimal vapor for reduced motion */}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {wisps.map((wisp) => (
        <div
          key={wisp.id}
          className="smoke-wisp animate-vapor"
          style={{
            left: `${wisp.x}%`,
            width: `${wisp.size}px`,
            height: `${wisp.size}px`,
            animationDuration: `${wisp.duration}s`,
            animationDelay: `${wisp.delay}s`,
            opacity: wisp.opacity,
            background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(76, 106, 189, 0.05) 40%, transparent 80%)',
            filter: 'blur(70px)'
          }}
        />
      ))}
      {!isMobileDevice && <InteractiveVapor />}
    </div>
  );
};

const InteractiveVapor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scrollVapor, setScrollVapor] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollVapor(window.scrollY * 0.12);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Cursor Glow - Blue Tinted */}
      <div 
        className="fixed rounded-full pointer-events-none transition-all duration-700 ease-out"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(76, 106, 189, 0.08) 0%, transparent 70%)',
          left: pos.x - 350,
          top: pos.y - 350,
          filter: 'blur(90px)',
          zIndex: 2
        }}
      />
      {/* Scroll-based atmospheric lift */}
      <div 
        className="fixed inset-0 pointer-events-none transition-transform duration-1000 ease-out opacity-25"
        style={{
          transform: `translateY(${-scrollVapor}px)`,
          background: 'linear-gradient(to bottom, transparent, rgba(76, 106, 189, 0.02), transparent)',
          zIndex: 1
        }}
      />
    </>
  );
};

export default SmokeEffect;
