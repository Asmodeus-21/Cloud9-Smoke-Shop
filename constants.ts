
import { Product, NavItem } from './types';
import productData from '@/src/data/products.json';

export const BUSINESS_INFO = {
  name: "Cloud9 Smoke Shop",
  address: "132 Talmage Road, Ukiah, California 95482",
  phone: "707-367-2896",
  email: "hello@cloud9ukiah.com",
  hours: {
    monday_thursday: "9:00 AM – 10:00 PM",
    friday_saturday: "9:00 AM – 11:00 PM",
    sunday: "9:00 AM – 8:00 PM"
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

export const PRODUCTS: Product[] = productData.products;
