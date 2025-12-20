
import { Product, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Cloud9 Smoke Shop",
  address: "132 Talmage Road, Ukiah, California 95482",
  phone: "707-367-2896",
  email: "hello@cloud9ukiah.com",
  hours: {
    weekdays: "9:00 AM - 10:00 PM",
    weekends: "10:00 AM - 11:00 PM"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Policies', path: '/policies' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Geek Bar Pulse 15000',
    category: 'Disposables',
    price: 24.99,
    description: 'The world\'s first full-screen disposable vape. Dual power modes and consistent flavor.',
    image: 'https://images.unsplash.com/photo-1550418406-930438138982?q=80&w=800&h=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '2',
    name: 'Lost Mary MO5000',
    category: 'Disposables',
    price: 19.99,
    description: 'Elegant design with advanced mesh coil technology for smooth vapor production.',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=800&h=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '3',
    name: 'Premium Glass Water Pipe',
    category: 'Glass',
    price: 89.99,
    description: 'Hand-blown 12-inch borosilicate glass with tree percolator.',
    image: 'https://images.unsplash.com/photo-1610444697397-6c8411b43521?q=80&w=800&h=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '4',
    name: 'Naked 100 - Lava Flow',
    category: 'Juices',
    price: 18.99,
    description: 'A delicious tropical blend of fresh strawberries, coconut, and pineapple.',
    image: 'https://images.unsplash.com/photo-1594918715878-1b2d7f87a8e7?q=80&w=800&h=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Smok Nord 5 Kit',
    category: 'Vapes',
    price: 45.99,
    description: 'Adjustable airflow and wattage with a powerful 2000mAh battery.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=800&h=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Electric Herb Grinder',
    category: 'Accessories',
    price: 34.99,
    description: 'High-torque motor for consistent grind every time. USB-C rechargeable.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&h=800&auto=format&fit=crop'
  },
];
