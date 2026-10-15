"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

/**
 * Product main image with automatic fallback.
 * Tries the Next.js optimized image first; if it fails (slow optimizer,
 * blocked CDN, timeout), falls back to the direct source URL.
 */
export default function ProductMainImage({ src, alt }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Fallback: plain img tag loading the source URL directly,
    // bypassing the Next.js image optimizer entirely.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className="object-cover absolute inset-0 h-full w-full"
        loading="eager"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
