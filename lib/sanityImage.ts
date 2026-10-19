/**
 * Sanity image URL helper — bypasses Next.js image optimizer.
 *
 * Product images live on Sanity's CDN (cdn.sanity.io) which already serves
 * optimized WebP. Routing them through /_next/image adds a slow double-hop
 * (browser → Vercel → Sanity → Vercel → browser). These helpers build direct
 * Sanity CDN URLs with width/quality params for fast loading.
 */

/** Strip existing query params and append Sanity transform params. */
export function sanityDirectUrl(src: string, width: number, quality = 70): string {
  if (!src || !src.includes("cdn.sanity.io")) return src;
  const base = src.split("?")[0];
  return `${base}?w=${width}&q=${quality}&auto=format`;
}

/** Build a srcSet string for responsive loading from Sanity CDN directly. */
export function sanitySrcSet(src: string, widths: number[] = [256, 384, 640, 750]): string {
  if (!src || !src.includes("cdn.sanity.io")) return "";
  return widths.map((w) => `${sanityDirectUrl(src, w)} ${w}w`).join(", ");
}
