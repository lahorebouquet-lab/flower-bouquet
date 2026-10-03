import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ALL_PRODUCTS, 
  Product,
  LAHORE_AREAS,
  REVIEWS
} from "../../data/products";
import ProductDetailActions from "../../components/ProductDetailActions";
import ProductCard from "../../components/ProductCard";
import { 
  Star, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
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
  return ALL_PRODUCTS.flatMap((p) => [
    { id: p.id.toString() },
    { id: p.slug }
  ]);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = ALL_PRODUCTS.find(p => p.id.toString() === id || p.slug === id);

  if (!product) {
    return {
      title: "Product Not Found | Lahore Bouquet",
      description: "Explore our collection of fresh flower bouquets in Lahore."
    };
  }

  const categoryUrl = `/collections/${product.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;

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
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Lahore Bouquet`,
      description: `Rs. ${product.price.toLocaleString()} PKR. Fresh hand-tied bouquet delivered across Lahore within 2–5 hours.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: product.title,
        }
      ],
      type: "website"
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = ALL_PRODUCTS.find(p => p.id.toString() === id || p.slug === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = ALL_PRODUCTS
    .filter(p => p.id !== product.id && (p.category === product.category || p.badgeType === "hot"))
    .slice(0, 4);

  // Category Link mapping
  const getCategoryHref = (cat: string) => {
    switch (cat) {
      case "Bouquets": return "/collections/bouquets";
      case "Roses": return "/collections/roses";
      case "Sunflowers": return "/collections/sunflowers";
      case "Money Bouquets": return "/collections/money-bouquets";
      case "Wedding Décor": return "/collections/wedding-decor";
      case "Gifts & Cakes": return "/collections/gifts-cakes";
      default: return "/collections/bouquets";
    }
  };

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": `https://flowerbouquet.pk${product.image}`,
    "description": product.desc,
    "sku": `FLORA-${product.id}`,
    "offers": {
      "@type": "Offer",
      "url": `https://flowerbouquet.pk/products/${product.slug}`,
      "priceCurrency": "PKR",
      "price": product.price,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <main className="min-h-screen bg-[#101012] text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 border-b border-white/10 text-xs text-white/50">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href={getCategoryHref(product.category)} className="hover:text-white transition-colors">
              {product.category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#E11D48] font-medium truncate max-w-[280px] sm:max-w-md">
            {product.title}
          </li>
        </ol>
      </nav>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Product Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#15151A] border border-white/10 shadow-2xl">
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
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E11D48] text-white shadow-lg">
                  {product.badge}
                </span>
              </div>

              {/* Eco Badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] text-white font-medium">
                  <Leaf className="w-3.5 h-3.5 text-[#25D366]" />
                  100% Zero-Plastic Eco Wrap
                </span>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-[#17171E] border border-white/10 space-y-1">
                <Clock className="w-4 h-4 text-[#E11D48] mx-auto" />
                <span className="font-semibold text-white block text-[11px]">2–5h Delivery</span>
                <span className="text-[10px] text-white/50 block">Express in Lahore</span>
              </div>
              <div className="p-3 rounded-xl bg-[#17171E] border border-white/10 space-y-1">
                <ShieldCheck className="w-4 h-4 text-[#25D366] mx-auto" />
                <span className="font-semibold text-white block text-[11px]">Photo Proof</span>
                <span className="text-[10px] text-white/50 block">Before Handover</span>
              </div>
              <div className="p-3 rounded-xl bg-[#17171E] border border-white/10 space-y-1">
                <Sparkles className="w-4 h-4 text-[#E11D48] mx-auto" />
                <span className="font-semibold text-white block text-[11px]">7-Day Freshness</span>
                <span className="text-[10px] text-white/50 block">Cold-Chain Stems</span>
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
                  className="text-xs uppercase font-bold tracking-widest text-[#E11D48] hover:underline"
                >
                  {product.category}
                </Link>

                <div className="flex items-center gap-1.5 text-xs text-white/70">
                  <div className="flex text-[#E11D48]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E11D48]" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">{product.rating}</span>
                  <span className="text-white/40">({product.reviewCount} verified reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {product.title}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#E11D48]">
                  Rs. {product.price.toLocaleString()} PKR
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-base text-white/40 line-through">
                      Rs. {product.oldPrice.toLocaleString()} PKR
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/40 text-[#F43F5E] text-xs font-bold">
                      Save Rs. {(product.oldPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description & Stems */}
            <div className="space-y-3 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-b border-white/10 py-4">
              <p>{product.desc}</p>
              {product.stems && (
                <div className="p-3 rounded-xl bg-[#17171E] border border-white/10 flex items-start gap-2.5">
                  <Leaf className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-xs block">Artisan Stem Composition:</span>
                    <span className="text-xs text-white/80">{product.stems}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Actions Component (Quantity, Slot, Lahore Area, Greeting Card, Add to Bag, WhatsApp Order) */}
            <ProductDetailActions product={product} />

          </div>

        </div>
      </section>

      {/* Product Information Accordions / Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-3">
            <h3 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#25D366]" />
              Florist Care & Vase Life
            </h3>
            <p className="text-white/70 leading-relaxed">
              Upon receiving, trim 1–2 cm from stem bases at a 45-degree angle under cool water. Place in a clean vase with cold water. Keep away from direct sunlight, air-conditioner drafts, and ripening fruit to maintain peak bloom vitality for 7–12 days.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-3">
            <h3 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#E11D48]" />
              Lahore Delivery Policies
            </h3>
            <p className="text-white/70 leading-relaxed">
              Delivered exclusively via temperature-controlled florist dispatch. Midnight deliveries run between 11:30 PM – 12:15 AM. Senders receive a high-resolution photo proof of their prepared bouquet on WhatsApp before courier handover.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-3">
            <h3 className="font-playfair text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              Zero-Risk Guarantee
            </h3>
            <p className="text-white/70 leading-relaxed">
              If your bouquet arrives damaged or wilted due to transit, our atelier will immediately replace the arrangement with a fresh bouquet or provide a full refund within 3 hours. Your satisfaction is unconditionally guaranteed.
            </p>
          </div>

        </div>
      </section>

      {/* Customer Reviews for this Bouquet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">Verified Customer Reviews</h2>
            <p className="text-xs text-white/60">Real experiences from flower lovers across Lahore</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-[#E11D48]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E11D48]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">{product.rating} Out of 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.slice(0, 2).map((rev, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex text-[#E11D48]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E11D48]" />
                  ))}
                </div>
                <span className="text-[11px] text-[#25D366] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Lahore Buyer
                </span>
              </div>
              <p className="text-white/80 italic leading-relaxed">
                "{rev.quote}"
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-white/50 text-[11px]">
                <span className="font-semibold text-white">{rev.name}</span>
                <span>{rev.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products Carousel / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-white/10 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">You May Also Adore</span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-1">
              Similar Handcrafted Arrangements
            </h2>
          </div>
          <Link
            href={getCategoryHref(product.category)}
            className="text-xs font-semibold text-[#E11D48] hover:text-[#F43F5E] flex items-center gap-1 transition-colors"
          >
            View Entire {product.category} <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
