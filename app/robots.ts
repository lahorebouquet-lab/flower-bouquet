import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  const isProd =
    process.env.VERCEL_ENV === "production" ||
    (!process.env.VERCEL && !SITE_URL.includes("vercel.app"));

  if (!isProd) {
    // Preview / development hosts must never compete with the real domain.
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/", "/presentation", "/cart", "/checkout", "/wishlist"],
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
