import React from "react";
import { SITE_URL } from "@/lib/business";

/** BreadcrumbList JSON-LD: Home › {parent} › {name}. */
export default function BreadcrumbSchema({
  path,
  name,
  parent = { name: "Blog", path: "/blog" },
}: {
  path: string;
  name: string;
  parent?: { name: string; path: string } | null;
}) {
  const items = [
    { name: "Home", item: SITE_URL },
    ...(parent ? [{ name: parent.name, item: `${SITE_URL}${parent.path}` }] : []),
    { name, item: `${SITE_URL}${path}` },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.item })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
