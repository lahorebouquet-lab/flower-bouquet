# Phase 1: Current Site Technical & Content SEO Audit
**Website:** `lahorebouquet.com`  
**Internal Project Name:** `florabelle`  
**Audit Date:** October 3, 2026  
**Auditor:** Senior Technical SEO Consultant, E-commerce SEO Specialist, Information Architect  

---

## 1. Executive Technical Summary

| Attribute | Current Site Specification | Assessment / Status |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.3.6 (Turbopack Enabled) | Modern & High Performance |
| **Rendering Engine** | React 19.2.8 | Latest React concurrent architecture |
| **Package Manager** | npm (with `package-lock.json`) | Stable dependency resolution |
| **Routing Architecture** | Next.js App Router (`/app`) | Modern folder-based file routing |
| **Data / CMS Layer** | In-Memory TypeScript Mock DB (`app/data/products.ts`) | Fast, static-friendly, no external CMS dependency |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`) | Minimal CSS footprint, utility-first |
| **Total Products** | 28 Handcrafted SKUs | High curation, needs expansion to compete |
| **Main Categories** | 6 Main + 3 Niche Collections | Good core, needs taxonomy consolidation |
| **Sitemap System** | Native Next.js `app/sitemap.ts` | **CRITICAL FAULT:** Emits competitor domain! |
| **Robots.txt** | Missing (`/robots.txt` / `app/robots.ts`) | **CRITICAL FAULT:** Search engines lack explicit crawler directives |
| **Domain Canonicalization**| Scattered (`flowerbouquet.pk` & `lahoreblooms.com`) | **CRITICAL FAULT:** Site canonicalizes to competitor & third party! |
| **Structured Data** | Schema.org (`Florist`, `FAQPage`, `Product`) | Partial; missing `BreadcrumbList`, `ItemList`, correct domain |
| **Blog / Educational** | **0 Articles / 0 Guides** | **MAJOR CONTENT GAP:** Competitor has 430 blog posts |

---

## 2. Critical Discovered Issues (Urgent Action Required)

### 🔴 Critical Bug 1: Competitor Domain Hardcoded in Metadata & Schema
Across several critical root files, the domain is set to `https://flowerbouquet.pk` (the competitor) instead of `https://lahorebouquet.com`:
1. **`app/layout.tsx` Line 50:**  
   `metadataBase: new URL("https://flowerbouquet.pk")`  
   *Impact:* Every relative canonical URL, OpenGraph image, and social link across the entire website defaults to the competitor's domain! Google credits indexation and page authority to `flowerbouquet.pk`.
2. **`app/sitemap.ts` Line 5:**  
   `const baseUrl = "https://flowerbouquet.pk";`  
   *Impact:* The XML sitemap generated for search engines lists 50+ URLs pointing to `https://flowerbouquet.pk/...`. Google Search Console will reject this or credit competitor URLs.
3. **`app/products/[id]/page.tsx` Lines 110, 115:**  
   `"image": "https://flowerbouquet.pk${product.image}"`  
   `"url": "https://flowerbouquet.pk/products/${product.slug}"`  
   *Impact:* Google rich snippet Product schema links directly to competitor product URLs.
4. **`app/page.tsx` Lines 47, 59:**  
   `image: "https://flowerbouquet.pk/icon.png"`  
   `url: "https://flowerbouquet.pk"`  
   *Impact:* LocalBusiness / Florist schema asserts that this business is `flowerbouquet.pk`.
5. **`app/contact/page.tsx` Lines 28, 37:**  
   `url: "https://flowerbouquet.pk/contact"`  
   `"image": "https://flowerbouquet.pk/icon.png"`

### 🔴 Critical Bug 2: Third-Party Domain in Prices Page
In `app/prices/page.tsx` (Lines 24, 30, 62, 68, 100), canonical and breadcrumb URLs reference `https://lahoreblooms.com/prices/` instead of `https://lahorebouquet.com/prices`.

### 🔴 Critical Bug 3: Missing `robots.txt`
There is no `public/robots.txt` or `app/robots.ts`. Search engines default to blind crawling without sitemap discovery directives or protection for dynamic cart/checkout URLs.

### 🔴 Critical Bug 4: Duplicate Routing Structure without Canonical Consolidation
The site has duplicate URL architectures running concurrently without canonical redirects:
- `/bouquets` ↔ `/collections/bouquets` (Identical content)
- `/roses` ↔ `/collections/roses` (Identical content)
- `/sunflowers` ↔ `/collections/sunflowers` (Identical content)
- `/money-bouquets` ↔ `/collections/money-bouquets` (Identical content)
- `/wedding-decor` ↔ `/collections/wedding-decor` (Identical content)
- `/gifts-and-cakes` ↔ `/collections/gifts-cakes` (Identical content)
- `/birthday-surprises` ↔ `/occasions/birthday` (Identical content)
- `/prices` ↔ `/price-guide` (Two separate price pages with overlapping intent)

