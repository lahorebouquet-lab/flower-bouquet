import { groq } from 'next-sanity'

// Query all products from Sanity
export const ALL_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt asc) {
    "id": _id,
    _id,
    title,
    "slug": slug.current,
    price,
    oldPrice,
    badge,
    badgeType,
    category,
    "image": coalesce(image.asset->url, "/images/hero-luxury-bouquet.jpg"),
    "gallery": gallery[].asset->url,
    desc,
    stems,
    occasion,
    rating,
    reviewCount,
    inStock
  }
`

// Query single product by slug or ID
export const PRODUCT_BY_SLUG_OR_ID_QUERY = groq`
  *[_type == "product" && (slug.current == $slugOrId || _id == $slugOrId || _id == "product-" + $slugOrId)][0] {
    "id": _id,
    _id,
    title,
    "slug": slug.current,
    price,
    oldPrice,
    badge,
    badgeType,
    category,
    "image": coalesce(image.asset->url, "/images/hero-luxury-bouquet.jpg"),
    "gallery": gallery[].asset->url,
    desc,
    stems,
    occasion,
    rating,
    reviewCount,
    inStock
  }
`

// Query all categories
export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(order asc, _createdAt asc) {
    "id": _id,
    _id,
    title,
    "name": title,
    "slug": slug.current,
    department,
    "type": coalesce(department, "bouquets"),
    tagline,
    itemCount,
    badge,
    href,
    order,
    "image": coalesce(image.asset->url, "/images/categories/all_bouquets.webp")
  }
`

// Query all reviews
export const REVIEWS_QUERY = groq`
  *[_type == "review"] | order(_createdAt desc) {
    "id": _id,
    _id,
    name,
    location,
    rating,
    "quote": comment,
    comment,
    "item": bouquet,
    bouquet,
    verified
  }
`

// Query all blog posts
export const BLOG_POSTS_QUERY = groq`
  *[_type == "blog"] | order(publishedAt desc, _createdAt desc) {
    "id": _id,
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    "date": coalesce(publishedAt, "Recent"),
    author,
    "image": coalesce(mainImage.asset->url, "/images/hero-luxury-banner.webp"),
    isFeatured
  }
`

// Query single blog post by slug
export const BLOG_POST_BY_SLUG_QUERY = groq`
  *[_type == "blog" && (slug.current == $slug || _id == $slug || _id == "blog-" + $slug)][0] {
    "id": _id,
    _id,
    title,
    "slug": slug.current,
    excerpt,
    tag,
    readTime,
    publishedAt,
    "date": coalesce(publishedAt, "Recent"),
    author,
    "image": coalesce(mainImage.asset->url, "/images/hero-luxury-banner.webp"),
    body,
    isFeatured
  }
`

