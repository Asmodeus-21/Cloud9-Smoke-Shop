
export interface Product {
  id: string;
  name: string;
  category: 'Vapes' | 'Pods' | 'Disposables' | 'Juices' | 'Glass' | 'Accessories';
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
