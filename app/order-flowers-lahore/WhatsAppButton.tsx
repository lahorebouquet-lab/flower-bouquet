"use client";

import React from "react";

/**
 * WhatsApp CTA for the Google Ads landing page.
 * Fires a Google Ads conversion event on every click, using the same
 * guarded window.gtag pattern as FloatingWhatsApp / lib/analytics.ts.
 * The Ads tag ID below is a placeholder — replace AW-XXXXXXXXX with the
 * real Google Ads tag ID (see page.tsx).
 */
export default function WhatsAppButton({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const handleClick = () => {
    try {
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
      };
      w.gtag?.("event", "conversion", {
        send_to: "AW-XXXXXXXXX/CONVERSION_LABEL",
      });
    } catch {
      /* analytics must never block the customer */
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={handleClick}
      className={className}
    >
      {children ?? label}
    </a>
  );
}
