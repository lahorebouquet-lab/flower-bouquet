import React from "react";
import Link from "next/link";

/**
 * Contextual links to collection, occasion and guide pages that otherwise get
 * few links from the rest of the site. Pass `groups` to show only some lists,
 * and `exclude` with the current path so a page never links to itself.
 */

type Group = "types" | "occasions" | "guides";

const LINKS: Record<Group, { title: string; items: [string, string][] }> = {
  types: {
    title: "Bouquets by flower",
    items: [
      ["/roses", "Rose bouquets"],
      ["/roses/red-roses", "Red rose bouquets"],
      ["/roses/white-roses", "White rose bouquets"],
      ["/sunflower-bouquet-lahore", "Sunflower bouquets"],
      ["/lily-bouquet-lahore", "Lily bouquets"],
      ["/tulip-bouquet-lahore", "Tulip bouquets"],
      ["/dried-flowers", "Dried flower bouquets"],
      ["/crochet-bouquets", "Crochet bouquets"],
      ["/chocolate-bouquets-lahore", "Chocolate bouquets"],
      ["/money-bouquets", "Money bouquets"],
      ["/custom-bouquets-lahore", "Custom bouquets"],
    ],
  },
  occasions: {
    title: "Flowers by occasion",
    items: [
      ["/birthday-surprises", "Birthday"],
      ["/occasions/anniversary", "Anniversary"],
      ["/occasions/love-and-romance", "Love & romance"],
      ["/occasions/congratulations", "Congratulations & graduation"],
      ["/occasions/get-well-and-sorry", "Get well & sorry"],
      ["/occasions/barat-and-walima", "Barat & walima"],
      ["/occasions/eid-gifts", "Eid gifts"],
      ["/umrah-hajj-mubarak-flowers-lahore", "Umrah & Hajj Mubarak"],
      ["/midnight-flower-delivery-lahore", "Midnight surprise"],
      ["/corporate", "Corporate & office flowers"],
      ["/garlands-lahore", "Fresh garlands (haar)"],
    ],
  },
  guides: {
    title: "Guides & price lists",
    items: [
      ["/blog/flower-prices-lahore-2026", "Flower prices in Lahore 2026"],
      ["/blog/rose-bouquet-price-pakistan-2026", "Rose bouquet price 2026"],
      ["/blog/rose-color-meanings-pakistan", "Rose colour meanings"],
      ["/blog/best-flowers-birthday-anniversary-get-well-pakistan", "Best flowers by occasion"],
      ["/blog/midnight-flower-cake-delivery-lahore", "How midnight delivery works"],
      ["/blog/graduation-flowers-lahore", "Graduation flowers guide"],
      ["/blog/custom-bouquet-guide-lahore", "Design a custom bouquet"],
      ["/blog/custom-cake-order-guide-lahore", "Order a custom cake"],
      ["/blog/wedding-decoration-cost-lahore-2026", "Wedding decoration cost 2026"],
    ],
  },
};

export default function ExploreLinks({
  groups = ["types", "occasions", "guides"],
  exclude,
}: {
  groups?: Group[];
  exclude?: string;
}) {
  return (
    <nav aria-label="Explore more" className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm">
      <div className={`grid gap-6 ${groups.length >= 3 ? "sm:grid-cols-3" : groups.length === 2 ? "sm:grid-cols-2" : ""}`}>
        {groups.map((g) => (
          <div key={g} className="space-y-2">
            <p className="font-playfair text-lg font-bold text-[#0B0B0B]">{LINKS[g].title}</p>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {LINKS[g].items
                .filter(([href]) => href !== exclude)
                .map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-[#8B1E2D] hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
