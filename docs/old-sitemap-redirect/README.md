# Old Pasha-style sitemap redirects

The old sitemap for `pashabouquet.com` (967 URLs, Shopify-style
`/collections/`, `/products/`, `/pages/` paths) was tested against
lahorebouquet.com on 2026-10-28: **563 URLs return 404**
(3 `/pages/`, 125 `/collections/`, 435 `/products/`), 404 work
(402 products, `/`, and `/collections/bouquets` which already
redirected to `/bouquets`).

## What is in this folder

- `redirect-map.json` — the full 563-entry map (source, destination,
  match_type, note). Product matches were made on live Sanity title +
  price, not slug similarity — this is why perfumes and oddly-slugged
  products (e.g. `100-flowers-bouquet` = "100 Roses Bouquet") match
  their live products instead of falling back to a category page.
- `redirect-review-probable.md` — the 161 "probable" product matches.
  Review these by hand; if a destination product is wrong, say the
  right live slug and the map will be updated.
- `redirect-review-fallback.md` — the 25 products with no live match,
  redirected to their closest category page.
- `old-sitemap-paths.txt` — the 967 old paths that were tested.
- `redirect-verification.csv` — output of
  `scripts/verify-old-sitemap-redirects.mjs` against a local
  production build: every old path, its destination, final status,
  and match type. Every row must be final_status 200 reached via at
  most one 301 (plus the pre-existing `/collections/bouquets` 301).

## Rules honoured

- No redirect chains: no destination is itself a source in this map.
- No loops, no destination 404s (all destinations are live sitemap paths).
- No collision with the pre-existing redirects in `next.config.ts`.
- The 4 out-of-service-city collections (`flowers-to-faisalabad`,
  `flowers-to-karachi`, `flowers-to-rawalpindi`, `nationwide-delivery`)
  redirect to `/` because the live site serves Lahore, Islamabad, and
  abroad only — these need the owner's decision (see the PR body).

## The old sitemap must never be published

Whichever domain becomes primary serves ONE sitemap generated from
live data (`app/sitemap.ts`). The old Shopify-style sitemap file must
never be uploaded or submitted to Search Console.
