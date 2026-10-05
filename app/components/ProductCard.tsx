"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ArrowUpRight } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, directOrderNow, wishlist, toggleWishlist, setQuickViewProduct } = useCart();
  const isWishlisted = wishlist.includes(product.id);
  const productHref = `/products/${product.slug || product.id}`;

  const isGoldBadge = product.badgeType === "hot" || product.badge?.toLowerCase().includes("premium") || product.badge?.toLowerCase().includes("new") || product.badge?.toLowerCase().includes("trending");

  return (
    <div className="florabelle-card group flex flex-col justify-between overflow-hidden bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all duration-300">
      {/* Top Image & Badges (Section 8: subtle zoom, soft shadow, gold icon on hover) */}
      <div className="relative aspect-[4/5] w-full bg-[#F8F3EA] overflow-hidden">
        <Link href={productHref} className="block w-full h-full">
          <Image 
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badge Pill (Section 7: Sale/Promo #8B1E2D / White; Premium/New #C6A15B / #0B0B0B) */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 pointer-events-none">
          <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-xs ${
            isGoldBadge
              ? "bg-[#C6A15B] text-[#0B0B0B]"
              : "bg-[#8B1E2D] text-white"
          }`}>
            {product.badge}
          </span>
        </div>

        {/* Quick View & Wishlist Buttons (Section 8: default #0B0B0B, hover #8B1E2D) */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex flex-col gap-1 sm:gap-1.5">
          <button
            onClick={(e) => toggleWishlist(product.id, e)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-[rgba(198,161,91,0.30)] flex items-center justify-center text-[#0B0B0B] hover:text-[#8B1E2D] transition-colors cursor-pointer shadow-sm active:scale-95"
            aria-label="Save to Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? "fill-[#8B1E2D] text-[#8B1E2D]" : ""}`} />
          </button>

          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-[rgba(198,161,91,0.30)] flex items-center justify-center text-[#0B0B0B] hover:text-[#8B1E2D] transition-colors cursor-pointer shadow-sm active:scale-95"
            aria-label={`Quick view ${product.title}`}
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Card Content & Details (Section 7: White card, #0B0B0B title, #2A2A2A description) */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          <Link href={productHref} className="block group/link">
            <h3 className="font-playfair text-xs sm:text-base font-semibold text-[#0B0B0B] group-hover/link:text-[#8B1E2D] transition-colors line-clamp-2 leading-snug mb-1">
              {product.title}
            </h3>
          </Link>

          <p className="text-xs text-[#2A2A2A] line-clamp-1 mb-2 sm:mb-3 font-normal">
            {product.stems || product.desc}
          </p>
        </div>

        {/* Price & Action Buttons (Accessible touch targets and contrast >= 4.5:1) */}
        <div className="pt-2 sm:pt-3 border-t border-[#E5DED2] flex items-center justify-between gap-2">
          <div>
            <div className="text-xs sm:text-base font-bold text-[#8B1E2D]">
              Rs. {product.price.toLocaleString()}
            </div>
            {product.oldPrice && (
              <div className="text-xs text-[#636363] line-through">
                Rs. {product.oldPrice.toLocaleString()}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Secondary Action: + Cart (Outline light button - Accessible name matches visible text) */}
            <button
              onClick={(e) => addToCart(product, 1, e)}
              aria-label="Add to Cart"
              className="min-h-[38px] px-2.5 sm:px-3 py-1.5 rounded-full bg-white hover:bg-[#8B1E2D] text-[#0B0B0B] hover:text-white border border-[#E5DED2] hover:border-[#8B1E2D] text-xs font-semibold transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer flex items-center justify-center"
              title="Add to Shopping Bag"
            >
              + Cart
            </button>

            {/* Primary Action: Order Now (Solid Burgundy Brand button - Accessible name matches visible text) */}
            <button
              onClick={(e) => directOrderNow(product, e)}
              aria-label="Order"
              className="min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] text-xs font-bold transition-all duration-200 shadow-xs active:scale-95 cursor-pointer flex items-center justify-center"
            >
              Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
