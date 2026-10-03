"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer" | "compact" | "icon-only";
  className?: string;
}

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  if (variant === "icon-only") {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`} aria-label="Lahore Bouquet Home">
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
          <Image
            src="/images/lahore-bouquet-mark.png"
            alt="Lahore Bouquet Monogram"
            width={80}
            height={80}
            priority
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Lahore Bouquet Home">
        <div className="relative h-16 sm:h-20 w-auto aspect-[376/345] flex items-center">
          <Image
            src="/images/lahore-bouquet-logo-transparent.png"
            alt="Lahore Bouquet"
            width={200}
            height={184}
            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`} aria-label="Lahore Bouquet Home">
        <div className="relative h-10 sm:h-12 w-auto aspect-[376/345] flex items-center">
          <Image
            src="/images/lahore-bouquet-logo-transparent.png"
            alt="Lahore Bouquet"
            width={120}
            height={110}
            priority
            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
    );
  }

  // Default Header Variant: Perfectly sized, transparent background, centered
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center group py-0.5 select-none ${className}`} 
      aria-label="Lahore Bouquet Home"
    >
      <div className="relative h-12 sm:h-14 md:h-16 w-auto aspect-[376/345] flex items-center justify-center">
        <Image
          src="/images/lahore-bouquet-logo-transparent.png"
          alt="Lahore Bouquet Logo"
          width={188}
          height={172}
          priority
          className="h-full w-auto object-contain drop-shadow-[0_2px_12px_rgba(225,29,72,0.25)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
