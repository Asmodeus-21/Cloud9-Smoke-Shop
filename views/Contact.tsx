
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pb-32 pt-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-black mb-8 leading-tight">Get in <br /><span className="text-brand-blue">Touch</span></h1>
            <p className="text-gray-600 text-lg mb-12 max-w-lg leading-relaxed">
              Have questions about a specific product or need to check our inventory? Drop us a line or visit us in Ukiah.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center border border-brand-blue/20 flex-shrink-0">
                  <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-near-black font-bold mb-2">Address</h4>
                  <p className="text-gray-600 leading-relaxed">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center border border-brand-blue/20 flex-shrink-0">
                  <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-near-black font-bold mb-2">Phone</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-600 hover:text-brand-blue transition-colors">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center border border-brand-blue/20 flex-shrink-0">
                  <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-near-black font-bold mb-2">Store Hours</h4>
                  <p className="text-gray-600 text-sm">Mon–Thu: {BUSINESS_INFO.hours.monday_thursday}</p>
                  <p className="text-gray-600 text-sm">Fri–Sat: {BUSINESS_INFO.hours.friday_saturday}</p>
                  <p className="text-gray-600 text-sm">Sunday: {BUSINESS_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 rounded-[2.5rem] overflow-hidden bg-gray-100 border border-brand-light h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Interactive Map Placeholder</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue font-bold hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] border border-brand-light relative shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-near-black">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 border border-brand-light text-near-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 rounded-2xl px-6 py-4 border border-brand-light text-near-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="707-000-0000"
                  className="w-full bg-gray-50 rounded-2xl px-6 py-4 border border-brand-light text-near-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Your Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us what you're looking for..."
                  className="w-full bg-gray-50 rounded-2xl px-6 py-4 border border-brand-light text-near-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-brand-blue text-white font-black rounded-2xl transition-all hover:bg-blue-700 active:scale-[0.98] shadow-lg"
              >
                Send Inquiry
              </button>
              
              {submitted && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center font-bold animate-in fade-in duration-300 border border-green-200">
                  Message sent! We'll get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
