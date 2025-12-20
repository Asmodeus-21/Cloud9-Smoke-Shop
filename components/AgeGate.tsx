
import React from 'react';

interface AgeGateProps {
  onVerify: () => void;
  onReject: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerify, onReject }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-premium-purple/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-premium-pink/20 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="glass relative z-10 w-full max-w-lg p-10 rounded-3xl text-center border-white/10">
        <div className="mb-8 inline-block p-4 rounded-2xl bg-white/5 border border-white/10">
          <svg className="w-12 h-12 text-premium-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
          Age Verification
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Cloud9 Smoke Shop strictly complies with California state law. You must be 21 years or older to enter this site and purchase tobacco/vape products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onVerify}
            className="px-10 py-4 bg-gradient-to-r from-premium-purple to-premium-pink rounded-2xl font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95"
          >
            I am 21 or older
          </button>
          <button
            onClick={onReject}
            className="px-10 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-semibold text-white/70 transition-all active:scale-95 border border-white/10"
          >
            Exit Site
          </button>
        </div>
        
        <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
          Proudly Serving Ukiah, California
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
