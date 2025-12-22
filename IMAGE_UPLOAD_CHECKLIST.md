# Image Upload Checklist

Use this checklist when adding product images to the repository.

## Before Starting

- [ ] All images are legally available (owned, licensed, or properly attributed)
- [ ] Images are in JPG format (recommended) or PNG
- [ ] Images are 400×400px or larger
- [ ] Images are optimized (file size < 500KB each)

---

## For Each Product

### 1. Prepare Image File
- [ ] Filename uses kebab-case: `product-name.jpg` (not `Product Name.JPG` or `product name.jpg`)
- [ ] Filename matches exactly what's in products.json under the `image` field

### 2. Determine Category
Product name in products.json → Where it goes in `/public/products/`:

| Category | Folder |
|----------|--------|
| Devices & Vape | `devices-vape/` |
| Glass | `glass/` |
| Dab & Concentrate | `dab/` |
| Rolling | `rolling/` |
| Accessories | `accessories/` |
| Lifestyle & Storage | `lifestyle/` |
| Fresheners & Detox | `fresheners-detox/` |
| Tobacco & Specialty | `tobacco/` |

- [ ] Image is in correct category folder

### 3. Verify in products.json
- [ ] Product exists in `src/data/products.json`
- [ ] Category matches exactly (case-sensitive)
- [ ] Image filename field matches your file name

**Example:**
```json
{
  "id": "puffco-peak",
  "name": "Puffco Peak",
  "category": "Devices & Vape",
  "image": "puffco-peak.jpg"
}
```

Then file should be: `/public/products/devices-vape/puffco-peak.jpg`

### 4. Commit & Push
```bash
# Example: adding glass category images
git add public/products/glass/
git commit -m "Add product images for Glass category"
git push origin main
```

- [ ] Changes committed with clear message
- [ ] Pushed to GitHub

### 5. Verify Deployment
- [ ] Vercel deploy completes (check vercel.com/dashboard)
- [ ] Visit https://cloud9ukiah.com/shop
- [ ] Images display correctly for uploaded products
- [ ] No broken image icons or 404 errors in browser console

---

## Batch Upload Template

Use this to organize multiple products at once:

```
📁 glass/
  ├── bongs.jpg
  ├── bubblers.jpg
  ├── pipes.jpg
  ├── bowls.jpg
  ├── ashtrays.jpg
  ├── bong-case.jpg
  └── cookies-glass.jpg

📁 dab/
  ├── dab-rigs.jpg
  ├── dab-accessories.jpg
  ├── terp-slurpers.jpg
  ├── nectar-collectors.jpg
  └── buckets.jpg
```

Before uploading, verify each filename exactly matches the corresponding `image` field in `src/data/products.json`.

---

## If Image is Missing

**Don't worry!** Missing images won't break the site:

1. Product still displays with a placeholder
2. Users can still see product name, description, price
3. Upload image anytime and rebuild
4. No code changes needed

**To Fix:**
1. Add image file to correct folder
2. Commit & push
3. Vercel redeploys automatically
4. Done!

---

## If Image Filename Doesn't Match

**Symptom:** Image uploads to correct folder but doesn't appear on site.

**Cause:** Filename doesn't match `image` field in products.json.

**Fix:**
1. Check products.json for exact filename in `image` field
2. Rename image file to match exactly (case-sensitive!)
3. Example mismatch:
   - products.json says: `"image": "puffco-peak.jpg"`
   - File named: `Puffco-Peak.jpg` ❌ (won't work)
   - Correct: `puffco-peak.jpg` ✅

---

## Folder Structure Reference

```
public/
└── products/
    ├── devices-vape/
    │   ├── puffco-peak.jpg
    │   ├── puffco-peak-pro.jpg
    │   ├── 510-batteries.jpg
    │   └── ... (7 images)
    ├── glass/
    │   ├── bongs.jpg
    │   ├── bubblers.jpg
    │   └── ... (5 images)
    ├── dab/
    │   └── ... (5 images)
    ├── rolling/
    │   └── ... (7 images)
    ├── accessories/
    │   └── ... (5 images)
    ├── lifestyle/
    │   └── ... (6 images)
    ├── fresheners-detox/
    │   └── ... (3 images)
    └── tobacco/
        └── ... (10 images)
```

Total: 50 product images across 8 categories

---

## Quick Reference: All 50 Products

### Devices & Vape (7 images)
- puffco-peak.jpg
- puffco-peak-pro.jpg
- 510-batteries.jpg
- vape-accessories.jpg
- smoke-buddy.jpg
- torches.jpg
- butane.jpg

### Glass (7 images)
- bongs.jpg
- bubblers.jpg
- pipes.jpg
- bowls.jpg
- ashtrays.jpg
- bong-case.jpg
- cookies-glass.jpg

### Dab & Concentrate (5 images)
- dab-rigs.jpg
- dab-accessories.jpg
- terp-slurpers.jpg
- nectar-collectors.jpg
- buckets.jpg

### Rolling (7 images)
- raw-rolling-papers.jpg
- rolling-papers.jpg
- hemp-wraps.jpg
- king-palm.jpg
- backwoods.jpg
- looseleaf.jpg
- grabba-leaf.jpg

### Accessories (5 images)
- grinders.jpg
- rolling-trays.jpg
- lighters.jpg
- scales.jpg
- glass-cleaners.jpg

### Lifestyle & Storage (6 images)
- backpacks.jpg
- smell-proof-backpacks.jpg
- pouches.jpg
- mylar-bags.jpg
- jewelry.jpg
- posters.jpg

### Fresheners & Detox (3 images)
- air-fresheners.jpg
- candles.jpg
- detox-drinks.jpg

### Tobacco & Specialty (10 images)
- pouch-tobacco.jpg
- swisher-sweets.jpg
- american-spirit.jpg
- find-cigars.jpg
- hookah.jpg
- kratom.jpg
- drug-testing-kits.jpg
- honey-packets.jpg
- labubu.jpg

---

## Questions?

Refer to `PRODUCT_MANAGEMENT.md` for detailed documentation on:
- How the system works
- Troubleshooting broken images
- Adding pricing later
- Scaling to more products
