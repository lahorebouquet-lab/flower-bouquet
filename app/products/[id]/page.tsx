import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ALL_PRODUCTS, 
  Product, 
  LAHORE_AREAS
} from "../../data/products";
import { getSanityProducts, getSanityProduct } from "@/sanity/lib/fetch";
import { SITE_URL } from "@/lib/business";
import ProductDetailActions from "../../components/ProductDetailActions";
import ProductCard from "../../components/ProductCard";
import { 
  Star, 
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

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const sanityProducts = await getSanityProducts();
  const product = sanityProducts.find(p => String(p.id) === id || p.slug === id || p._id === id) 
    || await getSanityProduct(id) 
    || ALL_PRODUCTS.find(p => String(p.id) === id || p.slug === id);

  if (!product) {
    return {
      title: "Product Not Found | Lahore Bouquet",
      description: "Explore our collection of fresh flower bouquets in Lahore."
    };
  }

  return {
    title: `${product.title} - Flower Delivery Lahore`,
    description: `Buy ${product.title} in Lahore for Rs. ${product.price.toLocaleString()} PKR. ${product.desc} Enjoy same-day 2–5 hours express and midnight delivery with WhatsApp photo proof.`,
    keywords: [
      product.title.toLowerCase(),
      `${product.category.toLowerCase()} lahore`,
      "send flowers lahore",
      "fresh rose bouquet pakistan",
      "flower delivery lahore",
      "express bouquet delivery lahore"
    ],
    alternates: {
      canonical: `${SITE_URL}/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Lahore Bouquet`,
      description: `Rs. ${product.price.toLocaleString()} PKR. Fresh hand-tied bouquet delivered across Lahore within 2–5 hours.`,
      images: [
        {
          url: product.image?.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
          width: 800,
          height: 1000,
          alt: product.title,
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Lahore Bouquet`,
      description: `Rs. ${product.price.toLocaleString()} PKR. Fresh hand-tied bouquet delivered across Lahore within 2–5 hours.`,
      images: [product.image?.startsWith("http") ? product.image : `${SITE_URL}${product.image}`],
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const sanityProducts = await getSanityProducts();

  const product = sanityProducts.find(p => String(p.id) === id || p.slug === id || p._id === id)
    || await getSanityProduct(id)
    || ALL_PRODUCTS.find(p => String(p.id) === id || p.slug === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = sanityProducts
    .filter(p => String(p.id) !== String(product.id) && (p.category === product.category || p.badgeType === "hot"))
    .slice(0, 4);

  const getCategoryHref = (cat: string) => {
    switch (cat) {
      case "Bouquets": return "/bouquets";
      case "Roses": return "/roses";
      case "Sunflowers": return "/sunflowers";
      case "Money Bouquets": return "/money-bouquets";
      case "Wedding Décor": return "/wedding-decor";
      case "Gifts & Cakes": return "/gifts-and-cakes";
      default: return "/bouquets";
    }
  };

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": `${SITE_URL}${product.image}`,
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
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
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
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

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
                  100% Zero-Plastic Eco Wrap
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
                <span className="font-semibold text-[#0B0B0B] block text-[11px]">7-Day Freshness</span>
                <span className="text-[10px] text-[#777777] block">Cold-Chain Stems</span>
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

                <div className="flex items-center gap-1.5 text-xs text-[#2A2A2A]">
                  <div className="flex text-[#C6A15B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C6A15B]" />
                    ))}
                  </div>
                  <span className="text-[#777777]">Handcrafted fresh in Lahore</span>
                </div>
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
                    <span className="font-semibold text-[#0B0B0B] text-xs block">Artisan Stem Composition:</span>
                    <span className="text-xs text-[#2A2A2A]">{product.stems}</span>
                  </div>
                </div>
              )}
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
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B] flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#8B1E2D]" />
              Florist Care & Vase Life
            </h3>
            <p className="text-[#2A2A2A] leading-relaxed">
              Upon receiving, trim 1–2 cm from stem bases at a 45-degree angle under cool water. Place in a clean vase with cold water. Keep away from direct sunlight, air-conditioner drafts, and ripening fruit to maintain peak bloom vitality for 7–12 days.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8B1E2D]" />
              Lahore Delivery Policies
            </h3>
            <p className="text-[#2A2A2A] leading-relaxed">
              Delivered exclusively via temperature-controlled florist dispatch. Midnight deliveries run between 11:30 PM – 12:15 AM. Senders receive a high-resolution photo proof of their prepared bouquet on WhatsApp before courier handover.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8B1E2D]" />
              Zero-Risk Guarantee
            </h3>
            <p className="text-[#2A2A2A] leading-relaxed">
              If your bouquet arrives damaged or wilted due to transit, our atelier will immediately replace the arrangement with a fresh bouquet or provide a full refund within 3 hours. Your satisfaction is unconditionally guaranteed.
            </p>
          </div>

        </div>
      </section>

      {/* Related Products Carousel / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-[#E5DED2] space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">You May Also Adore</span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] mt-1">
              Similar Handcrafted Arrangements
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
