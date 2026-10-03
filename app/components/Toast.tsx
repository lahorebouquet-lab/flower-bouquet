"use client";

import React from "react";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Toast() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-50 px-4 py-3 rounded-xl bg-[#1A1A22] border border-[#E11D48] text-white shadow-2xl flex items-center gap-2.5 animate-fade-in text-xs">
      <span className="text-[#E11D48] text-base">🌿</span>
      <span className="font-semibold">{toastMessage}</span>
    </div>
  );
}

export function StickyMobileBar() {
  const { totalCartCount, cartSubtotal, setIsCartOpen, setCheckoutStep, generateWhatsAppMessage } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#15151A]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center justify-between gap-3 shadow-2xl">
      <div 
        onClick={() => {
          setIsCartOpen(true);
          setCheckoutStep(1);
        }}
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <div className="relative p-2 rounded-full bg-[#E11D48] text-white">
          <ShoppingBag className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-[#E11D48] text-[10px] font-bold flex items-center justify-center border border-white/20">
            {totalCartCount}
          </span>
        </div>
        <div>
          <div className="text-[10px] text-white/60">Cart Subtotal</div>
          <div className="text-sm font-bold text-[#E11D48]">Rs. {cartSubtotal.toLocaleString()}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`https://wa.me/923001234567?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-[#25D366] text-black hover:opacity-90 font-bold cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        <button
          onClick={() => {
            setIsCartOpen(true);
            setCheckoutStep(1);
          }}
          className="px-5 py-2.5 rounded-full bg-[#E11D48] text-white font-bold text-xs shadow-lg shadow-[#E11D48]/30 cursor-pointer"
        >
          Checkout ({totalCartCount})
        </button>
      </div>
    </div>
  );
}
