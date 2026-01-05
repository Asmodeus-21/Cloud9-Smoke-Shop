# Cloud9 Smoke Shop - Ecommerce Implementation Guide

## Phase 1: ✅ Cart System (COMPLETE)

### What was implemented:
- ✅ Global cart state with React Context + useReducer
- ✅ localStorage persistence (survives page reloads)
- ✅ Tax calculation (6.25% average US tax)
- ✅ Shipping logic ($5, free over $50)
- ✅ Cart sidebar with slide-out animation
- ✅ Cart icon with badge in Navbar
- ✅ "Add to Cart" button on product cards
- ✅ Cart item quantity controls

### How to use:

```tsx
import { useCart } from '@/src/hooks/useCart';

const MyComponent = () => {
  const { items, total, addItem, removeItem, updateQuantity } = useCart();
  
  // Add item to cart
  addItem({
    product_id: 'puffco-peak',
    name: 'Puffco Peak',
    price: 349.99,
    quantity: 1,
    image: '/products/puffco.jpg',
    sku: 'PPK-001'
  });
  
  // Update quantity
  updateQuantity('puffco-peak', 2);
  
  // Remove from cart
  removeItem('puffco-peak');
};
```

---

## Phase 2: Checkout & Payment

### Files to create:
1. `views/CheckoutPage.tsx` - Checkout form with Stripe integration
2. `views/SuccessPage.tsx` - Order confirmation page
3. `views/CancelPage.tsx` - Payment cancelled page
4. `components/StripeCheckout.tsx` - Reusable Stripe checkout form

### Setup Stripe Account:
1. Go to https://dashboard.stripe.com
2. Create live/test keys
3. Add webhook endpoint: `https://your-domain.com/api/webhooks`
4. Set webhook events: `checkout.session.completed`, `charge.dispute.created`

### Setup Supabase:
1. Go to https://supabase.com
2. Create new project
3. Create tables:
   ```sql
   CREATE TABLE orders (
     id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
     stripe_session_id TEXT UNIQUE,
     customer_email TEXT,
     customer_name TEXT,
     items JSONB,
     amount_total INTEGER,
     amount_subtotal INTEGER,
     status TEXT,
     created_at TIMESTAMP
   );

   CREATE TABLE order_items (
     id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
     order_id uuid REFERENCES orders(id),
     product_id TEXT,
     quantity INTEGER,
     price INTEGER
   );
   ```
4. Enable Row Level Security (RLS)
5. Get SUPABASE_URL and SUPABASE_ANON_KEY

### Environment Variables:
```bash
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJxxx...
NEXT_PUBLIC_APP_URL=https://cloud9smokeshop.com
```

### Checkout Flow (CheckoutPage.tsx):
```tsx
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutPage = () => {
  const { items, total } = useCart();
  
  const handleCheckout = async () => {
    // POST to /api/checkout with items
    // Get session ID
    // Redirect to Stripe checkout
  };
};
```

---

## Phase 3: Product Details Page

### Create views/ProductDetail.tsx
- Single product view
- Variant selection (colors, sizes)
- Stock availability
- Related products carousel
- Add to cart integration

### Update routes in App.tsx:
```tsx
<Route path="/products/:id" element={<ProductDetail />} />
```

---

## Phase 4: Inventory Management

### Update products.json with:
```json
{
  "sku": "puffco-peak-001",
  "stock_quantity": 25,
  "in_stock": true,
  "low_stock_threshold": 5,
  "variants": [
    {
      "id": "color-black",
      "name": "Color",
      "value": "Black",
      "stock": 10
    }
  ]
}
```

### Low stock badge logic:
```tsx
{stock_quantity <= 5 && (
  <span className="badge badge-warning">Only {stock_quantity} left!</span>
)}
```

---

## Phase 5: Email Notifications

### Setup SendGrid:
1. Create account at https://sendgrid.com
2. Get API key
3. Create sender email

### Send email on order confirmed:
```typescript
// In api/webhooks.ts after order created
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: session.customer_email,
  from: process.env.SENDGRID_FROM_EMAIL!,
  subject: 'Order Confirmation - Cloud9 Smoke Shop',
  html: `
    <h1>Order Confirmed!</h1>
    <p>Order #: ${session.id}</p>
    <p>Total: $${(session.amount_total / 100).toFixed(2)}</p>
  `
});
```

---

## Phase 6: SEO & Performance

### SEO Metadata:
```tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Premium Vapes & Smoke Products | Cloud9</title>
  <meta name="description" content="..." />
  <meta property="og:image" content="/og-image.jpg" />
  <link rel="canonical" href="https://cloud9smokeshop.com/shop" />
</Helmet>
```

### Performance:
- Image lazy loading: `loading="lazy"`
- Code splitting: Vite handles automatically
- CDN for images: Consider Cloudinary

---

## Phase 7: Legal Pages

### Create files:
- `views/PrivacyPolicy.tsx`
- `views/TermsOfService.tsx`
- `views/ReturnsPolicy.tsx`
- `views/ShippingPolicy.tsx`

### Add to Footer links

---

## Deployment to Vercel

### 1. Push to GitHub:
```bash
git add .
git commit -m "Add ecommerce: cart, checkout, payment"
git push origin main
```

### 2. Connect to Vercel:
- Go to https://vercel.com
- Import GitHub repo
- Add environment variables from .env.local.example
- Deploy!

### 3. Setup Stripe Webhook on Vercel:
- Go to Stripe Dashboard → Webhooks
- Add endpoint: `https://cloud9-prod.vercel.app/api/webhooks`
- Events: `checkout.session.completed`

---

## Testing Checklist

- [ ] Add item to cart → persists on reload
- [ ] Cart calculation (subtotal, tax, shipping) correct
- [ ] Checkout button redirects to Stripe
- [ ] Stripe test card: 4242 4242 4242 4242
- [ ] Order saved to Supabase after payment
- [ ] Confirmation email sent
- [ ] Success page shows order details
- [ ] Mobile cart sidebar works

---

## Next Steps

1. **Create CheckoutPage.tsx** - Stripe integration
2. **Create SuccessPage.tsx** - Order confirmation
3. **Setup Supabase** - Create orders table
4. **Add SendGrid** - Email confirmations
5. **Deploy to Vercel** - Test webhook
