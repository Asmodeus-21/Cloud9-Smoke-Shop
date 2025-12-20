
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

  if (isVerified === null) return null;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-premium-dark selection:bg-premium-purple selection:text-white relative">
      {!isVerified && <AgeGate onVerify={handleVerify} onReject={handleReject} />}
      
      {/* Background Vapor Effects */}
      <SmokeEffect />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </main>

        <Footer />
        <ChatBubble />
      </div>
    </div>
  );
};

export default App;
