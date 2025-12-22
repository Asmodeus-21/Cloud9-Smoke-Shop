import { Product } from '../types';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

const REQUIRED_FIELDS: (keyof Product)[] = ['id', 'name', 'category', 'price', 'description', 'image'];

/**
 * Validates a product object against required fields and data integrity rules
 */
export function validateProduct(product: any, index: number): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  REQUIRED_FIELDS.forEach(field => {
    if (!(field in product) || product[field] === undefined || product[field] === null) {
      errors.push(`Product #${index} missing required field: ${String(field)}`);
    }
  });

  // Validate specific field types
  if (typeof product.id !== 'string' || product.id.trim() === '') {
    errors.push(`Product #${index}: id must be a non-empty string`);
  }

  if (typeof product.name !== 'string' || product.name.trim() === '') {
    errors.push(`Product #${index}: name must be a non-empty string`);
  }

  if (typeof product.price !== 'number' || product.price < 0) {
    errors.push(`Product #${index}: price must be a non-negative number`);
  }

  if (product.price === 0) {
    warnings.push(`Product "${product.name}" (#${index}): price is 0 (add pricing or mark as placeholder)`);
  }

  if (typeof product.description !== 'string' || product.description.trim() === '') {
    errors.push(`Product #${index}: description must be a non-empty string`);
  }

  if (typeof product.image !== 'string' || product.image.trim() === '') {
    errors.push(`Product #${index}: image must be a non-empty filename`);
  }

  // Validate image is filename only (not full path)
  if (product.image && (product.image.includes('/') || product.image.includes('\\'))) {
    errors.push(`Product "${product.name}": image should be filename only (e.g., "product-name.jpg"), not a path`);
  }

  // Validate category
  const validCategories = [
    'Devices & Vape',
    'Glass',
    'Dab & Concentrate',
    'Rolling',
    'Accessories',
    'Lifestyle & Storage',
    'Fresheners & Detox',
    'Tobacco & Specialty'
  ];
  if (!validCategories.includes(product.category)) {
    errors.push(`Product "${product.name}": invalid category "${product.category}". Must be one of: ${validCategories.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validates entire products array and returns aggregated results
 */
export function validateProducts(products: any[]): ValidationResult {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  let validCount = 0;

  if (!Array.isArray(products)) {
    return {
      isValid: false,
      errors: ['Products must be an array'],
      warnings: []
    };
  }

  products.forEach((product, index) => {
    const result = validateProduct(product, index);
    if (result.isValid) {
      validCount++;
    } else {
      allErrors.push(...result.errors);
    }
    allWarnings.push(...result.warnings);
  });

  // Log results in development
  if (process.env.NODE_ENV === 'development') {
    if (allWarnings.length > 0) {
      console.warn('⚠️  Product Validation Warnings:', allWarnings);
    }
    if (allErrors.length === 0) {
      console.log(`✅ Products validated: ${validCount}/${products.length} valid`);
    }
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
}

/**
 * Maps product category to asset folder path
 */
export function getCategoryFolder(category: string): string {
  const categoryMap: Record<string, string> = {
    'Devices & Vape': 'devices-vape',
    'Glass': 'glass',
    'Dab & Concentrate': 'dab',
    'Rolling': 'rolling',
    'Accessories': 'accessories',
    'Lifestyle & Storage': 'lifestyle',
    'Fresheners & Detox': 'fresheners-detox',
    'Tobacco & Specialty': 'tobacco'
  };
  return categoryMap[category] || 'misc';
}
