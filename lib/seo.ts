import type { Metadata } from "next";
import { SITE_URL } from "@/lib/business";
import SEO_MAP from "./seo-map.json";

/**
 * One title + description per URL, kept unique across the whole site.
 * Edit lib/seo-map.json to change a page's search snippet; every value is
 * checked to be ≤60 characters (title) and ≤155 characters (description).
 */
export type SeoEntry = { title: string; description: string };
const MAP = SEO_MAP as Record<string, SeoEntry>;

export function getSeo(path: string): SeoEntry | undefined {
  return MAP[path];
}

/**
 * Wrap a page's existing metadata so its title, description, Open Graph and
 * Twitter tags all come from the SEO map. Canonical URLs, images and anything
 * else the page sets are kept.
 */
export function withSeo(path: string, base: Metadata = {}): Metadata {
  const entry = MAP[path];
  if (!entry) return base;
  const { title, description } = entry;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const og = (base.openGraph ?? {}) as NonNullable<Metadata["openGraph"]>;
  const ogImages = og.images
    ? (Array.isArray(og.images) ? og.images : [og.images])
    : [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }];
  const imageUrls = ogImages.map((img) =>
    typeof img === "string" || img instanceof URL ? String(img) : String(img.url),
  );

  return {
    ...base,
    title: { absolute: title },
    description,
    keywords: null,
    alternates: base.alternates ?? { canonical: url },
    openGraph: {
      ...og,
      title,
      description,
      url: og.url ?? url,
      siteName: "Lahore Bouquet",
      locale: "en_PK",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrls,
    },
  };
}
