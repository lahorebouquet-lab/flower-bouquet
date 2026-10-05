import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/", "/presentation", "/cart", "/checkout"],
      },
    ],
    sitemap: "https://lahorebouquet.com/sitemap.xml",
    host: "https://lahorebouquet.com",
  };
}
