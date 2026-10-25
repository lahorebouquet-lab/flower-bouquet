import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ALL_PRODUCTS, 
  Product, 
  LAHORE_AREAS
} from "../../data/products";
import { getSanityProducts, getSanityProduct, getSanityReviews } from "@/sanity/lib/fetch";
import ReviewsSection from "../../components/ReviewsSection";
import ProductMainImage from "@/app/components/ProductMainImage";
import { SITE_URL } from "@/lib/business";
import ProductDetailActions from "../../components/ProductDetailActions";
import ProductCard from "../../components/ProductCard";
import Rating from "../../components/Rating";
import { 
  Clock, 
  Truck, 
  ShieldCheck, 
  Heart, 
  Leaf, 
  Sparkles, 
  MapPin,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { getSeo } from "@/lib/seo";
import { productKind, productAlt, KIND_LABEL, type ProductKind } from "@/lib/productKind";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const sanityProducts = await getSanityProducts();
  const list = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  return list.flatMap((p) => [
    { id: String(p.id) },
    { id: p.slug }
  ]);
}

const KIND_COPY = {
  bouquet: {
    noun: "bouquet", badgeTitle: "7-Day Freshness", badgeSub: "Cold-Chain Stems",
    stemsLabel: "Artisan Stem Composition:", wrapping: "Eco-friendly paper & fabric wrap, hand-tied to order",
    careTitle: "Florist Care & Vase Life",
    care: "Upon receiving, trim 1–2 cm from stem bases at a 45-degree angle under cool water. Place in a clean vase with cold water. Keep away from direct sunlight, air-conditioner drafts, and ripening fruit to maintain peak bloom vitality for 7–12 days.",
    related: "Similar Handcrafted Arrangements",
  },
  cake: {
    noun: "cake", badgeTitle: "Baked to Order", badgeSub: "Fresh on Delivery Day",
    stemsLabel: "What's Included:", wrapping: "Boxed and sealed, with your message on the cake or a card",
    careTitle: "Storage & Serving",
    care: "Refrigerate within an hour of delivery and keep the box closed. Take the cake out about 20 minutes before serving. Cream and mousse cakes are best eaten within 2 days.",
    related: "More Cakes You May Like",
  },
  gift: {
    noun: "gift", badgeTitle: "Gift-Wrapped", badgeSub: "Ready to Hand Over",
    stemsLabel: "What's Inside:", wrapping: "Gift box with ribbon and a handwritten message card",
    careTitle: "What's in the Box",
    care: "Every item is checked and packed on the day of delivery. Add fresh flowers or a cake from the same page to make it a complete surprise.",
    related: "More Gifts You May Like",
  },
  perfume: {
    noun: "order", badgeTitle: "Gift-Wrapped", badgeSub: "Sealed & Genuine",
    stemsLabel: "Fragrance Notes:", wrapping: "Gift box with ribbon and a handwritten message card",
    careTitle: "About This Fragrance",
    care: "Each bottle is sealed and checked before it is gift-wrapped. Store away from heat and direct sunlight to keep the scent at its best.",
    related: "More Fragrances You May Like",
  },
  decor: {
    noun: "setup", badgeTitle: "Set Up On Site", badgeSub: "Fresh Flowers",
    stemsLabel: "What's Included:", wrapping: "Installed by our team at your home, hall or marquee",
    careTitle: "Booking & Setup",
    care: "Share the venue, date and colour theme on WhatsApp for a free quote. Book 1–2 weeks ahead in wedding season; our team sets up on the day and clears flowers afterwards on request.",
    related: "More Décor Ideas",
  },
  jewellery: {
    noun: "order", badgeTitle: "Made Same Day", badgeSub: "Fresh Blooms",
    stemsLabel: "Flowers Used:", wrapping: "Packed in a chilled box to keep the flowers fresh",
    careTitle: "Keeping It Fresh",
    care: "Keep the box in the fridge (not the freezer) until an hour before wearing, and mist the flowers lightly with water. Fresh floral jewellery looks its best for about 24 hours.",
    related: "More Floral Jewellery",
  },
} as const;

