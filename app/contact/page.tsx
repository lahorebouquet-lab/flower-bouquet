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

export const metadata: Metadata = {
  title: {
    absolute: "Contact Lahore Bouquet | WhatsApp, Phone & Address",
  },
  description: "Contact Lahore Bouquet on WhatsApp or phone, or visit us on MM Alam Road, Gulberg III, Lahore. Open 9 AM to 1 AM daily.",
  openGraph: {
    title: "Contact Lahore Bouquet | WhatsApp, Phone & Address",
    description: "Contact Lahore Bouquet on WhatsApp or phone, or visit us on MM Alam Road, Gulberg III, Lahore. Open 9 AM to 1 AM daily.",
    url: "https://lahorebouquet.com/contact",
  },
  alternates: {
    canonical: "https://lahorebouquet.com/contact",
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Lahore Bouquet",
    "url": "https://lahorebouquet.com/contact",
    "image": "https://lahorebouquet.com/icon.png",
    "telephone": "+923094895080",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MM Alam Road, Gulberg III",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
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
            Send us a WhatsApp message, call our Gulberg studio, or visit us in person on MM Alam Road. A real florist will answer your questions and take custom bouquet orders.
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
                Send bouquet reference photos, specify your budget, or get live photo updates before your flowers leave our workshop.
              </p>
            </div>
            <a
              href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-semibold text-xs shadow-md transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp: 0309-4895080
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
                href="tel:+923094895080"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F3EA] hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white border border-[#E5DED2] font-semibold text-xs transition-all cursor-pointer block"
              >
                <Phone className="w-3.5 h-3.5 text-[#8B1E2D]" />
                +92 309 4895080
              </a>
            </div>
          </div>

          {/* Card 3: Atelier Studio */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-all shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] flex items-center justify-center text-[#8B1E2D]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#C6A15B]">Shop Location</span>
              <h2 className="font-playfair text-xl font-bold text-[#0B0B0B] mt-1">Gulberg III Studio</h2>
              <p className="text-xs text-[#2A2A2A] mt-1 leading-relaxed">
                MM Alam Road, Gulberg III, Lahore, Punjab, Pakistan.
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
            <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Find Us on MM Alam Road</h2>
            <p className="text-xs text-[#2A2A2A]">MM Alam Road, Gulberg III, Lahore • Open 9:00 AM to 1:00 AM daily</p>
          </div>

          <a
            href="https://maps.google.com/?q=MM+Alam+Road+Gulberg+III+Lahore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider shadow-md transition-all self-start sm:self-auto active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions on Google Maps</span>
          </a>
        </div>

        {/* Embedded Responsive Google Map */}
        <div className="w-full aspect-[21/9] min-h-[300px] rounded-2xl overflow-hidden border border-[#E5DED2] shadow-md relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.331206822295!2d74.3486111!3d31.5097222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045b85a3a41f%3A0x6b447833595ad596!2sM.M.+Alam+Rd%2C+Gulberg+III%2C+Lahore%2C+Punjab!5e0!3m2!1sen!2spk!4v1680000000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lahore Bouquet Location on MM Alam Road Gulberg III Lahore"
            className="w-full h-full"
          />
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
