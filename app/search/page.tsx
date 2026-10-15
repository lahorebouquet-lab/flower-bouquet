import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Search Flowers & Gifts | Lahore Bouquet",
  description: "Search fresh flower bouquets, roses, gifts and decorations at Lahore Bouquet. Same-day delivery across Lahore.",
  alternates: {
    canonical: `${SITE_URL}/search`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA]">
      <SearchClient />
    </main>
  );
}
