"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Tag, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { siteWhatsappLink } from "@/lib/site";

const DISMISS_KEY = "lb-abandoned-popup-dismissed";
const SAVED_KEY = "lb-abandoned-cart-saved";

/**
 * Abandoned-cart recovery popup.
 * Shows when the visitor has items in the bag but hasn't placed an order:
 * - on exit intent (desktop), or
 * - after 90 seconds of inactivity with items in cart.
 * Offers 10% off (WELCOME10) + WhatsApp order shortcut.
 * Also saves the abandoned cart to /api/abandoned-cart once per session
 * so the owner can follow up from /admin.
 */
export default function AbandonedCartPopup() {
  const [visible, setVisible] = useState(false);
  const savedRef = useRef(false);
  const {
    cart,
    cartSubtotal,
    senderPhone,
    senderName,
    setDiscountCode,
    setIsCartOpen,
    showToast,
  } = useCart();

  const hasItems = cart.length > 0;

  // Save the abandoned cart to the API (once per session)
  const saveAbandonedCart = async () => {
    if (savedRef.current) return;
    savedRef.current = true;
    try {
      if (typeof window !== "undefined" && window.localStorage.getItem(SAVED_KEY)) return;
      const itemsSummary = cart
        .slice(0, 5)
        .map((i) => `${i.quantity}x ${i.product.title}`)
        .join(", ");
      await fetch("/api/abandoned-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: senderPhone || "",
          name: senderName || "",
          itemsSummary,
          itemCount: cart.reduce((a, i) => a + i.quantity, 0),
          cartValue: cartSubtotal,
        }),
      });
      window.localStorage.setItem(SAVED_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !hasItems) return;
    if (window.localStorage.getItem(DISMISS_KEY)) return;

    const show = () => {
      setVisible(true);
      saveAbandonedCart();
    };
    // Show after 90s with items in cart
    const timer = setTimeout(show, 90000);

    // Exit intent (desktop)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasItems]);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch { /* ignore */ }
    setVisible(false);
  };

  const applyCode = () => {
    setDiscountCode("WELCOME10");
    dismiss();
    setIsCartOpen(true);
    showToast("WELCOME10 applied — 10% off!");
  };

  if (!visible || !hasItems) return null;

  const waText =
    `Assalam-o-Alaikum! I left some flowers in my bag on Lahore Bouquet ` +
    `(${cart.reduce((a, i) => a + i.quantity, 0)} items, Rs. ${cartSubtotal.toLocaleString()}). ` +
    `I have the WELCOME10 code for 10% off — please help me complete my order.`;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={dismiss} />
      <div className="relative bg-[#FFFDF8] rounded-3xl border border-[#C6A15B]/40 shadow-2xl max-w-sm w-full p-6 text-center space-y-4">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-[#F8F3EA] text-[#636363]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#8B1E2D]/10 border border-[#8B1E2D]/30 mx-auto flex items-center justify-center">
          <Tag className="w-7 h-7 text-[#8B1E2D]" />
        </div>

        <div>
          <h3 className="font-playfair text-xl font-bold text-[#0B0B0B]">
            Wait — 10% OFF Your Bouquets!
          </h3>
          <p className="text-xs text-[#2A2A2A] mt-1.5 leading-relaxed">
            Your flowers are still in the bag. Complete your order now with code{" "}
            <strong className="text-[#8B1E2D]">WELCOME10</strong> and save 10%.
            We also have more deals — just ask us on WhatsApp!
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <code className="px-4 py-2 rounded-xl bg-[#F8F3EA] border-2 border-dashed border-[#8B1E2D]/50 text-[#8B1E2D] font-bold tracking-widest text-sm">
            WELCOME10
          </code>
        </div>

        <div className="space-y-2">
          <button
            onClick={applyCode}
            className="w-full py-3 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-sm transition-colors cursor-pointer"
          >
            Apply 10% OFF & Continue
          </button>
          <a
            href={siteWhatsappLink(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full bg-[#0E7C5B] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>

        <p className="text-[11px] text-[#636363]">
          Same-day delivery across Lahore • 9 AM – 1 AM
        </p>
      </div>
    </div>
  );
}
