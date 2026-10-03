import { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "./data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lahorebouquet.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/prices`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/price-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/collections/bouquets`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/collections/roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses/red-roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses/white-roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/collections/sunflowers`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/collections/money-bouquets`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/collections/wedding-decor`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/collections/fresh-flower-gajray`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/collections/gifts-cakes`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/crochet-bouquets`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/dried-flowers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/corporate`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/birthday`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/occasions/anniversary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/love-and-romance`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/barat-and-walima`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/eid-gifts`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/congratulations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/get-well-and-sorry`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/dha`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/gulberg`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/bahria-town`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/model-town`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/johar-town`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/cantt`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/askari`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas/wapda-town`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-keep-flowers-fresh-in-lahore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/anniversary-flower-guide-pakistan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/money-bouquet-designs-and-pricing-lahore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/policies`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
