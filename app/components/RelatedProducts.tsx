import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
  subtitle?: string;
  /** Product slugs to feature (in order). Falls back to category match. */
  slugs?: string[];
  /** Fallback: match products by category keyword */
  categoryMatch?: string;
  count?: number;
}

/**
 * Server-rendered product row for landing/blog pages.
 * Boosts internal linking: service pages -> products.
 */
export default async function RelatedProducts({
  title = "Popular Combos",
  subtitle,
  slugs,
  categoryMatch,
  count = 4,
}: Props) {
  const products = await getSanityProducts();
  let picked: typeof products = [];

  if (slugs && slugs.length > 0) {
    for (const s of slugs) {
      const p = products.find((p) => p.slug === s);
      if (p) picked.push(p);
      if (picked.length >= count) break;
    }
  }
  if (picked.length < count && categoryMatch) {
    const kw = categoryMatch.toLowerCase();
    for (const p of products) {
      if (picked.length >= count) break;
      if (picked.includes(p)) continue;
      if (
        p.category?.toLowerCase().includes(kw) ||
        p.title.toLowerCase().includes(kw)
      ) {
        picked.push(p);
      }
    }
  }
  if (picked.length === 0) return null;

  return (
    <section className="my-10">
      <div className="text-center mb-6">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
          {title}
        </h2>
        {subtitle && <p className="text-sm text-[#636363] mt-2">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {picked.map((p) => (
          <ProductCard key={`related-${p.id}`} product={p} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/bouquets"
          className="inline-block px-6 py-2.5 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-xs font-bold tracking-wider uppercase hover:bg-[#8B1E2D] hover:text-white transition-colors"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
