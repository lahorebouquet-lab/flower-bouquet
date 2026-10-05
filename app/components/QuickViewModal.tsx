"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white border border-[rgba(198,161,91,0.30)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in text-[#2A2A2A]">
        
        <button 
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 text-[#0B0B0B] border border-[#E5DED2] flex items-center justify-center hover:bg-[#8B1E2D] hover:text-white transition-colors cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-[#F8F3EA]">
            <Image 
              src={quickViewProduct.image}
              alt={quickViewProduct.title}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <div className="p-6 flex flex-col justify-between bg-white">
            <div>
              <span className="text-[10px] font-bold text-[#8B1E2D] uppercase tracking-wider block mb-1">
                {quickViewProduct.category}
              </span>
              <h3 className="font-playfair text-xl font-bold text-[#0B0B0B] mb-2 leading-snug">
                {quickViewProduct.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#C6A15B] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C6A15B]" />
                ))}
                <span className="text-[#636363] ml-1">({quickViewProduct.reviewCount} reviews)</span>
              </div>

              <p className="text-xs text-[#2A2A2A] leading-relaxed mb-4">
                {quickViewProduct.desc}
              </p>

              <div className="p-3 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] text-xs mb-4">
                <span className="text-[#636363] block text-[10px] uppercase font-semibold">Artisan Composition</span>
                <span className="text-[#0B0B0B] font-medium">{quickViewProduct.stems || "Seasonal Fresh Stems"}</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-[#8B1E2D]">
                  Rs. {quickViewProduct.price.toLocaleString()}
                </span>
                {quickViewProduct.oldPrice && (
                  <span className="text-sm text-[#636363] line-through">
                    Rs. {quickViewProduct.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#E5DED2] rounded-full bg-white">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 text-[#2A2A2A] hover:text-[#8B1E2D] cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 text-xs font-bold text-[#0B0B0B]">{qty}</span>
                  <button 
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-[#2A2A2A] hover:text-[#8B1E2D] cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(quickViewProduct, qty);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs transition-all text-center cursor-pointer shadow-md active:scale-95"
                >
                  Add {qty} to Bag
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
