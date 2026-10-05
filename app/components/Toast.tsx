"use client";

import React from "react";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Toast() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-50 px-4 py-3 rounded-2xl bg-[#0B0B0B] border border-[#C6A15B] text-white shadow-2xl flex items-center gap-2.5 animate-fade-in text-xs">
      <span className="text-[#C6A15B] text-base">🌸</span>
      <span className="font-medium tracking-wide">{toastMessage}</span>
    </div>
  );
}

export function StickyMobileBar() {
  const { totalCartCount, cartSubtotal, setIsCartOpen, setCheckoutStep, generateWhatsAppMessage } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-md border-t border-[rgba(198,161,91,0.25)] p-3 flex items-center justify-between gap-3 shadow-2xl text-white">
      <div 
        onClick={() => {
          setIsCartOpen(true);
          setCheckoutStep(1);
        }}
        className="flex items-center gap-2.5 cursor-pointer select-none"
      >
        <div className="relative p-2 rounded-full bg-[#8B1E2D] text-white">
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white text-[#8B1E2D] text-[10px] font-bold flex items-center justify-center border border-[#0B0B0B]">
            {totalCartCount}
          </span>
        </div>
        <div>
          <div className="text-[10px] text-white/60">Cart Subtotal</div>
          <div className="text-sm font-bold text-[#C6A15B]">Rs. {cartSubtotal.toLocaleString()}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`https://wa.me/923104225974?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-[#25D366] text-white hover:opacity-90 font-bold cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        <button
          onClick={() => {
            setIsCartOpen(true);
            setCheckoutStep(1);
          }}
          className="px-5 py-2.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95"
        >
          Checkout ({totalCartCount})
        </button>
      </div>
    </div>
  );
}
