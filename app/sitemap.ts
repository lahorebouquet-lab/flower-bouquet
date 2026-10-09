import type { MetadataRoute } from "next";
import { getSanityProducts, getSanityBlogPosts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "./data/products";
import { SITE_URL } from "@/lib/business";

/**
 * Real lastmod dates:
 * - Products: Sanity _updatedAt
 * - Blog posts: publishedAt / _updatedAt
 * - Static pages: git last-commit date of the page file (falls back to a fixed baseline)
 * No changefreq/priority (Google ignores them).
 */

function gitLastModified(relativePath: string): Date | null {
  try {
    const { execSync } = require("child_process") as typeof import("child_process");
    const out = execSync(`git log -1 --format=%cI -- "${relativePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const baseline = new Date("2026-10-01T00:00:00+05:00");

  // Map of route -> page file for git-based lastmod
  const staticRoutes: Array<{ path: string; file: string; noindex?: boolean }> = [
    { path: "", file: "app/page.tsx" },
    { path: "/flower-delivery-in-lahore", file: "app/flower-delivery-in-lahore/page.tsx" },
    { path: "/send-flowers-to-lahore-from-abroad", file: "app/send-flowers-to-lahore-from-abroad/page.tsx" },
    { path: "/birthday-decoration-lahore", file: "app/birthday-decoration-lahore/page.tsx" },
    { path: "/lily-bouquet-lahore", file: "app/lily-bouquet-lahore/page.tsx" },
    { path: "/bouquets", file: "app/bouquets/page.tsx" },
    { path: "/bestsellers", file: "app/bestsellers/page.tsx" },
    { path: "/roses", file: "app/roses/page.tsx" },
    { path: "/roses/red-roses", file: "app/roses/red-roses/page.tsx" },
    { path: "/roses/white-roses", file: "app/roses/white-roses/page.tsx" },
    { path: "/sunflowers", file: "app/sunflowers/page.tsx" },
    { path: "/sunflower-bouquet-lahore", file: "app/sunflower-bouquet-lahore/page.tsx" },
    { path: "/chocolate-bouquets-lahore", file: "app/chocolate-bouquets-lahore/page.tsx" },
    { path: "/tulip-bouquet-lahore", file: "app/tulip-bouquet-lahore/page.tsx" },
    { path: "/money-bouquets", file: "app/money-bouquets/page.tsx" },
    { path: "/wedding-decor", file: "app/wedding-decor/page.tsx" },
    { path: "/gifts-and-cakes", file: "app/gifts-and-cakes/page.tsx" },
    { path: "/collections/fresh-flower-gajray", file: "app/collections/fresh-flower-gajray/page.tsx" },
    { path: "/collections/scents-and-perfumes", file: "app/collections/scents-and-perfumes/page.tsx" },
    { path: "/crochet-bouquets", file: "app/crochet-bouquets/page.tsx" },
    { path: "/dried-flowers", file: "app/dried-flowers/page.tsx" },
    { path: "/corporate", file: "app/corporate/page.tsx" },
    { path: "/prices", file: "app/prices/page.tsx" },
    { path: "/birthday-surprises", file: "app/birthday-surprises/page.tsx" },
    { path: "/occasions/anniversary", file: "app/occasions/anniversary/page.tsx" },
    { path: "/occasions/love-and-romance", file: "app/occasions/love-and-romance/page.tsx" },
    { path: "/occasions/barat-and-walima", file: "app/occasions/barat-and-walima/page.tsx" },
    { path: "/occasions/eid-gifts", file: "app/occasions/eid-gifts/page.tsx" },
    { path: "/occasions/congratulations", file: "app/occasions/congratulations/page.tsx" },
    { path: "/occasions/get-well-and-sorry", file: "app/occasions/get-well-and-sorry/page.tsx" },
    { path: "/delivery-areas", file: "app/delivery-areas/page.tsx" },
    { path: "/delivery-areas/dha", file: "app/delivery-areas/dha/page.tsx" },
    { path: "/delivery-areas/gulberg", file: "app/delivery-areas/gulberg/page.tsx" },
    { path: "/delivery-areas/bahria-town", file: "app/delivery-areas/bahria-town/page.tsx" },
    { path: "/delivery-areas/model-town", file: "app/delivery-areas/model-town/page.tsx" },
    { path: "/delivery-areas/johar-town", file: "app/delivery-areas/johar-town/page.tsx" },
    { path: "/delivery-areas/cantt", file: "app/delivery-areas/cantt/page.tsx" },
    { path: "/delivery-areas/askari", file: "app/delivery-areas/askari/page.tsx" },
    { path: "/delivery-areas/wapda-town", file: "app/delivery-areas/wapda-town/page.tsx" },
    { path: "/delivery-areas/lake-city", file: "app/delivery-areas/lake-city/page.tsx" },
    { path: "/delivery-areas/valencia-town", file: "app/delivery-areas/valencia-town/page.tsx" },
    { path: "/delivery-areas/eme-society", file: "app/delivery-areas/eme-society/page.tsx" },
    { path: "/delivery-areas/nfc", file: "app/delivery-areas/nfc/page.tsx" },
    { path: "/delivery-areas/tariq-gardens", file: "app/delivery-areas/tariq-gardens/page.tsx" },
    { path: "/delivery-areas/dha-rahbar", file: "app/delivery-areas/dha-rahbar/page.tsx" },
    { path: "/delivery-areas/al-kabir-town", file: "app/delivery-areas/al-kabir-town/page.tsx" },
    { path: "/delivery-areas/bahria-orchard", file: "app/delivery-areas/bahria-orchard/page.tsx" },
    { path: "/delivery-areas/raiwind-road", file: "app/delivery-areas/raiwind-road/page.tsx" },
    { path: "/delivery-areas/thokar-niaz-baig", file: "app/delivery-areas/thokar-niaz-baig/page.tsx" },
    { path: "/delivery-areas/iqbal-town", file: "app/delivery-areas/iqbal-town/page.tsx" },
    { path: "/delivery-areas/faisal-town", file: "app/delivery-areas/faisal-town/page.tsx" },
    { path: "/blog", file: "app/blog/page.tsx" },
    { path: "/blog/flower-prices-lahore-2026", file: "app/blog/flower-prices-lahore-2026/page.tsx" },
    { path: "/blog/send-flowers-to-lahore-from-abroad", file: "app/blog/send-flowers-to-lahore-from-abroad/page.tsx" },
    { path: "/blog/midnight-flower-cake-delivery-lahore", file: "app/blog/midnight-flower-cake-delivery-lahore/page.tsx" },
    { path: "/blog/best-flowers-birthday-anniversary-get-well-pakistan", file: "app/blog/best-flowers-birthday-anniversary-get-well-pakistan/page.tsx" },
    { path: "/blog/send-flowers-to-lahore-from-uk", file: "app/blog/send-flowers-to-lahore-from-uk/page.tsx" },
    { path: "/blog/send-flowers-to-lahore-from-usa", file: "app/blog/send-flowers-to-lahore-from-usa/page.tsx" },
    { path: "/blog/send-flowers-to-lahore-from-uae", file: "app/blog/send-flowers-to-lahore-from-uae/page.tsx" },
    { path: "/blog/nikkah-flowers-guide-lahore", file: "app/blog/nikkah-flowers-guide-lahore/page.tsx" },
    { path: "/blog/rose-color-meanings-pakistan", file: "app/blog/rose-color-meanings-pakistan/page.tsx" },
    { path: "/blog/gajra-prices-lahore-2026", file: "app/blog/gajra-prices-lahore-2026/page.tsx" },
    { path: "/blog/graduation-flowers-lahore", file: "app/blog/graduation-flowers-lahore/page.tsx" },    { path: "/teddy-bears-lahore", file: "app/teddy-bears-lahore/page.tsx" },
    { path: "/wedding-room-decoration-lahore", file: "app/wedding-room-decoration-lahore/page.tsx" },
    { path: "/helium-balloons-lahore", file: "app/helium-balloons-lahore/page.tsx" },
    { path: "/garlands-lahore", file: "app/garlands-lahore/page.tsx" },
    { path: "/gajray-lahore", file: "app/gajray-lahore/page.tsx" },
    { path: "/flower-jewellery-lahore", file: "app/flower-jewellery-lahore/page.tsx" },
    { path: "/bridal-room-decoration-lahore", file: "app/bridal-room-decoration-lahore/page.tsx" },
    { path: "/wedding-car-decoration-lahore", file: "app/wedding-car-decoration-lahore/page.tsx" },
    { path: "/about", file: "app/about/page.tsx" },
    { path: "/contact", file: "app/contact/page.tsx" },
    { path: "/track-order", file: "app/track-order/page.tsx", noindex: true },
    { path: "/gift-reminders", file: "app/gift-reminders/page.tsx" },
    { path: "/custom-bouquets-lahore", file: "app/custom-bouquets-lahore/page.tsx" },
    { path: "/custom-cakes-lahore", file: "app/custom-cakes-lahore/page.tsx" },
    { path: "/blog/custom-bouquet-guide-lahore", file: "app/blog/custom-bouquet-guide-lahore/page.tsx" },
    { path: "/blog/custom-cake-order-guide-lahore", file: "app/blog/custom-cake-order-guide-lahore/page.tsx" },
    { path: "/policies", file: "app/policies/page.tsx" },
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes
    .filter(({ noindex }) => !noindex)
    .map(({ path, file }) => ({
      url: `${baseUrl}${path}`,
      lastModified: gitLastModified(file) ?? baseline,
    }));

  // Dynamic Sanity Products (real _updatedAt, with image entries)
  const sanityProducts = await getSanityProducts();
  const products = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  for (const product of products) {
    const lastMod = product._updatedAt ? new Date(product._updatedAt) : baseline;
    const imgUrl = product.image
      ? product.image.startsWith("http")
        ? product.image
        : `${baseUrl}${product.image}`
      : undefined;
    routes.push({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: lastMod,
      ...(imgUrl ? { images: [imgUrl] } : {}),
    });
  }

  // Dynamic Sanity Blog Posts (real publishedAt/_updatedAt)
  // Dedupe against static entries above (same slug can exist in both)
  const seenBlogSlugs = new Set(
    staticRoutes
      .filter((r) => r.path.startsWith("/blog/"))
      .map((r) => r.path.replace("/blog/", ""))
  );
  const sanityBlogs = await getSanityBlogPosts();
  for (const post of sanityBlogs) {
    if (seenBlogSlugs.has(post.slug)) continue;
    seenBlogSlugs.add(post.slug);
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post._updatedAt
        ? new Date(post._updatedAt)
        : post.publishedAt
          ? new Date(post.publishedAt)
          : baseline,
    });
  }

  return routes;
}
