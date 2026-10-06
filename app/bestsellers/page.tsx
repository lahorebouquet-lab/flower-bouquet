export const revalidate = 60;
import React from "react";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Flame, Truck, Camera, MessageCircle } from "lucide-react";
import { itemListSchema, SITE_URL } from "@/lib/business";

export default async function BestsellersPage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  const bestsellers = allProducts.filter(
    (p) =>
      p.badgeType === "bestseller" ||
      p.badgeType === "hot" ||
      p.badge === "Bestseller" ||
      p.badge?.toLowerCase().includes("signature")
  );

  const displayProducts =
    bestsellers.length > 0
      ? bestsellers
      : [...allProducts].slice(0, 12);

  const itemListJsonLd = itemListSchema(displayProducts, `${SITE_URL}/bestsellers`, "Bestselling Bouquets in Lahore");

  return (
    <div className="min-h-screen bg-[#F8F3EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Page Header */}
      <section className="border-b border-[#C6A15B]/30 bg-[#F6F1E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-[#636363]">
            <Link href="/" className="hover:text-[#8B1E2D]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B0B0B] font-semibold">Bestsellers</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#C6A15B]" />
            Most Loved in Lahore
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#0B0B0B] mb-3">
            Bestselling Bouquets in Lahore
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
            Our most-ordered fresh flower arrangements — hand-tied fresh in Lahore every morning
            and delivered across the city in 2–5 hours with a photo
            on WhatsApp before dispatch.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-[#E5DED2] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#2A2A2A]">
            <Truck className="w-4 h-4 text-[#8B1E2D]" />
            <span><strong>2–5 hour</strong> express delivery in Lahore</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#2A2A2A]">
            <Camera className="w-4 h-4 text-[#8B1E2D]" />
            <span><strong>Photo proof</strong> on WhatsApp before delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#2A2A2A]">
            <MessageCircle className="w-4 h-4 text-[#8B1E2D]" />
            <span>Order on WhatsApp: <strong>+92 310 4225974</strong></span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-xs text-[#636363] mb-6 text-center">
          Showing {displayProducts.length} bestselling arrangements
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayProducts.map((prod) => (
            <ProductCard key={`bestseller-page-${prod.id}`} product={prod} />
          ))}
        </div>

        {/* Cross-links */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/roses"
            className="px-5 py-2.5 rounded-full border border-[#C6A15B] text-[#0B0B0B] text-xs font-bold tracking-wider uppercase hover:bg-[#C6A15B] transition-colors"
          >
            Shop Roses
          </Link>
          <Link
            href="/bouquets"
            className="px-5 py-2.5 rounded-full border border-[#C6A15B] text-[#0B0B0B] text-xs font-bold tracking-wider uppercase hover:bg-[#C6A15B] transition-colors"
          >
            All Bouquets
          </Link>
          <Link
            href="/birthday-surprises"
            className="px-5 py-2.5 rounded-full bg-[#8B1E2D] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
          >
            Birthday Surprises
          </Link>
        </div>
      </section>
    </div>
  );
}
