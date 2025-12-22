import { getCategoryFolder } from '../data/productValidator';

/**
 * Constructs a product image path from category and filename
 * Returns a path suitable for <img src={} />
 *
 * @example
 * getProductImage("Glass", "bongs.jpg")
 * // returns: "/products/glass/bongs.jpg"
 */
export function getProductImage(category: string, filename: string): string {
  if (!filename || !filename.trim()) {
    return getPlaceholderImage();
  }

  const folder = getCategoryFolder(category);
  return `/products/${folder}/${filename}`;
}

/**
 * Returns placeholder image URL or SVG
 * Used when product image is missing or not yet uploaded
 */
export function getPlaceholderImage(): string {
  // Using a data URL SVG placeholder as fallback
  // This prevents broken image icons and can be styled with CSS
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%231a1a2e" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23888" text-anchor="middle" dominant-baseline="middle"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
}

/**
 * Validates if a product has a real image (not placeholder)
 */
export function hasProductImage(filename: string): boolean {
  return !!(filename && filename.trim() && !filename.includes('placeholder'));
}
