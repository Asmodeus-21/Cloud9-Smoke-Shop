
import { Product, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Cloud9 Smoke Shop",
  address: "132 Talmage Road, Ukiah, California 95482",
  phone: "707-367-2896",
  email: "hello@cloud9ukiah.com",
  hours: {
    weekdays: "9:00 AM - 10:00 PM",
    weekends: "9:00 AM - 11:00 PM",
    monday_thursday: "9:00 AM - 10:00 PM",
    friday_saturday: "9:00 AM - 11:00 PM",
    sunday: "9:00 AM - 8:00 PM"
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
    name: 'Geek Bar Pulse X 25000 – Clear (No Flavor)',
    category: 'Devices & Vape',
    price: 31.99,
    description: 'No flavor. Non-flavor product. Premium clear disposable device with advanced technology.',
    image: 'https://images.unsplash.com/photo-1550418406-930438138982?q=80&w=800&h=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '2',
    name: 'Puffco Pivot Device',
    category: 'Devices & Vape',
    price: 144.99,
    description: 'Premium portable dab device with advanced heating technology and precise temperature control',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=800&h=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '3',
    name: 'Straight Tube Bong',
    category: 'Glass',
    price: 79.99,
    description: 'Classic glass water pipe with 8mm thickness. Straight tube design for water filtration.',
    image: 'https://images.unsplash.com/photo-1610444697397-6c8411b43521?q=80&w=800&h=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '4',
    name: 'Mini Dab Rig',
    category: 'Dab & Concentrate',
    price: 39.99,
    description: 'Compact glass dab rig perfect for concentrate use.',
    image: 'https://images.unsplash.com/photo-1594918715878-1b2d7f87a8e7?q=80&w=800&h=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Santa Cruz Shredder',
    category: 'Rolling',
    price: 17.99,
    description: 'Premium 4-piece herb grinder with precision engineering.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=800&h=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'RAW Cones Classic',
    category: 'Rolling',
    price: 2.99,
    description: 'Pre-rolled cone papers ready to fill. Classic unbleached material.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&h=800&auto=format&fit=crop'
  },
];
