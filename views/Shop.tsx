
import React, { useState } from 'react';
import productData from '@/src/data/products.json';
import ProductCard from '@/components/ProductCard';
import { validateProducts } from '@/src/data/productValidator';

const CATEGORIES = [
  'All',
  'Devices & Vape',
  'Glass',
  'Dab & Concentrate',
  'Rolling',
  'Accessories',
  'Lifestyle & Storage',
  'Fresheners & Detox'
];

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Validate products on mount (dev mode only logs warnings)
  const validation = validateProducts(productData.products);
  if (!validation.isValid && process.env.NODE_ENV === 'development') {
    console.error('Product validation failed:', validation.errors);
  }

  const filteredProducts = activeCategory === 'All'
    ? productData.products
    : productData.products.filter(p => p.category === activeCategory);

  return (
    <div className="pb-32">
      <section className="pt-24 pb-12 bg-white border-b border-brand-light">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-black mb-6 text-near-black">Store</h1>
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap border ${
                  activeCategory === cat 
                    ? 'bg-brand-blue border-brand-blue text-white shadow-lg' 
                    : 'bg-gray-100 border-brand-light text-gray-600 hover:text-brand-blue hover:border-brand-blue'
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
          <p className="text-gray-600">Showing {filteredProducts.length} premium items</p>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Sort By:</span>
             <select className="bg-white border border-brand-light text-near-black rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue">
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
          <div className="text-center py-32 bg-gray-50 rounded-[3rem] border border-brand-light">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No products found in this category.</h3>
            <button 
              onClick={() => setActiveCategory('All')}
              className="text-brand-blue font-bold underline"
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
