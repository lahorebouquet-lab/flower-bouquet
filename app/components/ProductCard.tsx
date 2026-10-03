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

  return (
    <div className="florabelle-card group flex flex-col justify-between overflow-hidden">
      {/* Top Image & Badges */}
      <div className="relative aspect-[4/5] w-full bg-[#15151A] overflow-hidden">
        <Link href={productHref} className="block w-full h-full">
          <Image 
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-108"
          />
        </Link>

        {/* Badge Pill */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${
            product.badgeType === "promotion" 
              ? "bg-[#E11D48] text-white shadow-sm"
              : product.badgeType === "hot"
              ? "bg-[#BE123C] text-white"
              : product.badgeType === "favorite"
              ? "bg-[#E11D48] text-white"
              : "bg-white/20 backdrop-blur-md text-white border border-white/20"
          }`}>
            {product.badge}
          </span>
        </div>

        {/* Quick View & Wishlist Buttons */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
          <button
            onClick={(e) => toggleWishlist(product.id, e)}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-[#E11D48] transition-colors cursor-pointer"
            aria-label="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#E11D48] text-[#E11D48]" : ""}`} />
          </button>

          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-[#E11D48] transition-colors cursor-pointer"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Color Swatch Dots */}
          <div className="flex items-center gap-1.5 mb-2.5">
            {product.swatches ? (
              product.swatches.map((color, sIdx) => (
                <span 
                  key={sIdx}
                  className="w-2.5 h-2.5 rounded-full border border-black/30 shadow-xs"
                  style={{ backgroundColor: color }}
                />
              ))
            ) : (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#557153]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FAF4EB]" />
              </>
            )}
            <span className="text-[10px] text-white/40 ml-1">Palette</span>
          </div>

          <Link href={productHref} className="block group/link">
            <h3 className="font-playfair text-base font-semibold text-white group-hover/link:text-[#F43F5E] transition-colors line-clamp-2 leading-snug mb-1">
              {product.title}
            </h3>
          </Link>

          <p className="text-[11px] text-white/60 line-clamp-1 mb-3">
            {product.stems || product.desc}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <div className="text-base font-bold text-[#E11D48]">
              Rs. {product.price.toLocaleString()}
            </div>
            {product.oldPrice && (
              <div className="text-[11px] text-white/40 line-through">
                Rs. {product.oldPrice.toLocaleString()}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => addToCart(product, 1, e)}
              className="px-3 py-1.5 rounded-full bg-[#E11D48]/15 hover:bg-[#E11D48] text-[#F43F5E] hover:text-white border border-[#E11D48]/40 text-xs font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Add to Shopping Bag"
            >
              + Cart
            </button>

            <button
              onClick={(e) => directOrderNow(product, e)}
              className="px-3 py-1.5 rounded-full bg-[#E11D48] hover:bg-[#F43F5E] text-white text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm shadow-[#E11D48]/25 cursor-pointer"
            >
              Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
