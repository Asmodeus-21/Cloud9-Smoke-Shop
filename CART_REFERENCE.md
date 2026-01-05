# Cart Hook - Quick Reference

## Basic Usage

```tsx
import { useCart } from '@/src/hooks/useCart';

export const MyComponent = () => {
  const { items, total, addItem, removeItem, updateQuantity, clearCart } = useCart();
  
  // ... your code
};
```

## API Reference

### State (Read-Only)

| Property | Type | Description |
|----------|------|-------------|
| `items` | `CartItem[]` | Array of items in cart |
| `total` | `number` | Total price (subtotal + tax + shipping) |
| `subtotal` | `number` | Sum of item prices |
| `tax` | `number` | Calculated tax (6.25%) |
| `shipping` | `number` | Shipping cost ($5, free over $50) |
| `item_count` | `number` | Total number of items |

### Methods

#### `addItem(item: CartItem)`
Add a new item or increment existing item quantity.

```tsx
addItem({
  product_id: 'puffco-peak',        // Required: unique identifier
  name: 'Puffco Peak',              // Required: display name
  price: 349.99,                    // Required: price in dollars
  quantity: 1,                      // Required: starting quantity
  image: '/products/puffco.jpg',    // Required: product image
  sku: 'PPK-001'                    // Optional: SKU for inventory
});
```

#### `removeItem(product_id: string)`
Remove entire item from cart.

```tsx
removeItem('puffco-peak');
```

#### `updateQuantity(product_id: string, quantity: number)`
Update item quantity. Use `0` or negative to remove.

```tsx
updateQuantity('puffco-peak', 3);
```

#### `clearCart()`
Remove all items from cart.

```tsx
clearCart();
```

---

## Examples

### Example 1: Add to Cart Button

```tsx
import { useCart } from '@/src/hooks/useCart';

export const AddToCartButton = ({ product }) => {
  const { addItem } = useCart();
  
  const handleClick = () => {
    addItem({
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    // Optional: show toast notification
  };
  
  return <button onClick={handleClick}>Add to Cart</button>;
};
```

### Example 2: Cart Summary Widget

```tsx
import { useCart } from '@/src/hooks/useCart';

export const CartSummary = () => {
  const { item_count, total, shipping } = useCart();
  
  return (
    <div className="cart-summary">
      <p>Items: {item_count}</p>
      <p>Shipping: {shipping === 0 ? 'FREE' : `$${shipping}`}</p>
      <p className="total">Total: ${total.toFixed(2)}</p>
    </div>
  );
};
```

### Example 3: Quantity Selector

```tsx
import { useCart } from '@/src/hooks/useCart';

export const QuantitySelector = ({ productId, currentQuantity }) => {
  const { updateQuantity } = useCart();
  
  return (
    <div className="quantity-control">
      <button onClick={() => updateQuantity(productId, currentQuantity - 1)}>
        −
      </button>
      <span>{currentQuantity}</span>
      <button onClick={() => updateQuantity(productId, currentQuantity + 1)}>
        +
      </button>
    </div>
  );
};
```

### Example 4: Checkout Integration

```tsx
import { useCart } from '@/src/hooks/useCart';

export const CheckoutButton = () => {
  const { items, total, clearCart } = useCart();
  
  const handleCheckout = async () => {
    // Call checkout API
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
      })
    });
    
    const { sessionId } = await response.json();
    
    // Redirect to Stripe checkout
    const stripe = window.Stripe('pk_live_...');
    stripe.redirectToCheckout({ sessionId });
  };
  
  return (
    <button onClick={handleCheckout}>
      Proceed to Checkout ${total.toFixed(2)}
    </button>
  );
};
```

---

## How It Works Internally

### 1. Global State Management
```
CartContext (useReducer)
    ↓
Dispatches actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART
    ↓
Recalculates: subtotal → tax → shipping → total
    ↓
Saves to localStorage
```

### 2. localStorage Key
```
Key: 'cloud9_cart'
Value: JSON array of CartItem objects
Persists: Across browser sessions
```

### 3. Calculations
```
Tax: subtotal × 0.0625 (6.25%)
Shipping: $5 if subtotal < $50, else FREE
Total: subtotal + tax + shipping
```

---

## TypeScript Interfaces

```tsx
export interface CartItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  sku?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  item_count: number;
  subtotal: number;
  tax: number;
  shipping: number;
}
```

---

## Common Issues

### Issue: Cart not persisting
**Solution:** Check that localStorage is not disabled. Cart auto-saves after each action.

### Issue: Tax/shipping calculations wrong
**Solution:** Calculations happen automatically. Verify settings in `CartContext.tsx`:
- TAX_RATE = 0.0625 (6.25%)
- SHIPPING_THRESHOLD = 50 (free shipping over $50)
- SHIPPING_COST = 5 (flat rate)

### Issue: Multiple "Add to Cart" clicks
**Solution:** Items automatically increment quantity if product already in cart.

---

## Mobile Considerations

- Cart sidebar uses `w-full max-w-md` for responsive width
- Touch-friendly buttons (min 44px height)
- Quantity buttons positioned for thumb reach
- Cart icon visible on all screen sizes

---

For more details, see `ECOMMERCE_SETUP.md`
