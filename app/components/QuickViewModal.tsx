"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#1A1A22] border border-white/15 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-fade-in text-white">
        
        <button 
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-black">
            <Image 
              src={quickViewProduct.image}
              alt={quickViewProduct.title}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#E11D48] uppercase tracking-wider block mb-1">
                {quickViewProduct.category}
              </span>
              <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                {quickViewProduct.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#E11D48] mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-white/60">({quickViewProduct.reviewCount} reviews)</span>
              </div>

              <p className="text-xs text-white/70 leading-relaxed mb-4">
                {quickViewProduct.desc}
              </p>

              <div className="p-3 rounded-lg bg-[#22222A] border border-white/5 text-xs mb-4">
                <span className="text-white/50 block text-[10px] uppercase">Composition</span>
                <span className="text-white font-medium">{quickViewProduct.stems || "Seasonal Fresh Stems"}</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-[#E11D48]">
                  Rs. {quickViewProduct.price.toLocaleString()}
                </span>
                {quickViewProduct.oldPrice && (
                  <span className="text-sm text-white/40 line-through">
                    Rs. {quickViewProduct.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-white/20 rounded-full bg-[#22222A]">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 text-white/70 hover:text-white cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 text-xs font-bold text-white">{qty}</span>
                  <button 
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-white/70 hover:text-white cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(quickViewProduct, qty);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#F43F5E] text-white font-bold text-xs transition-all text-center cursor-pointer shadow-md shadow-[#E11D48]/25"
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
