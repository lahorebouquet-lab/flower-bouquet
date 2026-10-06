"use client";

import React, { useState, useEffect } from "react";

const MESSAGES = [
  <>
    <strong className="text-white font-bold underline decoration-[#C6A15B] decoration-2 underline-offset-2">Same-Day</strong> Flower, Cake & Perfume Delivery Across Lahore • Photo Proof on WhatsApp Before Dispatch
  </>,
  <>
    <strong className="text-white font-bold underline decoration-[#C6A15B] decoration-2 underline-offset-2">Rs. 500 OFF</strong> your first order — subscribe to the Lahore Bouquet Club below
  </>,
];

/**
 * Rotating top announcement bar. Cycles between the delivery message
 * and the Rs. 500 first-order offer every 6 seconds.
 */
export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[#8B1E2D] border-b border-[#C6A15B]/30 text-center py-2 px-4 text-[11px] sm:text-xs text-white flex items-center justify-center gap-2 min-h-[32px]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#FFF8E7] animate-pulse shrink-0" aria-hidden="true" />
      <span key={index} className="font-medium tracking-wide text-white animate-fade-in">
        {MESSAGES[index]}
      </span>
    </div>
  );
}