/** Cut text to at most `max` characters at a word boundary, dropping a dangling separator. */
function shortenAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max + 1);
  const end = cut.lastIndexOf(" ");
  return (end > max * 0.5 ? cut.slice(0, end) : text.slice(0, max))
    .replace(/[\s:\-–—,.&|(]+$/, "")
    .trimEnd();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const sanityProducts = await getSanityProducts();
  const product = sanityProducts.find(p => String(p.id) === id || p.slug === id || p._id === id) 
    || await getSanityProduct(id) 
    || ALL_PRODUCTS.find(p => String(p.id) === id || p.slug === id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Explore our collection of fresh flower bouquets in Lahore."
    };
  }

  // Titles come from lib/seo-map.json (unique per product); products added
  // later fall back to a category-aware "{Name} | {Type}, Lahore" pattern.
  const kind = productKind(product.title, product.category);
  const mapped = getSeo(`/products/${product.slug}`);
  let title = mapped?.title;
  if (!title) {
    const candidates = [
      `${product.title} | ${KIND_LABEL[kind]} | Lahore Bouquet`,
      `${product.title} | ${KIND_LABEL[kind]}`,
      `${product.title} | Lahore Bouquet`,
    ];
    title = candidates.find((t) => t.length <= 60) ?? shortenAtWord(product.title, 60);
  }

  // Description: name + real price + what makes this kind of item different.
  const priceStr = `Rs. ${product.price.toLocaleString()}`;
  const tail: Record<ProductKind, string> = {
    cake: "baked to order and delivered fresh in Lahore today. Add your message, flowers or balloons.",
    gift: "gift-wrapped and delivered in Lahore today, with a photo before dispatch. Add flowers or a cake.",
    perfume: "gift-wrapped perfume delivered in Lahore today. Add a bouquet or a cake to make it a surprise.",
    jewellery: "fresh floral jewellery for mehndi and nikkah, made on the day and delivered across Lahore.",
    decor: "set up by our team at your home, venue or car in Lahore. Free quote and design on WhatsApp.",
    bouquet: "hand-tied fresh and delivered across Lahore in 2–5 hours, with a photo before dispatch.",
  };
  const shortTail: Record<ProductKind, string> = {
    cake: "Baked to order, delivered today in Lahore.",
    gift: "Gift-wrapped, delivered today in Lahore.",
    perfume: "Gift-wrapped, delivered today in Lahore.",
    jewellery: "Made fresh on the day in Lahore.",
    decor: "Set up at your venue in Lahore; free quote on WhatsApp.",
    bouquet: "Hand-tied fresh, delivered in Lahore in 2–5 hours.",
  };
  let metaDesc = `${product.title}, ${priceStr}: ${tail[kind]}`;
  if (metaDesc.length > 155) metaDesc = `${product.title}, ${priceStr}. ${shortTail[kind]}`;
  if (metaDesc.length > 155) metaDesc = `${shortenAtWord(product.title, 155 - priceStr.length - shortTail[kind].length - 4)}, ${priceStr}. ${shortTail[kind]}`;

  const imageUrl = product.image?.startsWith("http") ? product.image : `${SITE_URL}${product.image}`;

  return {
    title: { absolute: title },
    description: metaDesc,
    keywords: null,
    alternates: {
      canonical: `${SITE_URL}/products/${product.slug}`,
    },
    openGraph: {
      title,
      description: metaDesc,
      url: `${SITE_URL}/products/${product.slug}`,
      // No width/height: product photos come in several sizes, and a wrong
      // declared size is worse than none.
      images: [{ url: imageUrl, alt: `${product.title} – ${KIND_LABEL[kind].toLowerCase()} from Lahore Bouquet` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDesc,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const sanityProducts = await getSanityProducts();
  const reviews = await getSanityReviews();

  const product = sanityProducts.find(p => String(p.id) === id || p.slug === id || p._id === id)
    || await getSanityProduct(id)
    || ALL_PRODUCTS.find(p => String(p.id) === id || p.slug === id);

  if (!product) {
    notFound();
  }

  // Category-aware related products: same category first, then related
  // categories (cakes→gifts, gajray→wedding), then popular items. Never the
  // same generic 4 on every page.
  const CATEGORY_AFFINITY: Record<string, string[]> = {
    "Gifts & Cakes": ["Gifts & Cakes", "Bouquets"],
    "Fresh Flower Gajray": ["Fresh Flower Gajray", "Wedding Décor", "Roses"],
    "Wedding Décor": ["Wedding Décor", "Fresh Flower Gajray", "Roses"],
    "Money Bouquets": ["Money Bouquets", "Bouquets", "Roses"],
    "Roses": ["Roses", "Bouquets", "Sunflowers"],
    "Sunflowers": ["Sunflowers", "Bouquets", "Roses"],
    "Bouquets": ["Bouquets", "Roses", "Sunflowers"],
    "Crochet": ["Crochet", "Bouquets", "Dried"],
    "Dried": ["Dried", "Bouquets", "Crochet"],
  };
  const affinity = CATEGORY_AFFINITY[product.category] || [product.category, "Bouquets", "Roses"];
  const others = sanityProducts.filter((p) => String(p.id) !== String(product.id));
  const relatedProducts: typeof others = [];
  for (const cat of affinity) {
    for (const p of others) {
      if (relatedProducts.length >= 4) break;
      if (p.category === cat && !relatedProducts.includes(p)) relatedProducts.push(p);
    }
    if (relatedProducts.length >= 4) break;
  }
  // Fill remaining slots with popular items (not already picked)
  if (relatedProducts.length < 4) {
    for (const p of others) {
      if (relatedProducts.length >= 4) break;
      if ((p.badgeType === "hot" || p.badgeType === "bestseller") && !relatedProducts.includes(p)) {
        relatedProducts.push(p);
      }
    }
  }

  const getCategoryHref = (cat: string) => {
    switch (cat) {
      case "Bouquets": return "/bouquets";
      case "Roses": return "/roses";
      case "Sunflowers": return "/sunflower-bouquet-lahore";
      case "Money Bouquets": return "/money-bouquets";
      case "Wedding Décor": return "/wedding-decor";
      case "Gifts & Cakes": return "/gifts-and-cakes";
      case "Fresh Flower Gajray": return "/gajray-lahore";
      case "Crochet": return "/crochet-bouquets";
      case "Dried": return "/dried-flowers";
      case "Birthday Cakes": return "/gifts-and-cakes";
      case "Scents & Perfumes": return "/collections/scents-and-perfumes";
      case "Velvet Red Roses": return "/roses/red-roses";
      case "Pure White Roses": return "/roses/white-roses";
      case "Chocolate Bouquets": return "/chocolate-bouquets-lahore";
      case "Balloons": return "/helium-balloons-lahore";
      default: return "/bouquets";
    }
  };

  const productImageUrl = product.image?.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": productImageUrl,
    "description": product.desc,
    "sku": `LB-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "Lahore Bouquet"
    },
    "offers": {
      "@type": "Offer",
      "url": `${SITE_URL}/products/${product.slug}`,
      "priceCurrency": "PKR",
      "price": product.price,
      "validFrom": "2026-10-09",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": 0,
          "currency": "PKR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "PK",
          "addressRegion": "Lahore"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "PK",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "description": "Fresh flowers are perishable and cannot be returned. Freshness promise: if flowers arrive damaged or wilted, share a photo on WhatsApp within 24 hours and we will replace the bouquet or refund your order."
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": product.category,
        "item": `${SITE_URL}${getCategoryHref(product.category)}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `${SITE_URL}/products/${product.slug}`
      }
    ]
  };

  const kind = productKind(product.title, product.category);
  const copy = KIND_COPY[kind];

  const isGoldBadge = product.badgeType === "hot" || product.badge?.toLowerCase().includes("premium") || product.badge?.toLowerCase().includes("new") || product.badge?.toLowerCase().includes("trending");

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#2A2A2A]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 border-b border-[#E5DED2] text-xs text-[#777777]">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href={getCategoryHref(product.category)} className="hover:text-[#0B0B0B] transition-colors">
              {product.category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#8B1E2D] font-medium truncate max-w-[280px] sm:max-w-md">
            {product.title}
          </li>
        </ol>
      </nav>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Product Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white border border-[rgba(198,161,91,0.25)] shadow-md">
              <ProductMainImage src={product.image} alt={productAlt(product.title, product.category)} />

              {/* Badge Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                  isGoldBadge 
                    ? "bg-[#C6A15B] text-[#0B0B0B]" 
                    : "bg-[#8B1E2D] text-white"
                }`}>
                  {product.badge}
                </span>
              </div>

              {/* Eco Badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DED2] text-[11px] text-[#0B0B0B] font-medium shadow-xs">
                  <Leaf className="w-3.5 h-3.5 text-[#8B1E2D]" />
                  Eco-Friendly Paper & Fabric Wrap
                </span>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-2xl bg-white border border-[#E5DED2] space-y-1 shadow-xs">
                <Clock className="w-4 h-4 text-[#8B1E2D] mx-auto" />
                <span className="font-semibold text-[#0B0B0B] block text-[11px]">2–5h Delivery</span>
                <span className="text-[10px] text-[#777777] block">Express in Lahore</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E5DED2] space-y-1 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#8B1E2D] mx-auto" />
                <span className="font-semibold text-[#0B0B0B] block text-[11px]">Photo Proof</span>
                <span className="text-[10px] text-[#777777] block">Before Handover</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E5DED2] space-y-1 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C6A15B] mx-auto" />
                <span className="font-semibold text-[#0B0B0B] block text-[11px]">{copy.badgeTitle}</span>
                <span className="text-[10px] text-[#777777] block">{copy.badgeSub}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Price, Details, and Order Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category & Rating */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Link 
                  href={getCategoryHref(product.category)}
                  className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D] hover:underline"
                >
                  {product.category}
                </Link>

                {/* Real reviews only — Rating renders nothing when reviewCount is 0 */}
                <Rating
                  rating={product.rating ?? 0}
                  reviewCount={product.reviewCount ?? 0}
                />
              </div>

              {/* Title */}
              <h1 className="font-playfair text-2xl sm:text-4xl font-bold tracking-tight text-[#0B0B0B] leading-tight">
                {product.title}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#8B1E2D]">
                  Rs. {product.price.toLocaleString()} PKR
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-base text-[#777777] line-through">
                      Rs. {product.oldPrice.toLocaleString()} PKR
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8B1E2D]/10 border border-[#8B1E2D]/30 text-[#8B1E2D] text-xs font-bold">
                      Save Rs. {(product.oldPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description & Stems */}
            <div className="space-y-3 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed border-t border-b border-[#E5DED2] py-4">
              <p>{product.desc}</p>
              {product.stems && (
                <div className="p-3.5 rounded-2xl bg-white border border-[#E5DED2] flex items-start gap-2.5 shadow-xs">
                  <Leaf className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0B0B0B] text-xs block">{copy.stemsLabel}</span>
                    <span className="text-xs text-[#2A2A2A]">{product.stems}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Good to Know — product details template (verified facts only) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
                <span className="font-semibold text-[#0B0B0B] block">Wrapping</span>
                <span className="text-[#2A2A2A]">{copy.wrapping}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
                <span className="font-semibold text-[#0B0B0B] block">Delivery</span>
                <span className="text-[#2A2A2A]">FREE same-day delivery in Lahore (2–5 hours) · Midnight slot 11:30 PM–12:15 AM</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
                <span className="font-semibold text-[#0B0B0B] block">Freshness &amp; Photo Proof</span>
                <span className="text-[#2A2A2A]">Made fresh on the day of delivery — photo sent on WhatsApp before dispatch</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
                <span className="font-semibold text-[#0B0B0B] block">Payment</span>
                <span className="text-[#2A2A2A]">Cash on Delivery, bank transfer, JazzCash, EasyPaisa &amp; cards</span>
              </div>
            </div>

            {/* Interactive Actions Component */}
            <ProductDetailActions product={product} />

          </div>

        </div>
      </section>

      {/* Product Information Accordions / Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-[#E5DED2]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
            <h2 className="font-playfair text-lg font-bold text-[#0B0B0B] flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#8B1E2D]" />
              {copy.careTitle}
            </h2>
            <p className="text-[#2A2A2A] leading-relaxed">
              {copy.care}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
            <h2 className="font-playfair text-lg font-bold text-[#0B0B0B] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8B1E2D]" />
              Lahore Delivery Policies
            </h2>
            <p className="text-[#2A2A2A] leading-relaxed">
              Delivered exclusively via careful, climate-protected delivery. Midnight deliveries run between 11:30 PM – 12:15 AM. Senders receive a high-resolution photo proof of their prepared bouquet on WhatsApp before courier handover.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
            <h2 className="font-playfair text-lg font-bold text-[#0B0B0B] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8B1E2D]" />
              Zero-Risk Guarantee
            </h2>
            <p className="text-[#2A2A2A] leading-relaxed">
              If your {copy.noun} arrives damaged{kind === "bouquet" ? " or wilted" : ""} due to transit, we&apos;ll replace it or refund you — just WhatsApp us a photo within 3 hours of delivery.
            </p>
          </div>

        </div>
      </section>

      {/* Customer Reviews — the 3 genuine Sanity reviews (section hides itself when empty) */}
      <ReviewsSection reviews={reviews} />

      {/* Related Products Carousel / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-[#E5DED2] space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">You May Also Adore</span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] mt-1">
              {copy.related}
            </h2>
          </div>
          <Link
            href={getCategoryHref(product.category)}
            className="text-xs font-semibold text-[#8B1E2D] hover:text-[#0B0B0B] flex items-center gap-1 transition-colors"
          >
            View Entire {product.category} <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
