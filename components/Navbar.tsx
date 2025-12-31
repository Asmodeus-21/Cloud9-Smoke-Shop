
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-3xl transition-all duration-500 ${isScrolled ? 'shadow-lg border-brand-light px-8 py-3 bg-white' : 'px-10 py-4 border-brand-light bg-white'}`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-xl">C9</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-blue group-hover:text-brand-blue transition-colors">
                Cloud9
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all hover:text-brand-blue ${
                    location.pathname === item.path ? 'text-brand-blue' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/shop"
                className="px-6 py-2 bg-brand-blue hover:bg-blue-700 rounded-xl text-sm font-semibold text-white border border-brand-blue transition-all hover:scale-105"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-brand-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-3xl p-6 absolute top-full left-6 right-6 border border-brand-light bg-white animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === item.path ? 'text-brand-blue' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Contact Ukiah Store</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-blue font-semibold">{BUSINESS_INFO.phone}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
