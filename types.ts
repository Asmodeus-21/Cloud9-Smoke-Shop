
export interface Product {
  id: string;
  name: string;
  category: 'Devices & Vape' | 'Glass' | 'Dab & Concentrate' | 'Rolling' | 'Accessories' | 'Lifestyle & Storage' | 'Fresheners & Detox' | 'Tobacco & Specialty';
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  sku?: string;
  in_stock?: boolean;
  stock_quantity?: number;
  weight?: number;
  tax_category?: string;
}

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

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
