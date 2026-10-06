"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { CONTACT_PHONE } from "@/lib/site";

/**
 * Floating WhatsApp button (bottom-right, 56px, #25D366).
 * Prefills the message with the current page/product name.
 * Hidden while the cart drawer is open.
 */
export default function FloatingWhatsApp({ productName }: { productName?: string }) {
  const { isCartOpen } = useCart();
  const pathname = usePathname();

  if (isCartOpen) return null;

  const pageLabel = productName
    ? `the "${productName}"`
    : pathname === "/"
      ? "your homepage"
      : `the "${pathname.split("/").filter(Boolean).pop()?.replace(/-/g, " ")}" page`;

  const text = `Hi Lahore Bouquet! I'm looking at ${pageLabel} and have a question.`;
  const href = `https://wa.me/${CONTACT_PHONE.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lahore Bouquet on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all hover:scale-105 active:scale-95"
      style={{ marginBottom: "env(safe-area-inset-bottom)", marginRight: "env(safe-area-inset-right)" }}
    >
      <MessageCircle className="w-7 h-7 fill-white/20" />
      <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#8B1E2D] border-2 border-white" aria-hidden="true" />
    </a>
  );
}
