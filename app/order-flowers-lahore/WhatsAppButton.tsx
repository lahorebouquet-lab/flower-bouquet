"use client";

import React from "react";

/**
 * WhatsApp CTA for the Google Ads landing page.
 * Fires two guarded window.gtag events on every click:
 *  - "whatsapp_click" (GA4 event the Ads account counts) with placement info
 *  - "conversion" (Google Ads conversion, send_to AW-XXXXXXXXX)
 * The Ads tag ID below is a placeholder — replace AW-XXXXXXXXX with the
 * real Google Ads tag ID (see page.tsx).
 */
export default function WhatsAppButton({
  href,
  label,
  className,
  children,
  eventParams,
}: {
  href: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
  eventParams?: Record<string, string>;
}) {
  const handleClick = () => {
    try {
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
      };
      w.gtag?.("event", "whatsapp_click", {
        page: "ads_landing_page",
        ...(eventParams ?? {}),
      });
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
