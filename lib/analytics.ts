/**
 * GA4 (gtag.js) ecommerce event helpers.
 *
 * gtag.js for measurement ID G-JQMEMKN689 is loaded in app/layout.tsx, and
 * events are fired with the same window.gtag pattern already used for the
 * `whatsapp_click` event (see ProductDetailActions / FloatingWhatsApp).
 * Every helper is a safe no-op when gtag is unavailable (ad-blocker, SSR),
 * so analytics can never break the shopping flow.
 */

export interface GaItem {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
}

interface ProductLike {
  id: number | string;
  slug?: string;
  title: string;
  price: number;
}

interface CartLineLike {
  product: ProductLike;
  quantity: number;
}

export function gaItem(product: ProductLike, quantity: number): GaItem {
  return {
    item_id: product.slug ? String(product.slug) : String(product.id),
    item_name: product.title,
    price: product.price,
    quantity,
  };
}

export function gaItemsFromCart(lines: CartLineLike[]): GaItem[] {
  return lines.map((line) => gaItem(line.product, line.quantity));
}

export function cartValue(lines: CartLineLike[]): number {
  return lines.reduce((acc, line) => acc + line.product.price * line.quantity, 0);
}

export function trackGaEvent(eventName: string, params: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", eventName, params);
  } catch {
    /* analytics must never block the customer */
  }
}
