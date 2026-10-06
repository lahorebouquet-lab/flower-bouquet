import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/business";

/**
 * Indexing rule: ONLY the final canonical domain may be crawled.
 * Every preview / staging / *.vercel.app host returns "Disallow: /",
 * so the preview link can never get indexed or compete with lahorebouquet.com.
 * The moment the domain is connected, indexing starts automatically —
 * no code or config change needed then.
 */
function canonicalHosts(): Set<string> {
  try {
    const h = new URL(SITE_URL).hostname.toLowerCase().replace(/^www\./, "");
    return new Set([h, `www.${h}`]);
  } catch {
    return new Set(["lahorebouquet.com", "www.lahorebouquet.com"]);
  }
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const rawHost = (await headers()).get("host") ?? "";
  const host = rawHost.toLowerCase().split(":")[0];

  // ONLY the canonical domain may be indexed — host-based check only.
  // *.vercel.app (even Vercel "production" env) always stays Disallow: /,
  // so the temporary preview link can never get indexed or compete
  // with lahorebouquet.com. The moment the domain is connected,
  // indexing starts automatically — no code or config change needed then.
  const isCanonical = canonicalHosts().has(host);

  if (!isCanonical) {
    // Preview / development / vercel.app hosts: never index.
    // Exception: SiteAuditBot (Semrush Site Audit) is allowed so the owner
    // can run technical SEO audits on staging. All other bots (including
    // Googlebot) remain fully blocked — the preview URL stays unindexed.
    return {
      rules: [
        { userAgent: "*", disallow: "/" },
        { userAgent: "SiteAuditBot", allow: "/" },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/", "/admin", "/presentation", "/cart", "/checkout", "/wishlist"],
      },
      // AI crawlers are explicitly allowed (answer engines / GEO).
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "OAI-SearchBot", "Bytespider"],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
