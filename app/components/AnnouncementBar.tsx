"use client";

import React from "react";

const MESSAGES = [
  <>
    <strong className="text-white font-bold underline decoration-[#C6A15B] decoration-2 underline-offset-2">Same-Day</strong> Flower, Cake & Perfume Delivery Across Lahore • Photo Proof on WhatsApp Before Dispatch
  </>,
];

/**
 * Top announcement bar — delivery message.
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-[#8B1E2D] border-b border-[#C6A15B]/30 text-center py-2 px-4 text-[11px] sm:text-xs text-white flex items-center justify-center gap-2 min-h-[32px]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#FFF8E7] animate-pulse shrink-0" aria-hidden="true" />
      <span className="font-medium tracking-wide text-white">
        {MESSAGES[0]}
      </span>
    </div>
  );
}
