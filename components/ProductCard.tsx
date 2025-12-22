
import React, { useState } from 'react';
import { Product } from '../types';
import { getProductImage } from '@/src/utils/imageHelper';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const imageUrl = getProductImage(product.category, product.image);
  const displayImage = imageError ? getProductImage('', '') : imageUrl;

  return (
    <div className="glass group rounded-3xl overflow-hidden border-white/5 transition-all duration-500 hover:border-premium-purple/30 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-white/5">
        <img 
          src={displayImage}
          alt={product.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <button className="w-full py-3 bg-white text-black font-bold rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Quick View
          </button>
        </div>
        {product.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-premium-purple/80 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-white">
            Top Seller
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-premium-purple uppercase tracking-widest">{product.category}</span>
          <span className="text-lg font-bold text-white">${product.price || 'TBA'}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-6">
          {product.description}
        </p>
        
        <button className="w-full py-3 glass hover:bg-premium-purple/20 border-white/10 rounded-xl text-white font-semibold transition-all flex items-center justify-center gap-2 group/btn">
          Add to Cart
          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
