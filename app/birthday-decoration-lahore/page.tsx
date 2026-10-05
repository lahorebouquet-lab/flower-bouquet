import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PartyPopper, Truck, Camera, MessageCircle, HelpCircle, Sparkles, Clock, MapPin, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Birthday Decoration in Lahore | Balloon & Flower Setup at Home",
  },
  description:
    "Book birthday decoration in Lahore — helium balloon bunches, flower backdrops, table styling and surprise setups at home. Packages from Rs. 4,999. Same-day booking available.",
  alternates: {
    canonical: "https://lahorebouquet.com/birthday-decoration-lahore",
  },
  keywords: [
    "birthday decoration in lahore",
    "birthday decoration lahore",
    "balloon decoration lahore",
    "helium balloons lahore",
    "birthday surprise decoration at home lahore",
    "flower birthday backdrop lahore",
  ],
  openGraph: {
    title: "Birthday Decoration in Lahore | Balloon & Flower Setup at Home",
    description:
      "Book birthday decoration in Lahore — helium balloon bunches, flower backdrops, table styling and surprise setups at home. Packages from Rs. 4,999.",
    url: "https://lahorebouquet.com/birthday-decoration-lahore",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

const FAQS = [
  {
    q: "How much does birthday decoration cost in Lahore?",
    a: "Our birthday decoration packages start from Rs. 4,999 for a classic balloon + banner home setup. Premium packages with flower backdrops and helium balloon bunches range from Rs. 9,999 to Rs. 19,999 depending on the size of the setup. Share your budget on WhatsApp at +92 309 4895080 and we will customise a package for you.",
  },
  {
    q: "Do you provide helium balloons in Lahore?",
    a: "Yes. We arrange helium balloon bunches in chrome, pastel and confetti styles, including number and letter foil balloons. Helium balloons can be added to any birthday decoration package or ordered on their own with 2–5 hour delivery across Lahore.",
  },
  {
    q: "Can you decorate at home for a surprise birthday?",
    a: "Absolutely — surprise home setups are our speciality. Our team arrives while the birthday person is away, completes the decoration in 1–2 hours, and coordinates with you on WhatsApp. We also offer midnight surprise slots (11:30 PM – 12:15 AM).",
  },
  {
    q: "How early should I book birthday decoration?",
    a: "For weekends and peak dates, book 2–3 days in advance. For simple balloon setups on weekdays, same-day booking is usually possible if you message us before 4 PM.",
  },
  {
    q: "Which areas of Lahore do you cover for decoration?",
    a: "We decorate homes and venues across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Valencia, Wapda Town and surrounding areas. For farmhouses and venues outside the city, a small travel charge may apply.",
  },
  {
    q: "Can I combine birthday decoration with flowers and cake?",
    a: "Yes — most customers bundle decoration with a fresh bouquet and cake. Ask for our celebration combos on WhatsApp and we will arrange everything in one booking with one delivery slot.",
  },
  {
    q: "Do you also decorate for kids' birthdays?",
    a: "Yes. We create themed kids' setups with character foil balloons, colourful balloon garlands and cake tables. Tell us the theme (superhero, princess, jungle, etc.) and we will design around it.",
  },
];

const PACKAGES = [
  {
    name: "Classic Celebration",
    price: "Rs. 4,999",
    features: [
      "Balloon garland backdrop (30+ balloons)",
      "Happy Birthday foil banner",
      "Cake table styling with drapes",
      "2–3 hour setup at your home",
    ],
  },
  {
    name: "Premium Surprise",
    price: "Rs. 9,999",
    features: [
      "Everything in Classic Celebration",
      "Helium balloon bunch (10 balloons)",
      "Fresh flower accents on backdrop",
      "LED fairy lights & photo props",
      "Midnight surprise slot available",
    ],
    highlight: true,
  },
  {
    name: "Luxury Venue Setup",
    price: "Rs. 19,999",
    features: [
      "Full flower + balloon stage backdrop",
      "Entrance balloon arch",
      "Themed table centrepieces",
      "Dedicated decoration team",
      "Photography-friendly lighting",
    ],
  },
];

export default function BirthdayDecorationLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://lahorebouquet.com" },
      { "@type": "ListItem", position: 2, name: "Birthday Decoration in Lahore", item: "https://lahorebouquet.com/birthday-decoration-lahore" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Birthday Decoration in Lahore",
    provider: {
      "@type": "Florist",
      name: "Lahore Bouquet",
      telephone: "+92 309 4895080",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MM Alam Road, Gulberg III",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
    },
    areaServed: "Lahore, Pakistan",
    description:
      "Birthday decoration at home in Lahore: helium balloons, flower backdrops, table styling and surprise setups. Packages from Rs. 4,999.",
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Birthday Decoration in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] border border-[#8B1E2D]/25 text-xs font-bold uppercase tracking-wider">
          <PartyPopper className="w-3.5 h-3.5" />
          At-Home Decoration Service
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Birthday Decoration in Lahore
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
          Turn any home into a celebration with our <strong>birthday decoration service in Lahore</strong>.
          From <strong>helium balloon bunches</strong> and balloon garland backdrops to fresh-flower
          styling and LED-lit surprise setups, our team decorates your space in 1–2 hours while you
          relax. Packages start from <strong>Rs. 4,999</strong>, with same-day booking available across
          DHA, Gulberg, Model Town, Johar Town and Bahria Town.
        </p>
      </section>

      {/* Packages */}
      <section className="space-y-6">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Birthday Decoration Packages & Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-6 rounded-2xl border shadow-sm space-y-4 ${
                pkg.highlight
                  ? "bg-[#0B0B0B] border-[#C6A15B] text-white"
                  : "bg-white border-[rgba(198,161,91,0.25)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`font-playfair font-bold text-lg ${pkg.highlight ? "text-[#C6A15B]" : "text-[#0B0B0B]"}`}>
                  {pkg.name}
                </h3>
                {pkg.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0B0B0B] px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className={`text-2xl font-bold ${pkg.highlight ? "text-white" : "text-[#8B1E2D]"}`}>{pkg.price}</p>
              <ul className="space-y-2 text-xs leading-relaxed">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <BadgeCheck className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-[#C6A15B]" : "text-[#8B1E2D]"}`} />
                    <span className={pkg.highlight ? "text-[#BDBDBD]" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20book%20the%20birthday%20decoration%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1E2D] text-white text-xs font-semibold hover:bg-[#a32438] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why + how */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">What&apos;s Included</h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            Every birthday decoration includes helium-quality balloons (chrome, pastel & confetti),
            themed foil number/letter balloons, backdrop drapes, cake-table styling and a complete
            cleanup-friendly setup. Add fresh flowers, a birthday bouquet or a cake to make it a full
            celebration bundle — one booking, one team, one time slot.
          </p>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Clock className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">How Booking Works</h2>
          </div>
          <ol className="text-xs sm:text-sm leading-relaxed space-y-2 list-decimal list-inside">
            <li>Message us on WhatsApp with your date, area and budget.</li>
            <li>We confirm your package and decoration theme.</li>
            <li>Our team arrives 2–3 hours before party time and sets up everything.</li>
            <li>You walk into a ready celebration — we handle the rest.</li>
          </ol>
        </div>
      </section>

      {/* Areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] space-y-3">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-[#C6A15B]" />
          <h2 className="font-playfair text-xl font-bold text-white">Areas We Serve</h2>
        </div>
        <p className="text-xs text-[#C6A15B] leading-loose">
          DHA (Phases 1–9) · Gulberg · Model Town · Johar Town · Bahria Town · Cantt · Valencia Town ·
          Wapda Town · Faisal Town · Garden Town · Shadman · Lake City · Askari 11 · Paragon City
        </p>
        <p className="text-xs text-[#BDBDBD] leading-relaxed flex items-start gap-2">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#C6A15B]" />
          Farmhouses and venues outside the city are covered with a small travel charge — ask on WhatsApp.
        </p>
      </section>

      {/* Related links */}
      <section className="flex flex-wrap gap-3 text-xs">
        <Link href="/birthday-surprises" className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.35)] hover:border-[#C6A15B] transition-colors font-semibold text-[#0B0B0B]">
          Birthday Surprise Bouquets →
        </Link>
        <Link href="/gifts-and-cakes" className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.35)] hover:border-[#C6A15B] transition-colors font-semibold text-[#0B0B0B]">
          Cakes & Gifts →
        </Link>
        <Link href="/wedding-decor" className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.35)] hover:border-[#C6A15B] transition-colors font-semibold text-[#0B0B0B]">
          Wedding Décor →
        </Link>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-4 p-8 rounded-2xl bg-[#8B1E2D]/5 border border-[#8B1E2D]/20">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Ready to Plan the Perfect Birthday?</h2>
        <p className="text-sm text-[#555555] max-w-xl mx-auto">
          Message us now with your date and area — we&apos;ll reply within minutes with availability and a customised quote.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20want%20birthday%20decoration%20in%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us Now
          </a>
          <Link
            href="/bouquets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B0B0B] text-white text-sm font-semibold hover:bg-[#8B1E2D] transition-colors"
          >
            <Camera className="w-4 h-4" />
            Browse Birthday Bouquets
          </Link>
        </div>
      </section>
    </main>
  );
}
