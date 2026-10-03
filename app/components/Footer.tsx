"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";

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
    <footer className="mt-20 bg-[#0B0B0E] border-t border-white/10 text-white/70 py-16 px-4 sm:px-6 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Newsletter & Brand Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/10 pb-12 items-center">
          <div className="lg:col-span-6 space-y-2">
            <Logo variant="footer" />
            <p className="text-white/60 text-xs max-w-md leading-relaxed">
              Lahore Bouquet is a flower shop on MM Alam Road, Gulberg III. We tie bouquets by hand, decorate bridal rooms and wedding cars, and deliver to homes, offices and hospitals across Lahore. Send us a WhatsApp message and a florist will reply, not a bot.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <span className="text-xs font-semibold text-white block leading-relaxed">
                Get Rs. 500 off your first order. Join the Lahore Bouquet Club and we will send you seasonal flower news and occasion reminders, once or twice a month. No spam.
              </span>
              <div className="flex gap-2">
                <input 
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-[#17171E] border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:border-[#E11D48] outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-bold text-xs shadow-md shadow-[#E11D48]/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              {newsletterSubscribed && (
                <span className="text-[11px] text-[#25D366] block">✓ Thank you! Check your inbox for your PKR 500 voucher.</span>
              )}
            </form>
          </div>
        </div>

        {/* 5-Column Navigation Links Grid (All flowerbouquet.pk & LahoreBlooms pages) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Column 1: Flower Collections */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Flower Collections</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/bouquets" className="hover:text-[#E11D48] transition-colors">All Bouquets</Link></li>
              <li><Link href="/roses" className="hover:text-[#E11D48] transition-colors">Roses Collection</Link></li>
              <li><Link href="/roses/red-roses" className="hover:text-[#E11D48] transition-colors">Imported Red Roses</Link></li>
              <li><Link href="/roses/white-roses" className="hover:text-[#E11D48] transition-colors">Pure White Roses</Link></li>
              <li><Link href="/sunflowers" className="hover:text-[#E11D48] transition-colors">Sunflowers & Lilies</Link></li>
              <li><Link href="/crochet-bouquets" className="hover:text-[#E11D48] transition-colors">Handmade Crochet Bouquets</Link></li>
              <li><Link href="/dried-flowers" className="hover:text-[#E11D48] transition-colors">Dried Everlasting Flora</Link></li>
            </ul>
          </div>

          {/* Column 2: Event & Décor Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Events & Décor</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/prices" className="hover:text-[#E11D48] text-white/90 font-medium transition-colors">★ Lahore Price Guide 2026</Link></li>
              <li><Link href="/wedding-decor" className="hover:text-[#E11D48] transition-colors">Wedding Room & Car Décor</Link></li>
              <li><Link href="/collections/fresh-flower-gajray" className="hover:text-[#E11D48] transition-colors">Fresh Motia & Rose Gajray</Link></li>
              <li><Link href="/money-bouquets" className="hover:text-[#E11D48] transition-colors">Custom Money Bouquets</Link></li>
              <li><Link href="/gifts-and-cakes" className="hover:text-[#E11D48] transition-colors">Gifts, Cakes & Chocolates</Link></li>
              <li><Link href="/corporate" className="hover:text-[#E11D48] transition-colors">Corporate Office Flowers</Link></li>
              <li><Link href="/blog" className="hover:text-[#E11D48] transition-colors">Floral Care Guides & Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Occasion Celebrations */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Occasions</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/birthday-surprises" className="hover:text-[#E11D48] transition-colors">Birthday Surprises</Link></li>
              <li><Link href="/occasions/anniversary" className="hover:text-[#E11D48] transition-colors">Wedding Anniversaries</Link></li>
              <li><Link href="/occasions/love-and-romance" className="hover:text-[#E11D48] transition-colors">Love & Romance</Link></li>
              <li><Link href="/occasions/barat-and-walima" className="hover:text-[#E11D48] transition-colors">Barat & Walima</Link></li>
              <li><Link href="/occasions/eid-gifts" className="hover:text-[#E11D48] transition-colors">Eid Mubarak Gifts</Link></li>
              <li><Link href="/occasions/congratulations" className="hover:text-[#E11D48] transition-colors">Congratulations & Graduations</Link></li>
              <li><Link href="/occasions/get-well-and-sorry" className="hover:text-[#E11D48] transition-colors">Get Well Soon & Apologies</Link></li>
            </ul>
          </div>

          {/* Column 4: Express Lahore Delivery Zones */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Lahore Delivery Zones</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/delivery-areas/dha" className="hover:text-[#E11D48] transition-colors">DHA Lahore (Phases 1–9)</Link></li>
              <li><Link href="/delivery-areas/gulberg" className="hover:text-[#E11D48] transition-colors">Gulberg I, II & III</Link></li>
              <li><Link href="/delivery-areas/bahria-town" className="hover:text-[#E11D48] transition-colors">Bahria Town & Lake City</Link></li>
              <li><Link href="/delivery-areas/model-town" className="hover:text-[#E11D48] transition-colors">Model Town & Garden Town</Link></li>
              <li><Link href="/delivery-areas/johar-town" className="hover:text-[#E11D48] transition-colors">Johar Town & Faisal Town</Link></li>
              <li><Link href="/delivery-areas/cantt" className="hover:text-[#E11D48] transition-colors">Cantt & Cavalry Ground</Link></li>
              <li><Link href="/delivery-areas/askari" className="hover:text-[#E11D48] transition-colors">Askari Housing (1 to 11)</Link></li>
              <li><Link href="/delivery-areas/wapda-town" className="hover:text-[#E11D48] transition-colors">Wapda Town & Township</Link></li>
            </ul>
          </div>

          {/* Column 5: Customer Care & Helpline */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Florist Support</h4>
            <div className="space-y-2.5 text-white/70">
              <a 
                href="https://wa.me/923001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 0300-1234567</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E11D48]" />
                <span>Helpline: +92 42 35789000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E11D48]" />
                <span>Mon–Sun: 9:00 AM – 1:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E11D48]" />
                <span>MM Alam Road, Gulberg III, Lahore</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Guarantees, Policy Links & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[11px]">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 Lahore Bouquet (Pvt) Ltd. All Rights Reserved.</span>
            <Link href="/about" className="hover:text-white transition-colors underline">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors underline">Contact</Link>
            <Link href="/policies" className="hover:text-white transition-colors underline">Store Policies</Link>
            <Link href="/price-guide" className="hover:text-white transition-colors underline">Price Guide</Link>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <span>💵 Cash on Delivery</span>
            <span>🏦 Bank Transfer</span>
            <span>📱 JazzCash / EasyPaisa</span>
            <span>🔒 100% Encrypted</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
