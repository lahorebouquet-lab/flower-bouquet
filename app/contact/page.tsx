import type { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  CheckCircle2,
  Calendar,
  HelpCircle,
  Navigation
} from "lucide-react";
import { LAHORE_AREAS } from "../data/products";
import { SITE_URL } from "@/lib/business";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Lahore Bouquet | WhatsApp, Phone & Address",
  },
  description: "Contact Lahore Bouquet on WhatsApp or phone, in Lahore, Pakistan. Open 9 AM to 1 AM daily.",
  openGraph: {
    title: "Contact Lahore Bouquet | WhatsApp, Phone & Address",
    description: "Contact Lahore Bouquet on WhatsApp or phone, in Lahore, Pakistan. Open 9 AM to 1 AM daily.",
    url: `${SITE_URL}/contact`,
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Lahore Bouquet",
    "url": `${SITE_URL}/contact`,
    "image": `${SITE_URL}/icon.png`,
    "telephone": CONTACT_PHONE.e164,
    "email": CONTACT_EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5204,
      "longitude": 74.3587
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "01:00"
      }
    ],
    "priceRange": "Rs. 1,180 - Rs. 14,500"
  };

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#2A2A2A]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header (Section 15: #F8F3EA background, #0B0B0B heading, #2A2A2A text) */}
      <section className="relative py-14 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F3EA] border border-[#E5DED2] text-[#8B1E2D] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            Direct Florist Assistance • Open 9 AM to 1 AM Daily
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0B0B]">
            Contact Lahore Bouquet
          </h1>

          <p className="text-[#2A2A2A] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Send us a WhatsApp message or call our helpline. A real florist will answer your questions and take custom bouquet orders.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#777777] pt-2">
            <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#8B1E2D] font-semibold">Contact</span>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards (Section 15: White cards, #E5DED2 borders, #0B0B0B headings, #8B1E2D buttons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp Helpline */}
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.30)] hover:border-[#C6A15B] transition-all shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#8B1E2D]">Fastest Way to Order</span>
              <h2 className="font-playfair text-xl font-bold text-[#0B0B0B] mt-1">WhatsApp Florist Chat</h2>
              <p className="text-xs text-[#2A2A2A] mt-1 leading-relaxed">
                Send bouquet reference photos, specify your budget, or get live photo updates before your flowers leave for delivery.
              </p>
            </div>
            <a
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-semibold text-xs shadow-md transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp: 0310-4225974
            </a>
          </div>

          {/* Card 2: Phone Helpline */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-all shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] flex items-center justify-center text-[#8B1E2D]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#8B1E2D]">Direct Helpline</span>
              <h2 className="font-playfair text-xl font-bold text-[#0B0B0B] mt-1">Phone Inquiries</h2>
              <p className="text-xs text-[#2A2A2A] mt-1 leading-relaxed">
                Speak directly with our florist team for same-day delivery coordination, car decor, and wedding consultations.
              </p>
            </div>
            <div className="space-y-1">
              <a
                href="tel:+923104225974"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F3EA] hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white border border-[#E5DED2] font-semibold text-xs transition-all cursor-pointer block"
              >
                <Phone className="w-3.5 h-3.5 text-[#8B1E2D]" />
                +92 310 4225974
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-all shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] flex items-center justify-center text-[#8B1E2D]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#8B1E2D]">Email Us</span>
              <h2 className="font-playfair text-xl font-bold text-[#0B0B0B] mt-1">Send an Email</h2>
              <p className="text-xs text-[#2A2A2A] mt-1 leading-relaxed">
                For bulk orders, corporate inquiries, wedding quotes, and feedback — we reply within a few hours.
              </p>
            </div>
            <div className="space-y-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F3EA] hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white border border-[#E5DED2] font-semibold text-xs transition-all cursor-pointer block break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Card 4: Atelier Studio */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-all shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] flex items-center justify-center text-[#8B1E2D]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#C6A15B]">Service Area</span>
              <h2 className="font-playfair text-xl font-bold text-[#0B0B0B] mt-1">Lahore Delivery Network</h2>
              <p className="text-xs text-[#2A2A2A] mt-1 leading-relaxed">
                Lahore, Punjab, Pakistan. We deliver to homes, offices, hospitals, and venues across the city.
              </p>
            </div>
            <div className="text-xs text-[#2A2A2A] flex items-center gap-1.5 pt-1">
              <Clock className="w-4 h-4 text-[#8B1E2D]" />
              <span>Monday to Sunday: 9:00 AM – 1:00 AM</span>
            </div>
          </div>

        </div>
      </section>

      {/* Map & Get Directions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Serving All of Lahore</h2>
            <p className="text-xs text-[#2A2A2A]">Lahore, Pakistan • Open 9:00 AM to 1:00 AM daily</p>
          </div>

          <Link
            href="/delivery-areas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider shadow-md transition-all self-start sm:self-auto active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>See Delivery Areas & Times</span>
          </Link>
        </div>
      </section>

      {/* Coverage Areas Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="p-8 rounded-2xl bg-white border border-[#E5DED2] space-y-4 shadow-xs">
          <div className="space-y-1">
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Same-Day Delivery Sectors Across Lahore</h2>
            <p className="text-xs text-[#2A2A2A]">Delivering in air-conditioned vans in 2 to 5 hours:</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {LAHORE_AREAS.map((area) => (
              <span
                key={area}
                className="px-3.5 py-1.5 rounded-full bg-[#F8F3EA] border border-[#E5DED2] text-xs text-[#0B0B0B] font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
