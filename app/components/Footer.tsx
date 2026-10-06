"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Clock, MapPin, Send, Mail } from "lucide-react";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  BUSINESS_HOURS_DISPLAY,
  BUSINESS_ADDRESS_DISPLAY,
  siteWhatsappLink,
} from "@/lib/site";

export default function Footer() {
  const { showToast } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      showToast("Thank you for subscribing! PKR 500 voucher sent to your email.");
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="mt-20 bg-[#0B0B0B] border-t border-[rgba(198,161,91,0.25)] text-[#BDBDBD] py-16 px-4 sm:px-6 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Newsletter & Brand Strip (Section 14: #0B0B0B bg, #FFFFFF heading, #F8F3EA description, #FFFFFF input, #8B1E2D subscribe hover #C6A15B) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[rgba(198,161,91,0.20)] pb-12 items-center">
          <div className="lg:col-span-6 space-y-3">
            <Logo variant="footer" />
            <p className="text-[#BDBDBD] text-xs max-w-md leading-relaxed">
              Lahore Bouquet is a luxury floral atelier in Lahore. We hand-tie fresh imported roses, arrange celebratory money bouquets, and hand-deliver across all sectors of Lahore. Direct florist assistance on WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <span className="text-xs font-semibold text-white block leading-relaxed">
                Subscribe to the Lahore Bouquet Club for seasonal bloom updates and occasion reminders.
              </span>
              <div className="flex gap-2">
                <input 
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  aria-label="Your email address for floral updates"
                  className="flex-1 px-4 py-2.5 bg-white border border-[#E5DED2] rounded-xl text-xs text-[#0B0B0B] placeholder-[#636363] focus:border-[#C6A15B] outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95"
                >
                  Subscribe
                </button>
              </div>
              {newsletterSubscribed && (
                <span className="text-[11px] text-[#C6A15B] block font-medium">✓ Thank you! Check your inbox for your PKR 500 voucher.</span>
              )}
            </form>
          </div>
        </div>

        {/* 5-Column Navigation Links Grid (Section 17: #FFFFFF headings, #BDBDBD links, hover #C6A15B) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Column 1: Flower Collections */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wide text-sm">Flower Collections</h3>
            <ul className="space-y-2 text-[#BDBDBD]">
              <li><Link href="/bouquets" className="hover:text-[#C6A15B] transition-colors">All Bouquets</Link></li>
              <li><Link href="/roses" className="hover:text-[#C6A15B] transition-colors">Roses Collection</Link></li>
              <li><Link href="/roses/red-roses" className="hover:text-[#C6A15B] transition-colors">Imported Red Roses</Link></li>
              <li><Link href="/tulip-bouquet-lahore" className="hover:text-[#C6A15B] transition-colors">Imported Dutch Tulips</Link></li>
              <li><Link href="/sunflower-bouquet-lahore" className="hover:text-[#C6A15B] transition-colors">Sunflower Bouquets</Link></li>
              <li><Link href="/chocolate-bouquets-lahore" className="hover:text-[#C6A15B] transition-colors">Chocolate Bouquets</Link></li>
              <li><Link href="/crochet-bouquets" className="hover:text-[#C6A15B] transition-colors">Handmade Crochet Bouquets</Link></li>
              <li><Link href="/dried-flowers" className="hover:text-[#C6A15B] transition-colors">Dried Everlasting Flora</Link></li>
              <li><Link href="/collections/scents-and-perfumes" className="hover:text-[#C6A15B] text-white font-medium transition-colors">✦ Scents & Perfume Gifts</Link></li>
            </ul>
          </div>

          {/* Column 2: Event & Décor Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wide text-sm">Events & Décor</h3>
            <ul className="space-y-2 text-[#BDBDBD]">
              <li><Link href="/prices" className="hover:text-[#C6A15B] text-white font-medium transition-colors">★ Lahore Price Guide 2026</Link></li>
              <li><Link href="/flower-delivery-in-lahore" className="hover:text-[#C6A15B] transition-colors">Express Same-Day Delivery</Link></li>
              <li><Link href="/send-flowers-to-lahore-from-abroad" className="hover:text-[#C6A15B] transition-colors">Send from Abroad (UK, USA, UAE)</Link></li>
              <li><Link href="/birthday-decoration-lahore" className="hover:text-[#C6A15B] transition-colors">Birthday Decoration at Home</Link></li>
              <li><Link href="/lily-bouquet-lahore" className="hover:text-[#C6A15B] transition-colors">Fresh Lily Bouquets</Link></li>
              <li><Link href="/wedding-decor" className="hover:text-[#C6A15B] transition-colors">Wedding Room & Car Décor</Link></li>
              <li><Link href="/collections/fresh-flower-gajray" className="hover:text-[#C6A15B] transition-colors">Fresh Motia & Rose Gajray</Link></li>
              <li><Link href="/money-bouquets" className="hover:text-[#C6A15B] transition-colors">Custom Money Bouquets</Link></li>
              <li><Link href="/gifts-and-cakes" className="hover:text-[#C6A15B] transition-colors">Gifts, Cakes & Chocolates</Link></li>
              <li><Link href="/corporate" className="hover:text-[#C6A15B] transition-colors">Corporate Office Flowers</Link></li>
              <li><Link href="/teddy-bears-lahore" className="hover:text-[#C6A15B] transition-colors">Teddy Bears in Lahore</Link></li>
              <li><Link href="/wedding-room-decoration-lahore" className="hover:text-[#C6A15B] transition-colors">Wedding Room Decoration</Link></li>
              <li><Link href="/helium-balloons-lahore" className="hover:text-[#C6A15B] transition-colors">Helium Balloons</Link></li>
              <li><Link href="/garlands-lahore" className="hover:text-[#C6A15B] transition-colors">Fresh Flower Garlands</Link></li>
              <li><Link href="/blog" className="hover:text-[#C6A15B] transition-colors">Floral Care Guides & Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Occasion Celebrations */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wide text-sm">Occasions</h3>
            <ul className="space-y-2 text-[#BDBDBD]">
              <li><Link href="/birthday-surprises" className="hover:text-[#C6A15B] transition-colors">Birthday Surprises</Link></li>
              <li><Link href="/occasions/anniversary" className="hover:text-[#C6A15B] transition-colors">Wedding Anniversaries</Link></li>
              <li><Link href="/occasions/love-and-romance" className="hover:text-[#C6A15B] transition-colors">Love & Romance</Link></li>
              <li><Link href="/occasions/barat-and-walima" className="hover:text-[#C6A15B] transition-colors">Barat & Walima</Link></li>
              <li><Link href="/occasions/eid-gifts" className="hover:text-[#C6A15B] transition-colors">Eid Mubarak Gifts</Link></li>
              <li><Link href="/occasions/congratulations" className="hover:text-[#C6A15B] transition-colors">Congratulations & Graduations</Link></li>
              <li><Link href="/occasions/get-well-and-sorry" className="hover:text-[#C6A15B] transition-colors">Get Well Soon & Apologies</Link></li>
            </ul>
          </div>

          {/* Column 4: Express Lahore Delivery Zones */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wide text-sm">Lahore Delivery Zones</h3>
            <ul className="space-y-2 text-[#BDBDBD]">
              <li><Link href="/delivery-areas/dha" className="hover:text-[#C6A15B] transition-colors">DHA Lahore (Phases 1–9)</Link></li>
              <li><Link href="/delivery-areas/gulberg" className="hover:text-[#C6A15B] transition-colors">Gulberg I, II & III</Link></li>
              <li><Link href="/delivery-areas/bahria-town" className="hover:text-[#C6A15B] transition-colors">Bahria Town & Lake City</Link></li>
              <li><Link href="/delivery-areas/model-town" className="hover:text-[#C6A15B] transition-colors">Model Town & Garden Town</Link></li>
              <li><Link href="/delivery-areas/johar-town" className="hover:text-[#C6A15B] transition-colors">Johar Town & Faisal Town</Link></li>
              <li><Link href="/delivery-areas/cantt" className="hover:text-[#C6A15B] transition-colors">Cantt & Cavalry Ground</Link></li>
              <li><Link href="/delivery-areas/askari" className="hover:text-[#C6A15B] transition-colors">Askari Housing (1 to 11)</Link></li>
              <li><Link href="/delivery-areas/wapda-town" className="hover:text-[#C6A15B] transition-colors">Wapda Town & Township</Link></li>
              <li><Link href="/delivery-areas/lake-city" className="hover:text-[#C6A15B] transition-colors">Lake City Lahore</Link></li>
              <li><Link href="/delivery-areas/valencia-town" className="hover:text-[#C6A15B] transition-colors">Valencia Town</Link></li>
              <li><Link href="/delivery-areas/eme-society" className="hover:text-[#C6A15B] transition-colors">EME Society</Link></li>
              <li><Link href="/delivery-areas/nfc" className="hover:text-[#C6A15B] transition-colors">NFC Society</Link></li>
              <li><Link href="/delivery-areas/tariq-gardens" className="hover:text-[#C6A15B] transition-colors">Tariq Gardens</Link></li>
              <li><Link href="/delivery-areas/dha-rahbar" className="hover:text-[#C6A15B] transition-colors">DHA Rahbar</Link></li>
              <li><Link href="/delivery-areas/al-kabir-town" className="hover:text-[#C6A15B] transition-colors">Al Kabir Town</Link></li>
              <li><Link href="/delivery-areas/bahria-orchard" className="hover:text-[#C6A15B] transition-colors">Bahria Orchard</Link></li>
              <li><Link href="/delivery-areas/raiwind-road" className="hover:text-[#C6A15B] transition-colors">Raiwind Road</Link></li>
              <li><Link href="/delivery-areas/thokar-niaz-baig" className="hover:text-[#C6A15B] transition-colors">Thokar Niaz Baig</Link></li>
              <li><Link href="/delivery-areas/iqbal-town" className="hover:text-[#C6A15B] transition-colors">Iqbal Town</Link></li>
              <li><Link href="/delivery-areas/faisal-town" className="hover:text-[#C6A15B] transition-colors">Faisal Town</Link></li>
            </ul>
          </div>

          {/* Column 5: Customer Care & Helpline */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white tracking-wide text-sm">Florist Support</h3>
            <div className="space-y-2.5 text-[#BDBDBD]">
              <a 
                href={siteWhatsappLink("Hi Lahore Bouquet! I have a question about flowers.")}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C6A15B] hover:text-white transition-colors font-bold"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {CONTACT_PHONE.local}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <span>Direct Helpline: {CONTACT_PHONE.intl}</span>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C6A15B]" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C6A15B]" />
                <span>{BUSINESS_HOURS_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B]" />
                <span>{BUSINESS_ADDRESS_DISPLAY}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Guarantees, Policy Links & Copyright (WCAG AAA Compliant on #0B0B0B) */}
        <div className="pt-8 border-t border-[rgba(198,161,91,0.20)] flex flex-col md:flex-row items-center justify-between gap-4 text-[#B0B0B0] text-[11px]">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 Lahore Bouquet (Pvt) Ltd. All Rights Reserved.</span>
            <Link href="/about" className="hover:text-[#C6A15B] transition-colors underline">About Us</Link>
            <Link href="/contact" className="hover:text-[#C6A15B] transition-colors underline">Contact</Link>
            <Link href="/track-order" className="hover:text-[#C6A15B] transition-colors underline">Track Order</Link>
            <Link href="/policies" className="hover:text-[#C6A15B] transition-colors underline">Store Policies</Link>
            <Link href="/prices" className="hover:text-[#C6A15B] transition-colors underline">Price Guide</Link>
          </div>

          <div className="flex items-center gap-4 text-[#BDBDBD]">
            <span>💵 Cash on Delivery</span>
            <span>🏦 Bank Transfer</span>
            <span>📱 JazzCash / EasyPaisa</span>
            <span className="text-[#C6A15B]">🔒 100% Encrypted</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
