/**
 * What kind of item a product is, so cakes, décor and perfumes don't get
 * flower wording (vase-life, "fresh flower bouquet") in titles and alt text.
 * The Sanity category decides first; the title decides for mixed categories.
 */
export type ProductKind = "cake" | "gift" | "perfume" | "jewellery" | "decor" | "bouquet";

export const KIND_LABEL: Record<ProductKind, string> = {
  cake: "Cake Delivery in Lahore",
  gift: "Gift Delivery in Lahore",
  perfume: "Perfume Gift, Lahore",
  jewellery: "Fresh Floral Jewellery, Lahore",
  decor: "Event Décor in Lahore",
  bouquet: "Bouquet Delivery Lahore",
};

const KIND_ALT: Record<ProductKind, string> = {
  cake: "cake delivered fresh in Lahore",
  gift: "gift delivered in Lahore",
  perfume: "perfume gift delivered in Lahore",
  jewellery: "fresh floral jewellery made in Lahore",
  decor: "décor setup by Lahore Bouquet",
  bouquet: "hand-tied bouquet delivered in Lahore",
};

const CATEGORY_KIND: Record<string, ProductKind> = {
  "Birthday Cakes": "cake",
  "Wedding Décor": "decor",
  "Scents & Perfumes": "perfume",
  "Fresh Flower Gajray": "jewellery",
  Balloons: "gift",
};

export function productKind(title: string, category = ""): ProductKind {
  if (CATEGORY_KIND[category]) return CATEGORY_KIND[category];
  const name = title.toLowerCase();
  if (/\bcake\b/.test(name)) return "cake";
  if (/gajr|floral set|floral crown|boutonniere|jewell?ery/.test(name)) return "jewellery";
  if (/\b(perfume|fragrance|attar|\d+\s?ml)\b/.test(name)) return "perfume";
  if (category === "Gifts & Cakes") return "gift";
  if (/\b(box|set|hamper|frame|mug|necklace|gift)\b/.test(name) && !/bouquet|rose|bloom|flower/.test(name)) {
    return "gift";
  }
  return "bouquet";
}

export function productAlt(title: string, category = ""): string {
  return `${title} – ${KIND_ALT[productKind(title, category)]}`;
}
