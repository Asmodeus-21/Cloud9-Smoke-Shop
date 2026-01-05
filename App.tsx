
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './src/context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgeGate from './components/AgeGate';
import ChatBubble from './components/ChatBubble';
import SmokeEffect from './components/SmokeEffect';
import Home from './views/Home';
import Shop from './views/Shop';
import Gallery from './views/Gallery';
import About from './views/About';
import Contact from './views/Contact';
import Policies from './views/Policies';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    // For development, automatically verify on load
    // Comment out this line to enable age gate
    const isDev = !import.meta.env.PROD;
    if (isDev) {
      sessionStorage.setItem('age-verified', 'true');
      setIsVerified(true);
      return;
    }
    
    const verified = sessionStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('age-verified', 'true');
    setIsVerified(true);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isVerified === null) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-brand-blue selection:text-white relative">
        <AgeGate onVerify={handleVerify} onReject={handleReject} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-brand-blue selection:text-white relative">
      {isVerified === false ? (
        <AgeGate onVerify={handleVerify} onReject={handleReject} />
      ) : (
        <>
          <h1 style={{ padding: '20px' }}>Cloud9 Smoke Shop</h1>
          <p style={{ padding: '20px' }}>Welcome! Site is loading...</p>
          <button onClick={() => setIsVerified(false)} style={{ padding: '10px 20px', margin: '20px' }}>
            Reset Age Verification
          </button>
        </>
      )}
    </div>
  );
};

export default App;
