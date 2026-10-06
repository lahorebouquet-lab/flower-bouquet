import { client } from './client'
import { urlFor } from './image'
import {
  ALL_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_OR_ID_QUERY,
  CATEGORIES_QUERY,
  REVIEWS_QUERY,
  BLOG_POSTS_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
  AREA_PAGE_BY_SLUG_QUERY,
} from './queries'
import { Product } from '@/app/data/products'

const FALLBACK_IMAGE = "/images/hero-luxury-bouquet.jpg";

/** Build a usable image URL from a Sanity image object (or return fallback). */
function resolveImage(img: any): string {
  if (!img) return FALLBACK_IMAGE;
  // Already a URL string (from coalesce or manual)
  if (typeof img === "string") return img;
  try {
    const url = urlFor(img)?.url();
    if (url) return url;
  } catch { /* ignore */ }
  return FALLBACK_IMAGE;
}

/** Normalize a fetched product's image/gallery to real URLs. */
function normalizeProductImages<T extends { image?: any; gallery?: any }>(p: T): T {
  return {
    ...p,
    image: resolveImage(p.image),
    gallery: Array.isArray(p.gallery) ? p.gallery.map(resolveImage) : p.gallery,
  };
}

export async function getSanityProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch<Product[]>(
      ALL_PRODUCTS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (products && products.length > 0) {
      return products.map(normalizeProductImages)
    }
  } catch (err) {
    console.error('Error fetching Sanity products:', err)
  }
  return []
}

export async function getSanityProduct(slugOrId: string): Promise<Product | null> {
  try {
    const product = await client.fetch<Product | null>(
      PRODUCT_BY_SLUG_OR_ID_QUERY,
      { slugOrId },
      { next: { revalidate: 60 } }
    )
    return product ? normalizeProductImages(product) : null
  } catch (err) {
    console.error(`Error fetching Sanity product ${slugOrId}:`, err)
    return null
  }
}

export interface SanityCategory {
  id: string
  _id: string
  title: string
  name: string
  slug: string
  department?: string
  type?: string
  tagline?: string
  itemCount?: string
  badge?: string
  href?: string
  image: string
  order?: number
}

export async function getSanityCategories(): Promise<SanityCategory[]> {
  try {
    const categories = await client.fetch<SanityCategory[]>(
      CATEGORIES_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (categories && categories.length > 0) {
      return categories
    }
  } catch (err) {
    console.error('Error fetching Sanity categories:', err)
  }
  return []
}

export interface SanityReview {
  id: string
  _id: string
  name: string
  location?: string
  rating: number
  quote: string
  item?: string
  verified?: boolean
  photo?: string
}

export async function getSanityReviews(): Promise<SanityReview[]> {
  try {
    const reviews = await client.fetch<SanityReview[]>(
      REVIEWS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (reviews && reviews.length > 0) {
      return reviews
    }
  } catch (err) {
    console.error('Error fetching Sanity reviews:', err)
  }
  return []
}

export interface SanityBlogPost {
  id: string
  _id: string
  _updatedAt?: string
  title: string
  slug: string
  excerpt: string
  tag: string
  readTime: string
  publishedAt?: string
  date?: string
  author?: string
  image?: string
  body?: any
  faqs?: { question: string; answer: string }[]
  isFeatured?: boolean
}

export async function getSanityBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const posts = await client.fetch<SanityBlogPost[]>(
      BLOG_POSTS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (posts && posts.length > 0) {
      return posts
    }
  } catch (err) {
    console.error('Error fetching Sanity blog posts:', err)
  }
  return []
}

export async function getSanityBlogPost(slug: string): Promise<SanityBlogPost | null> {
  try {
    const post = await client.fetch<SanityBlogPost | null>(
      BLOG_POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    )
    return post
  } catch (err) {
    console.error(`Error fetching Sanity blog post ${slug}:`, err)
    return null
  }
}


export interface SanityAreaPage {
  id: string
  title: string
  slug: string
  areaName: string
  deliveryFee?: string
  deliveryTime?: string
  intro: string
  landmarks?: string[]
  faqs?: { question: string; answer: string }[]
  nearbyAreas?: { name: string; slug: string }[]
  seoTitle?: string
  seoDescription?: string
}

export async function getSanityAreaPage(slug: string): Promise<SanityAreaPage | null> {
  try {
    const page = await client.fetch<SanityAreaPage | null>(
      AREA_PAGE_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    )
    return page
  } catch (err) {
    console.error(`Error fetching Sanity area page ${slug}:`, err)
    return null
  }
}
