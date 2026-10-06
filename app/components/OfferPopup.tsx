"use client";

import React, { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { useCart } from "../context/CartContext";
import { siteWhatsappLink } from "@/lib/site";

const DISMISS_KEY = "lb-offer-popup-dismissed";

/**
 * Rs. 500 first-order offer popup.
 * Shows once per visitor: after 15 seconds, or on exit intent (desktop).
 * Dismissal remembered in localStorage.
 */
export default function OfferPopup() {
  const [visible, setVisible] = useState(false);
  const { showToast } = useCart();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY)) return;

    const show = () => setVisible(true);
    const timer = setTimeout(show, 15000);

    // Exit intent (desktop): mouse leaves the top of the viewport
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !window.localStorage.getItem(DISMISS_KEY)) {
        show();
      }
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch { /* ignore */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-sm rounded-3xl bg-[#F8F3EA] border border-[#C6A15B]/50 shadow-2xl p-6 sm:p-8 text-center space-y-4 animate-fade-in">
        <button
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute top-3 right-3 p-1.5 rounded-full text-[#636363] hover:text-[#0B0B0B] hover:bg-[#E5DED2] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 mx-auto rounded-full bg-[#8B1E2D]/10 border border-[#8B1E2D]/30 flex items-center justify-center">
          <Gift className="w-7 h-7 text-[#8B1E2D]" />
        </div>

        <div className="space-y-1">
          <h3 className="font-playfair text-2xl font-bold text-[#0B0B0B]">
            Rs. 500 OFF
          </h3>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Your first floral order — on us. Mention code <strong className="text-[#8B1E2D]">WELCOME500</strong> on WhatsApp when you order.
          </p>
        </div>

        <a
          href={siteWhatsappLink("Hi Lahore Bouquet! I'd like to claim my Rs. 500 off first order (WELCOME500).")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="block w-full py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider transition-all"
        >
          Claim on WhatsApp
        </a>

        <button
          onClick={dismiss}
          className="text-[11px] text-[#636363] hover:text-[#0B0B0B] underline underline-offset-2 cursor-pointer"
        >
          No thanks, I&apos;ll pay full price
        </button>
      </div>
    </div>
  );
}
