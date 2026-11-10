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
    min: 349,
    max: 500000,
    display: "Rs. 349 – Rs. 500,000",
  },

  delivery: {
    time: "2–5 hours",
    expressAreas: ["DHA", "Gulberg", "Model Town"],
    display: "Same-day delivery across Lahore in 2–5 hours",
  },

  social: {
    instagram: "https://www.instagram.com/lahorebouquet/",
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

/**
 * Florist JSON-LD — the single business entity for the homepage.
 * Structure follows the 2026-11-10 SEO/GEO/AEO audit. priceRange is the REAL
 * catalog range (min Rs. 349, max Rs. 500,000 verified against live Sanity
 * 2026-11-10 — the audit's "Rs. 50,000" top end is wrong). No GBP/Facebook
 * URLs: no verified GBP profile URL or Lahore Bouquet Facebook page exists.
 */
export function floristSchema(url: string = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": `${url}#florist`,
    name: BUSINESS.name,
    url,
    image: `${url}/og-image.jpg`,
    logo: `${url}/icon.png`,
    description:
      "Same-day flower delivery in Lahore. Fresh hand-tied bouquets from Rs. 1,239, delivered free in 2-5 hours, with a WhatsApp photo before dispatch.",
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange.display,
    currenciesAccepted: "PKR",
    paymentAccepted: "Bank Transfer, JazzCash, EasyPaisa, Credit Card, Debit Card",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: BUSINESS.openingHours.opens,
      closes: BUSINESS.openingHours.closes,
    },
    areaServed: [
      { "@type": "City", name: "Lahore" },
      ...SERVICE_AREAS.map((area) => ({
        "@type": "Place",
        name: `${area === "Valencia" ? "Valencia Town" : area}, Lahore`,
      })),
    ],
    knowsAbout: [
      "Same-day flower delivery",
      "Midnight flower delivery",
      "Rose bouquets",
      "Money bouquets",
      "Fresh gajray",
      "Wedding flower decor",
    ],
    sameAs: [
      BUSINESS.social.instagram,
      "https://lahorebouquet-flowers.blogspot.com",
    ],
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
  products: Array<{ title: string; slug: string; price?: number; image?: string; description?: string }>,
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
        ...(p.description
          ? { description: p.description }
          : { description: `${p.title} — fresh flowers with free same-day delivery across Lahore. Order online at Lahore Bouquet.` }),
        brand: { "@type": "Brand", name: BUSINESS.name },
        image: p.image
          ? (p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`)
          : `${SITE_URL}/og-image.jpg`,
        ...(typeof p.price === "number"
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: "PKR",
                price: p.price,
                validFrom: "2026-10-09",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "PKR" },
                  shippingDestination: { "@type": "DefinedRegion", addressCountry: "PK", addressRegion: "Lahore" },
                  deliveryTime: {
                    "@type": "ShippingDeliveryTime",
                    handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
                    transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
                  },
                },
                hasMerchantReturnPolicy: {
                  "@type": "MerchantReturnPolicy",
                  applicableCountry: "PK",
                  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
                  description: "Fresh flowers are perishable and cannot be returned. Damaged or wrong items are replaced or refunded — contact us on WhatsApp within 24 hours.",
                },
              },
            }
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
