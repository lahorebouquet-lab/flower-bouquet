# Decisions needed from the owner (do not merge blindly)

## 1. Domain: register first, then pick ONE primary (Issue 1)

`pashabouquet.com` is NOT registered (Verisign RDAP returns 404, Google
DNS returns no records). No code change can fix this.

1. Register `pashabouquet.com` at any registrar (Hostinger/Namecheap/etc.).
2. In Vercel → project `flower-bouquet` → Settings → Domains → Add:
   - `pashabouquet.com` (apex) — DNS A record → `76.76.21.21`
   - `www.pashabouquet.com` — DNS CNAME → `cname.vercel-dns.com`
3. Pick ONE primary domain (recommendation: keep `lahorebouquet.com`
   primary — it holds the rankings, the GBP listing, and all reviews;
   moving primary to a brand-new domain would throw that away):
   - If `lahorebouquet.com` stays primary: add a middleware rule
     (same pattern as the existing `www.lahorebouquet.com` → apex rule)
     that 301-redirects `pashabouquet.com` and `www.pashabouquet.com`
     to `lahorebouquet.com`, preserving the path. Then the redirect
     map in this PR resolves the old path on the canonical host.
   - If `pashabouquet.com` becomes primary: reverse the above
     (lahorebouquet.com 301s to pashabouquet.com) AND change
     `NEXT_PUBLIC_SITE_URL` + GBP + Search Console to the new domain.
     This is a full migration — do not choose it lightly.

## 2. Probable product matches (161) — review by hand

See `redirect-review-probable.md`. Every row redirects to its
best-guess live product. If any destination is the wrong product, reply
with the right live slug and the map will be updated before merge.
Pay special attention to:

- `jumbo-sunflower-bouquet` → currently the category page
  (`/sunflower-bouquet-lahore`) because two live sunflower products
  (`sunflower-delight-bouquet`, `sunflower-bouquet`) score almost
  identically. Pick one if you know which the Jumbo was.
- `luxury-mens-gift-box` (old Rs. 8,499) → currently the live
  `luxury-men-s-gift-box` (Rs. 5,999). Same title, different price:
  same box repriced, or a different tier? If different, it should fall
  back to `/gifts-and-cakes` instead.
- `red-roses-babys-breath-elegant-bouquet` → currently
  `/roses/red-roses` (two near-equal live candidates).

## 3. Category fallbacks (25 products + 37 collections) — review by hand

See `redirect-review-fallback.md` and the collection rows in
`redirect-map.json` with match_type `category-fallback`.
Notably, 4 collections redirect to the homepage because the live site
does not serve those cities at all:

- `flowers-to-faisalabad`, `flowers-to-karachi`,
  `flowers-to-rawalpindi`, `nationwide-delivery` → `/`

Alternatives if you dislike homepage redirects: point them at
`/flower-delivery-in-lahore` (wrong city, but shows the service area)
or `/contact` (lets visitors ask). Say which you prefer.

## 4. Trademark names in live products — suggest, do NOT rename yet

These 5 live products still carry trademarked names. Neutral
suggestions (renaming happens only on your go-ahead):

- `batman-s-gotham-delight-cake` — "Batman's Gotham Delight Cake"
  → "Superhero Gotham Delight Cake"
- `spiderman-balloons-set` — "Spiderman Balloons Set"
  → "Superhero Balloons Set"
- `winnie-the-pooh-baby-shower-balloon-backdrop` —
  "Winnie the Pooh Baby Shower Balloon Backdrop"
  → "Cartoon Bear Baby Shower Balloon Backdrop"
- `winnie-the-pooh-baby-shower-balloon-arch-cartoon-theme-decoration` —
  "Winnie the Pooh Baby Shower Balloon Arch – Cartoon Theme Decoration"
  → "Cartoon Bear Baby Shower Balloon Arch – Cartoon Theme Decoration"
- `mr-beast-feastables-milk-crunch-chocolate-10-x-60g` —
  "Mr. Beast Feastables Milk Crunch Chocolate (10 x 60g)"
  → "Chocolate Crunch Bar (10 x 60g)"
  (Note: if you genuinely resell Feastables bars, keeping the brand
  name may be legitimate — your call.)

## 5. Live typo that still needs a Sanity fix: `saqure`

The live product `saqure-love-flowers-box` ("Saqure Love Flowers Box",
Rs. 18,999) still carries the "saqure" typo in BOTH its slug and its
title. The other three old typos (`cake-foe-gamers`,
`affordable-nikkah-cermoney-in-lahore`,
`whatsapp-image-best-fragrance-in-pakistan`) exist only in the old
sitemap and are already handled by this redirect map.

To fix `saqure` (do this in Sanity Studio, not in code):

1. Rename the product slug to `square-love-flowers-box` and the title
   to "Square Love Flowers Box".
2. THEN add one redirect: `/products/saqure-love-flowers-box` →
   `/products/square-love-flowers-box` (permanent).
3. Do NOT add that redirect before the rename — the old slug is a
   working live URL today, and redirecting it early would 404 it.

## 6. Known slug collisions (not 404s, so not in this map)

Two old slugs exist live but point at a DIFFERENT price/design than
the old product — a silent mismatch from the old→live redesign:

- Old `elegant-rose-bouquet` (Rs. 3,399) vs live
  `elegant-rose-bouquet` (Rs. 5,499). The live family is otherwise
  clean: base (Rs. 5,499), "Design 2" (Rs. 1,599), "Design 3"
  (Rs. 3,399). The old Rs. 1,599 product correctly redirects to live
  "Design 2" in this map.
- Old `elegant-rose-bouquet-2` (Rs. 5,499) vs live
  `elegant-rose-bouquet-2` ("Design 2", Rs. 1,599).

Fix options: label the live base "Elegant Rose Bouquet (Design 1)"
for clarity, or leave as is. Your call — no redirect can fix a
working URL pointing at the wrong variant.

## 7. Sitemap split — not needed yet

The live sitemap has 983 URLs, under the ~1,000 threshold. No index
split in this PR. When it crosses 1,000, split into a sitemap index:
`sitemap-products.xml`, `sitemap-blog.xml`, `sitemap-pages.xml`,
`sitemap-areas.xml`, and update `robots.txt` + Search Console to the
index. The generator (`app/sitemap.ts`) already emits real lastmod
dates (Sanity `_updatedAt` / publish dates / git commit dates) and
no `changefreq`/`priority` — verified against the live sitemap
(502 distinct lastmod values, all real dates, product lastmods match
Sanity to the second).
