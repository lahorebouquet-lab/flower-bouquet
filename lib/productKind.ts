/**
 * What kind of item a product is, so cakes and gift boxes don't get
 * flower wording (vase-life, "fresh flower bouquet") in titles and alt text.
 */
export type ProductKind = "cake" | "gift" | "jewellery" | "bouquet";

export const KIND_LABEL: Record<ProductKind, string> = {
  cake: "Cake Delivery in Lahore",
  gift: "Gift Box Delivery, Lahore",
  jewellery: "Fresh Floral Jewellery, Lahore",
  bouquet: "Bouquet Delivery Lahore",
};

const KIND_ALT: Record<ProductKind, string> = {
  cake: "cake delivered fresh in Lahore",
  gift: "gift box delivered in Lahore",
  jewellery: "fresh floral jewellery made in Lahore",
  bouquet: "hand-tied bouquet delivered in Lahore",
};

export function productKind(title: string, category = ""): ProductKind {
  const name = title.toLowerCase();
  const t = `${name} ${category.toLowerCase()}`;
  if (/\bcake\b/.test(t)) return "cake";
  if (/gajr|floral set|floral crown|boutonniere|jewell?ery/.test(t)) return "jewellery";
  if (
    /\b(box|set|hamper|frame|mug|necklace|gift|perfume|fragrance|scent)\b/.test(t) &&
    !/bouquet|rose|bloom/.test(name)
  ) {
    return "gift";
  }
  return "bouquet";
}

export function productAlt(title: string, category = ""): string {
  return `${title} – ${KIND_ALT[productKind(title, category)]}`;
}
