import { MetadataRoute } from "next";
import { getSanityProducts, getSanityBlogPosts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "./data/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lahorebouquet.com";
  const now = new Date();

  // Canonical Primary Routes (excluding 301-redirected alias routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/flower-delivery-in-lahore`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/send-flowers-to-lahore-from-abroad`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/birthday-decoration-lahore`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/lily-bouquet-lahore`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/bouquets`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses/red-roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/roses/white-roses`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/sunflowers`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/sunflower-bouquet-lahore`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${baseUrl}/chocolate-bouquets-lahore`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${baseUrl}/tulip-bouquet-lahore`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${baseUrl}/money-bouquets`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/wedding-decor`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gifts-and-cakes`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/collections/fresh-flower-gajray`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/collections/scents-and-perfumes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/crochet-bouquets`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/dried-flowers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/corporate`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/prices`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/birthday-surprises`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
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
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/policies`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic Sanity Products
  const sanityProducts = await getSanityProducts();
  const products = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Sanity Blog Posts
  const sanityBlogs = await getSanityBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = sanityBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
