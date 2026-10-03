import { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "./data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowerbouquet.pk";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/price-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/prices`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/bouquets`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses/red-roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses/white-roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/sunflowers`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/money-bouquets`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/wedding-decor`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gifts-and-cakes`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/birthday-surprises`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/crochet-bouquets`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/dried-flowers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/occasions/anniversary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/love-and-romance`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/barat-and-walima`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/congratulations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/occasions/get-well-and-sorry`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/delivery-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/delivery-areas/dha`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
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
