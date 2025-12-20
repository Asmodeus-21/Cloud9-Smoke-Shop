
import React from 'react';

const Policies: React.FC = () => {
  return (
    <div className="pb-32 pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black mb-12">Policies & Legal</h1>
        
        <div className="space-y-16">
          <section className="glass p-12 rounded-[3rem] border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-premium-purple">Age Restriction Policy</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p className="text-white font-bold text-xl mb-4">You must be 21 years or older to purchase any products from Cloud9 Smoke Shop.</p>
              <p>In accordance with California State Law (Senate Bill 7), the legal age to purchase tobacco and nicotine products is 21. We enforce this strictly both in-store and through our online age verification process.</p>
              <p>Providing false information or attempting to purchase if you are under the legal age is a violation of law and our terms of service.</p>
            </div>
          </section>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                Cloud9 Smoke Shop respects your privacy. We collect only necessary information required to process your inquiries and orders. We do not sell your personal data to third parties. Your data is protected using industry-standard encryption.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing this website, you agree to be bound by these terms. All products sold are intended for legal use only. We are not responsible for the misuse of any hardware or accessories purchased from our shop.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                Due to the nature of our products, all sales are final for e-liquids, disposables, and glass products once they leave the shop or are delivered. Hardware defects may be eligible for exchange within 14 days of purchase with original packaging and receipt.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Policies;
