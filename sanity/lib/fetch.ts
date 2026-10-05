import { client } from './client'
import {
  ALL_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_OR_ID_QUERY,
  CATEGORIES_QUERY,
  REVIEWS_QUERY,
  BLOG_POSTS_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
} from './queries'
import { Product } from '@/app/data/products'

export async function getSanityProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch<Product[]>(
      ALL_PRODUCTS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (products && products.length > 0) {
      return products
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
    return product
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

