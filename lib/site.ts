/**
 * Lahore Bouquet — Site-wide contact & business config.
 * Single source of truth for contact details used across the site
 * (header, footer, checkout, JSON-LD schema, WhatsApp links).
 *
 * NOTE: CONTACT_EMAIL was changed from info@lahorebouquet.com to
 * lahorebouquet@gmail.com on 2026-10-08 per owner request ("ye hi lge
 * rehne do"). Ensure this inbox is monitored before relying on it for
 * customer contact.
 */

export const CONTACT_EMAIL = "lahorebouquet@gmail.com";

export const CONTACT_PHONE = {
  /** E.164 for tel: links and schema */
  e164: "+923104225974",
  /** International display */
  intl: "+92 310 4225974",
  /** Local display */
  local: "0310-4225974",
  /** wa.me format (no +) */
  whatsapp: "923104225974",
} as const;

export const BUSINESS_HOURS_DISPLAY = "Monday–Sunday 09:00–01:00 (PKT)";

/** Honest city-level address — no fake street address (delivery-only). */
export const BUSINESS_ADDRESS_DISPLAY = "Lahore, Punjab, Pakistan";

/**
 * Google Business Profile URL for the "See us on Google" reviews button.
 * Empty until the owner provides the real GBP link — the reviews section
 * hides the button while this is empty.
 */
export const GOOGLE_BUSINESS_URL = "";

/** WhatsApp deep link with optional prefilled text. */
export function siteWhatsappLink(text?: string): string {
  const base = `https://wa.me/${CONTACT_PHONE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Validate + normalize a Pakistani mobile number.
 * Accepts: 03XXXXXXXXX, 03XX-XXXXXXX (dashes/spaces ignored), +923XXXXXXXXX.
 * Returns the normalized E.164 form (+923XXXXXXXXX) or null if invalid.
 */
export function normalizePakistaniPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  // 03XXXXXXXXX — 11 digits starting with 03
  if (/^03\d{9}$/.test(digits)) {
    return `+92${digits.slice(1)}`;
  }
  // 923XXXXXXXXX — 12 digits starting with 923 (from +923XXXXXXXXX)
  if (/^923\d{9}$/.test(digits)) {
    return `+${digits}`;
  }
  return null;
}
