/**
 * Lahore Bouquet — Single Source of Truth for business facts.
 *
 * IMPORTANT: This business has NO physical storefront (delivery-only service
 * operating across Lahore). Do NOT invent a street address. NAP = Name,
 * city-level address, phone — kept consistent everywhere (header, footer,
 * FAQ, JSON-LD schema, llms.txt, meta tags).
 */

import { CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_HOURS_DISPLAY, BUSINESS_ADDRESS_DISPLAY } from "./site";

export const BUSINESS = {
  name: "Lahore Bouquet",
  tagline: "Fresh Flower Bouquets in Lahore, Delivered to Your Door",

  phone: {
    /** E.164 for tel: links and schema */
    e164: CONTACT_PHONE.e164,
    /** International display */
    intl: CONTACT_PHONE.intl,
    /** Local display */
    local: CONTACT_PHONE.local,
    /** wa.me format (no +) */
    whatsapp: CONTACT_PHONE.whatsapp,
  },

  email: CONTACT_EMAIL,

  /** Honest city-level address — no fake street address (delivery-only). */
  address: {
    locality: "Lahore",
    region: "Punjab",
    country: "PK",
    countryName: "Pakistan",
    /** Short display string used in footer/contact */
    display: "Lahore, Punjab, Pakistan",
  },

  /** City-level coordinates (Lahore centre) — not a storefront pin. */
  geo: {
    latitude: 31.5204,
    longitude: 74.3587,
  },

  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    /** Closes after midnight — schema uses 01:00 next day, see openingHoursSpecification builder */
    closes: "01:00",
    display: "Monday–Sunday 09:00–01:00 (PKT)",
  },

  priceRange: {
    min: 1180,
    max: 35000,
    display: "Rs. 1,180 – Rs. 35,000",
  },

  delivery: {
    time: "2–5 hours",
    expressAreas: ["DHA", "Gulberg", "Model Town"],
    display: "Same-day delivery across Lahore in 2–5 hours",
  },

  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    googleMaps: "",
  },
} as const;

/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in Vercel, defaults to the real domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lahorebouquet.com";

/** WhatsApp deep link with optional prefilled text. */
export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${BUSINESS.phone.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Service areas for areaServed schema + content. */
export const SERVICE_AREAS = [
  "DHA",
  "Gulberg",
  "Bahria Town",
  "Model Town",
  "Johar Town",
  "Cantt",
  "Askari",
  "Wapda Town",
  "Township",
  "Faisal Town",
  "Garden Town",
  "Valencia",
  "Lake City",
] as const;

/** Florist JSON-LD — shared @id so Organization can link to it. */
export function floristSchema(url: string = SITE_URL) {
  const sameAs = [BUSINESS.social.instagram, BUSINESS.social.facebook, BUSINESS.social.tiktok].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": `${url}#florist`,
    name: BUSINESS.name,
    url,
    image: `${url}/og-image.jpg`,
    logo: `${url}/icon.png`,
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange.display,
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, EasyPaisa",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: BUSINESS.openingHours.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: BUSINESS.openingHours.opens,
      /* closes after midnight: schema allows 01:00 on the same spec */
      closes: BUSINESS.openingHours.closes,
    })),
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area}, Lahore`,
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/**
 * Florist schema for a specific delivery-area page.
 * Service-area business: no street address (per no-storefront decision),
 * just the area served + delivery-specific details.
 */
export function areaFloristSchema(areaName: string, pageUrl: string, fee?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Flower Delivery in ${areaName}, Lahore`,
    url: pageUrl,
    image: `${SITE_URL}/og-image.jpg`,
    provider: { "@id": `${SITE_URL}#florist` },
    areaServed: {
      "@type": "City",
      name: `${areaName}, Lahore`,
    },
    ...(fee
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "PKR",
            price: fee,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

/** ItemList JSON-LD for collection/category pages (SEO rich results). */
export function itemListSchema(
  products: Array<{ title: string; slug: string; price?: number; image?: string }>,
  listUrl: string,
  listName: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: listUrl,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/products/${p.slug}`,
      item: {
        "@type": "Product",
        name: p.title,
        url: `${SITE_URL}/products/${p.slug}`,
        ...(p.image ? { image: p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}` } : {}),
        ...(typeof p.price === "number"
          ? { offers: { "@type": "Offer", priceCurrency: "PKR", price: p.price, availability: "https://schema.org/InStock" } }
          : {}),
      },
    })),
  };
}

/** Service JSON-LD for décor/service pages. */
export function serviceSchema(opts: {
  name: string;
  url: string;
  description: string;
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: opts.name,
    url: opts.url,
    description: opts.description,
    provider: { "@id": `${SITE_URL}#florist` },
    areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: `${a}, Lahore` })),
    ...(opts.priceRange ? { offers: { "@type": "Offer", priceCurrency: "PKR", price: opts.priceRange } } : {}),
  };
}
export function organizationSchema(url: string = SITE_URL) {
  const sameAs = [BUSINESS.social.instagram, BUSINESS.social.facebook, BUSINESS.social.tiktok].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: BUSINESS.name,
    url,
    logo: `${url}/icon.png`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone.e164,
      contactType: "customer service",
      availableLanguage: ["en", "ur"],
      areaServed: "PK",
    },
    parentOrganization: { "@id": `${url}#florist` },
  };
}
