
import React, { useEffect, useState, useRef } from 'react';

const SmokeEffect: React.FC = () => {
  const [wisps, setWisps] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Generate initial wisps
    const initialWisps = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 200 + Math.random() * 300,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10
    }));
    setWisps(initialWisps);

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
          }}
        />
      ))}
      {/* Dynamic Cursor Wisp */}
      <CursorWisp />
    </div>
  );
};

const CursorWisp: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const scrollPos = useRef(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      scrollPos.current = window.scrollY;
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed w-96 h-96 rounded-full opacity-10 blur-[100px] pointer-events-none transition-all duration-700 ease-out"
      style={{
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
        left: pos.x - 192,
        top: pos.y - 192,
        zIndex: 2
      }}
    />
  );
};

export default SmokeEffect;
