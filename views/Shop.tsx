
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ['All', 'Vapes', 'Pods', 'Disposables', 'Juices', 'Glass', 'Accessories'];

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pb-32">
      <section className="pt-24 pb-12 bg-premium-dark border-b border-white/5">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-black mb-6">Store</h1>
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap border ${
                  activeCategory === cat 
                    ? 'bg-premium-purple border-premium-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]' 
                    : 'glass bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <p className="text-gray-400">Showing {filteredProducts.length} premium items</p>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sort By:</span>
             <select className="glass bg-white/5 border-white/10 text-white rounded-xl px-4 py-2 text-sm focus:outline-none">
               <option>Newest First</option>
               <option>Price: Low to High</option>
               <option>Price: High to Low</option>
               <option>Most Popular</option>
             </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 glass rounded-[3rem] border-white/5">
            <h3 className="text-2xl font-bold text-gray-400 mb-4">No products found in this category.</h3>
            <button 
              onClick={() => setActiveCategory('All')}
              className="text-premium-purple font-bold underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