**Internal Linking Conflict:**
- `Header.tsx` links to `/collections/...`
- `Footer.tsx` and `sitemap.ts` link to root paths (`/bouquets`, `/roses`, etc.)
- This splits internal PageRank and confuses crawlers as to which URL is canonical.

---

## 3. Existing Inventory & Page-by-Page Breakdown

### Category & Collection Routes
- `/bouquets` (and `/collections/bouquets`) — Main floral bouquet listing
- `/roses` (and `/collections/roses`) — Rose arrangements
- `/roses/red-roses` — High-intent red rose subcollection
- `/roses/white-roses` — White rose subcollection
- `/sunflowers` (and `/collections/sunflowers`) — Sunflowers & mixed lilies
- `/money-bouquets` (and `/collections/money-bouquets`) — Cash/currency bouquets
- `/wedding-decor` (and `/collections/wedding-decor`) — Stage, room, and car décor
- `/gifts-and-cakes` (and `/collections/gifts-cakes`) — Add-on gifts, cakes, chocolates
- `/crochet-bouquets` — Handmade yarn floral keepsakes
- `/dried-flowers` — Preserved dried florals
- `/bestsellers` — Curated top-performing SKUs

### Occasion Routes
- `/birthday-surprises` (and `/occasions/birthday`)
- `/occasions/anniversary`
- `/occasions/love-and-romance`
- `/occasions/barat-and-walima`
- `/occasions/congratulations`
- `/occasions/get-well-and-sorry`

### Location / Delivery Routes
- `/delivery-areas` — Central delivery hub listing Lahore zones
- `/delivery-areas/dha` — Dedicated DHA Lahore phase 1–9 landing page
- *Gap:* Gulberg, Bahria Town, Johar Town, Cantt, Model Town lack dedicated landing pages despite being listed in `LAHORE_ZONES`.

### Informational & Support Routes
- `/about` — Brand story, florist workshop on MM Alam Road
- `/contact` — Phone, WhatsApp, business hours, Google Maps coordinates
- `/policies` — Delivery policy, refund rules, privacy terms
- `/presentation` — Client UI showcase / internal mock presentation (needs `noindex`)

### Product Routes
- Dynamic route: `/products/[id]`
- Dual resolution: Accepts both numeric ID (`/products/1`) and alphanumeric slug (`/products/eucalyptus-and-rose-bouquet-in-lahore`).
- Canonical tag correctly targets `/products/${product.slug}`, but resolves to competitor domain due to `metadataBase`.

---

## 4. Metadata & Schema Audit

| Page Type | Title Tag Quality | Meta Description | JSON-LD Schema | Canonical Link |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage** | Good: "Fresh Flowers & Bouquets Delivery in Lahore \| Lahore Bouquet" | Comprehensive, includes 2–5 hr delivery promise | `Florist` + `FAQPage` (Corrupted domain) | Missing explicit canonical |
| **Product Pages** | Good: includes product title, pricing, city keyword | Detailed with stem count and delivery window | `Product` + `Offer` (Corrupted domain) | Present, points to `/products/[slug]` |
| **Collections** | Moderate: good keywords, some titles missing city modifier | Short but functional | `FAQPage` present on some; missing `ItemList` | Missing explicit canonical on several |
| **Occasions** | Strong local intent ("Birthday Flowers & Surprises in Lahore") | Clear value proposition | `FAQPage` present on subpages | Inconsistent between root and `/occasions/` |
| **Price Guide** | High intent: "Flower Bouquet Price in Lahore \| Free Delivery" | Lists real starting prices in PKR | `FAQPage` + `BreadcrumbList` (Corrupted domain) | Points to `lahoreblooms.com` |

---

## 5. Technical SEO & Core Web Vitals Status

1. **Rendering Performance:**
   - Server-side static generation (`generateStaticParams`) implemented on product pages.
   - Next.js 16 Turbopack ensures fast local compilation.
   - Core images load via Next.js `<Image />` with `priority` on key hero assets.
2. **Missing Technical Assets:**
   - No `robots.txt`
   - No Open Graph default fallback image (`/og-image.jpg`)
   - No Twitter Card specific tags on root layout (inherits OpenGraph, but missing explicit card types)
   - No Breadcrumb structured data across category and product pages.
3. **Internal Linking Integrity:**
   - Multiple duplicate paths create link dilution.
   - Four separate links in footer point to `/wedding-decor` with different anchor text without landing on unique subsections.

---

## 6. Audit Verdict & Immediate Priorities

1. **Priority P0:** Fix domain URLs in `metadataBase`, `sitemap.ts`, product JSON-LD, home JSON-LD, and price canonical to `https://lahorebouquet.com`.
2. **Priority P0:** Create comprehensive `app/robots.ts` with valid Sitemap declaration and disallows for cart/checkout/presentation.
3. **Priority P1:** Establish a singular canonical taxonomy: redirect or canonicalize `/collections/*` to clean primary collection routes, or vice versa.
4. **Priority P1:** Expand city delivery subpages for Gulberg, Bahria Town, Johar Town, Model Town, and Cantt.
5. **Priority P2:** Plan and build an Educational / Blog content hub to capture the 400+ informational keywords currently owned by the competitor.
