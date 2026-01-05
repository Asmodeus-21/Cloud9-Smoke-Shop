import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from '../../types';

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (product_id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product_id });
  };

  const updateQuantity = (product_id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(product_id);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { product_id, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    items: state.items,
    total: state.total,
    subtotal: state.subtotal,
    tax: state.tax,
    shipping: state.shipping,
    item_count: state.item_count,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
};
