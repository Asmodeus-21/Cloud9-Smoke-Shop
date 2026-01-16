import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../src/hooks/useCart';
import { CartItem } from './CartItem';

export const CartSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { items, subtotal, tax, shipping, total, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 webkit-scroll-touch ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Cart</h2>
            <button
              onClick={onClose}
              className="text-2xl hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {items.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="mb-4">Your cart is empty</p>
              <Link
                to="/shop"
                className="text-blue-600 hover:text-blue-800 font-semibold"
                onClick={onClose}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6">
                {items.map((item) => (
                  <CartItem key={item.product_id} product_id={item.product_id} />
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-semibold">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (est.):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="block w-full bg-blue-600 text-white py-3 rounded font-semibold text-center hover:bg-blue-700"
                  onClick={onClose}
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 py-2 rounded font-semibold hover:bg-gray-50"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
