import React from 'react';
import { useCart } from '../../src/hooks/useCart';

export const CartItem: React.FC<{ product_id: string }> = ({ product_id }) => {
  const { items, removeItem, updateQuantity } = useCart();
  const item = items.find((i) => i.product_id === product_id);

  if (!item) return null;

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 object-cover rounded"
      />

      <div className="flex-1">
        <p className="font-semibold text-sm">{item.name}</p>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(product_id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          −
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(product_id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeItem(product_id)}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        ✕
      </button>

      <p className="w-16 text-right font-semibold text-sm">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
};
