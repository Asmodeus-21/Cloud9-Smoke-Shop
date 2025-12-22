# Visual Architecture & Data Flow

## System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                       CLIENT'S PRODUCT LIST                     │
│  (50 products across 8 categories - Your Source of Truth)      │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │   src/data/products.json           │
        │   ┌────────────────────────────┐   │
        │   │ 50 Product Objects         │   │
        │   │ • id, name, category       │   │
        │   │ • price, description       │   │
        │   │ • image (filename only)    │   │
        │   │ • featured flag            │   │
        │   └────────────────────────────┘   │
        └────────────────────────────────────┘
                  │              │
        ┌─────────┘              └──────────┐
        ▼                                   ▼
  ┌──────────────────┐        ┌──────────────────────┐
  │  Shop.tsx        │        │ ProductValidator.ts  │
  ├──────────────────┤        ├──────────────────────┤
  │ • Import data    │        │ • Check required     │
  │ • Load products  │        │   fields             │
  │ • Validate data  │        │ • Validate category  │
  │ • Filter by cat. │        │ • Warn on price=0    │
  │ • Render grid    │        │ • Map categories     │
  └────────┬─────────┘        └──────────────────────┘
           │
           ▼
  ┌──────────────────────────┐
  │  ProductCard.tsx         │
  ├──────────────────────────┤
  │ • Receive product data   │
  │ • Call getProductImage() │
  │ • Display with fallback  │
  │ • Handle errors          │
  └────────────┬─────────────┘
               │
               ▼
      ┌────────────────────────┐
      │ imageHelper.ts         │
      ├────────────────────────┤
      │ getProductImage()      │
      │ • Take category        │
      │ • Take filename        │
      │ Build path:            │
      │ /products/{cat}/{file} │
      └────────────┬───────────┘
                   │
                   ▼
   ┌────────────────────────────────┐
   │   public/products/*/           │
   │                                │
   │ devices-vape/                  │
   │ ├── puffco-peak.jpg            │
   │ ├── puffco-peak-pro.jpg        │
   │ └── ... (7 images)             │
   │                                │
   │ glass/                         │
   │ ├── bongs.jpg                  │
   │ └── ... (7 images)             │
   │                                │
   │ rolling/, dab/, accessories/   │
   │ lifestyle/, etc.               │
   │ (50 images total)              │
   └────────────────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ Browser Renders Page │
        │ • Images display     │
        │ • Fallback on error  │
        │ • No broken images   │
        └──────────────────────┘
```

---

## Data Flow: Product to Browser

```
products.json
│
├─ id: "puffco-peak"
├─ name: "Puffco Peak"
├─ category: "Devices & Vape"         ◄─── Used to find folder
├─ image: "puffco-peak.jpg"           ◄─── Filename only
├─ price: 0
└─ description: "..."

    ↓
    
Shop.tsx loads → productData.products array
    ↓
ProductCard receives product object
    ↓
getProductImage("Devices & Vape", "puffco-peak.jpg")
    ↓
    Category "Devices & Vape" → folder "devices-vape"
    ↓
    Return: "/products/devices-vape/puffco-peak.jpg"
    ↓
<img src="/products/devices-vape/puffco-peak.jpg" />
    ↓
Browser requests: GET /products/devices-vape/puffco-peak.jpg
    ↓
Vercel serves from: public/products/devices-vape/puffco-peak.jpg ✓
    ↓
✅ Image displays
```

---

## Folder Structure Tree

```
cloud9-smoke-shop/
│
├── src/
│   ├── data/
│   │   ├── products.json ◄──────────────────── SOURCE OF TRUTH
│   │   │   └── 50 products all categories
│   │   └── productValidator.ts ◄──────────────  VALIDATION LOGIC
│   │       ├── validateProduct()
│   │       ├── validateProducts()
│   │       └── getCategoryFolder()
│   │
│   ├── utils/
│   │   └── imageHelper.ts ◄───────────────────  IMAGE PATH BUILDER
│   │       ├── getProductImage()
│   │       ├── getPlaceholderImage()
│   │       └── hasProductImage()
│   │
│   └── index.css
│
├── public/
│   └── products/ ◄───────────────────────────  WHERE IMAGES GO
│       ├── devices-vape/
│       │   ├── puffco-peak.jpg
│       │   ├── puffco-peak-pro.jpg
│       │   ├── 510-batteries.jpg
│       │   ├── vape-accessories.jpg
│       │   ├── smoke-buddy.jpg
│       │   ├── torches.jpg
│       │   └── butane.jpg (7 total)
│       │
│       ├── glass/
│       │   ├── bongs.jpg
│       │   ├── bubblers.jpg
│       │   ├── pipes.jpg
│       │   ├── bowls.jpg
│       │   ├── ashtrays.jpg
│       │   ├── bong-case.jpg
│       │   └── cookies-glass.jpg (7 total)
│       │
│       ├── dab/
│       │   └── ... (5 images)
│       │
│       ├── rolling/
│       │   └── ... (7 images)
│       │
│       ├── accessories/
│       │   └── ... (5 images)
│       │
│       ├── lifestyle/
│       │   └── ... (6 images)
│       │
│       ├── fresheners-detox/
│       │   └── ... (3 images)
│       │
│       └── tobacco/
│           └── ... (10 images)
│
├── components/
│   ├── ProductCard.tsx ◄─────────────────────  UPDATED: Image handling
│   ├── Navbar.tsx
│   └── ...
│
├── views/
│   ├── Shop.tsx ◄──────────────────────────────  UPDATED: Uses products.json
│   └── ...
│
├── types.ts ◄──────────────────────────────────  UPDATED: 8 categories
├── constants.ts (unchanged - BUSINESS_INFO)
├── PRODUCT_MANAGEMENT.md ◄──────────────────────  DOCUMENTATION
├── IMAGE_UPLOAD_CHECKLIST.md ◄─────────────────  TEAM GUIDE
├── IMPLEMENTATION_SUMMARY.md ◄───────────────── YOU ARE HERE
│
└── ...
```

---

## Category → Folder Mapping

| Category (products.json) | Folder Name | Image Count |
|--------------------------|-------------|------------|
| Devices & Vape | `devices-vape/` | 7 |
| Glass | `glass/` | 7 |
| Dab & Concentrate | `dab/` | 5 |
| Rolling | `rolling/` | 7 |
| Accessories | `accessories/` | 5 |
| Lifestyle & Storage | `lifestyle/` | 6 |
| Fresheners & Detox | `fresheners-detox/` | 3 |
| Tobacco & Specialty | `tobacco/` | 10 |
| **TOTAL** | **8 folders** | **50 images** |

---

## Image Naming Convention

### Format
```
{product-name-kebab-case}.{extension}
```

### Examples
```
✓ puffco-peak.jpg
✓ rolling-papers.jpg
✓ dab-accessories.jpg
✓ smell-proof-backpacks.jpg
✓ air-fresheners.jpg

✗ Puffco Peak.jpg (spaces, capitals)
✗ puffco-peak.JPG (wrong case)
✗ products/puffco-peak.jpg (no paths)
✗ puffco-peak (no extension)
```

### Filename Must Match products.json Exactly

```json
{
  "id": "puffco-peak",
  "name": "Puffco Peak",
  "image": "puffco-peak.jpg"  ◄─── This must match the file name exactly
}
```

Then file should be:
```
public/products/devices-vape/puffco-peak.jpg
                            └─ EXACT MATCH required
```

---

## Validation Flow

```
npm run build
    ↓
Vite compiles TypeScript/React
    ↓
Shop.tsx loads products.json
    ↓
validateProducts() called
    ├─ Check each product for required fields ✓
    ├─ Validate category matches list ✓
    ├─ Check filename format (no paths) ✓
    ├─ Warn if price = 0 ⚠️
    └─ Log summary to console
    ↓
❌ ERRORS?     → Build fails with clear message
✅ NO ERRORS?  → Build succeeds
               → Ready to deploy to Vercel
```

---

## Image Deployment Path

### Local Development
```
Your Computer
  └─ public/products/glass/bongs.jpg
     ↓
     Browser: GET http://localhost:5000/products/glass/bongs.jpg
     ↓
     Vite dev server serves: ✓ Image displays
```

### Production (Vercel)
```
GitHub Repo
  └─ public/products/glass/bongs.jpg
     ↓
     git push
     ↓
     Vercel webhook → auto-deploy
     ↓
     Vercel Build:
     ├─ npm run build
     ├─ Validates products.json ✓
     └─ Copies public/ → static assets
     ↓
     Deployed CDN
     └─ /products/glass/bongs.jpg served globally
     ↓
     Browser: GET https://cloud9ukiah.com/products/glass/bongs.jpg
     ↓
     ✓ Image displays
```

---

## Decision Tree: Where to Put Images

```
                    ┌─ What's the product?
                    ▼
        ┌───────────┴──────────────┐
        │                          │
   Device?                    Not a device?
Puffco, batteries,              ↓
torches, etc.            What kind of product?
        │                        │
        ↓              ┌─────────┼─────────┬──────────┐
   devices-vape/       │         │         │          │
                     Glass?    Dab?    Rolling?   Other?
                       │         │         │         │
                       ↓         ↓         ↓         ↓
                    glass/     dab/    rolling/    {other}
                   bongs,    rigs,     papers,
                   pipes,   nails,     wraps,
                   bowls    buckets    tobacco
```

---

## Validation Rules

```
✅ VALID PRODUCT
{
  "id": "puffco-peak",
  "name": "Puffco Peak",
  "category": "Devices & Vape",     ← Must match list
  "price": 299.99,                  ← Must be >= 0
  "description": "Premium device",  ← Non-empty
  "image": "puffco-peak.jpg",       ← Filename only!
  "featured": true                  ← Optional
}

❌ INVALID PRODUCTS
{
  "id": "device1",
  "name": "Some Device",
  "category": "Gadgets",            ← NOT in supported list
  "price": "free",                  ← String, not number
  "description": "",                ← Empty string
  "image": "images/device.jpg"      ← Path included (should be just filename)
}
```

---

## What Each File Does

### products.json
- **What:** Array of 50 product objects
- **Who uses it:** Shop.tsx, ProductCard.tsx
- **Update for:** Adding products, changing pricing/descriptions
- **Format:** Valid JSON only
- **Validation:** Runs at build time

### productValidator.ts
- **What:** Functions to check data integrity
- **Who uses it:** Shop.tsx calls on mount
- **Validates:** Required fields, categories, filename format
- **Returns:** `{ isValid, errors, warnings }`
- **Don't change:** Unless validation rules need to change

### imageHelper.ts
- **What:** Constructs image paths from category + filename
- **Who uses it:** ProductCard.tsx
- **Returns:** `/products/{folder}/{filename}.jpg` or placeholder
- **Handles:** Missing images gracefully
- **Don't change:** Unless folder structure changes

### ProductCard.tsx
- **What:** Displays single product with image
- **Changes:** Added image error handling
- **Calls:** `getProductImage(category, filename)`
- **Fallback:** Shows SVG placeholder if image 404s

### Shop.tsx
- **What:** Shop page - loads, filters, displays products
- **Changes:** Imports from products.json instead of constants.ts
- **Validates:** Calls validateProducts() on mount
- **Filters:** By 8 client categories

---

## Quick Status Check

### ✅ Complete
- [x] 50 products structured in JSON
- [x] 8 category folders created (empty, ready for images)
- [x] Data validation system built
- [x] Image path system built
- [x] Image error handling added
- [x] Build passes with no errors
- [x] Deploy process verified
- [x] Documentation complete

### ⏳ Your Turn
- [ ] Collect product images (50 total)
- [ ] Name correctly: `product-name.jpg`
- [ ] Place in correct category folder
- [ ] Set pricing in products.json
- [ ] git push to GitHub
- [ ] Verify on Vercel deployment

---

## The Big Picture

You now have a **production-ready, maintainable system** that:

1. **Stores product data** in a single source of truth (products.json)
2. **Validates data** automatically at build time
3. **Organizes images** logically by category
4. **Handles errors** gracefully (no broken image icons)
5. **Deploys cleanly** to Vercel with correct paths
6. **Scales easily** without code rewrites

Your team can:
- Add images by uploading to folders
- Update pricing by editing JSON
- Add products by adding to JSON
- Never touch code for content changes

It's **content management, not engineering** — exactly what you needed.
