
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
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
