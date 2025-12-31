
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-light pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue flex items-center justify-center">
                <span className="text-white font-black text-xl">C9</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-blue">Cloud9</span>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              California's premier destination for high-end vape devices, premium e-liquids, and handcrafted glassware. Elevate your experience.
            </p>
            <div className="flex items-center gap-4">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all hover:bg-brand-blue hover:scale-110 border border-gray-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400" /> {/* Placeholder for icons */}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand-blue font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-600 hover:text-brand-blue transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-blue font-bold mb-6 uppercase tracking-wider text-sm">Our Location</h4>
            <ul className="space-y-4">
              <li className="text-gray-600 leading-relaxed">
                {BUSINESS_INFO.address}
              </li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-blue font-semibold hover:text-blue-700 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <p className="text-near-black text-sm font-semibold mb-1">Hours:</p>
                <p className="text-gray-600 text-sm">Mon–Thu: {BUSINESS_INFO.hours.monday_thursday}</p>
                <p className="text-gray-600 text-sm">Fri–Sat: {BUSINESS_INFO.hours.friday_saturday}</p>
                <p className="text-gray-600 text-sm">Sunday: {BUSINESS_INFO.hours.sunday}</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-blue font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">Get exclusive deals and first access to new premium drops.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-gray-300 text-near-black placeholder-gray-400"
              />
              <button className="mt-3 w-full bg-brand-blue text-white font-bold py-3 rounded-xl transition-all hover:bg-blue-700">
                Join The Cloud
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-light pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Cloud9 Smoke Shop. All rights reserved. Must be 21+.
          </p>
          <div className="flex gap-6">
            <Link to="/policies" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">Privacy</Link>
            <Link to="/policies" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
