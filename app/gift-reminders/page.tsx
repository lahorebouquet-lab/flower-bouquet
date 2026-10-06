import type { Metadata } from "next";
import { SITE_URL } from "@/lib/business";
import GiftReminderForm from "./GiftReminderForm";

export const metadata: Metadata = {
  title: { absolute: "Gift Reminders | Never Miss a Birthday | Lahore Bouquet" },
  description:
    "Save birthdays & anniversaries — we'll remind you on WhatsApp 2 days before, with bouquet suggestions. Free gift reminder service in Lahore.",
  alternates: { canonical: `${SITE_URL}/gift-reminders` },
  openGraph: {
    title: "Gift Reminders | Never Miss a Birthday | Lahore Bouquet",
    description:
      "Save birthdays & anniversaries — we'll remind you on WhatsApp 2 days before, with bouquet suggestions. Free service.",
    url: `${SITE_URL}/gift-reminders`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Gift Reminders" }],
  },
};

export default function GiftRemindersPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#2A2A2A]">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold tracking-widest uppercase mb-4">
            Free Service
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
            Never Miss a Birthday Again
          </h1>
          <p className="text-sm text-[#2A2A2A] mt-3 leading-relaxed max-w-lg mx-auto">
            Save your loved ones&apos; birthdays & anniversaries. We&apos;ll send you a{" "}
            <strong>WhatsApp reminder 2 days before</strong> — with handpicked bouquet
            suggestions, so your gift always arrives on time.
          </p>
        </div>

        <GiftReminderForm />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          {[
            { t: "Save the date", d: "Add birthdays & anniversaries in 30 seconds" },
            { t: "Get reminded", d: "WhatsApp reminder 2 days before the occasion" },
            { t: "Order in 1 tap", d: "Reply to order — same-day delivery in Lahore" },
          ].map((s) => (
            <div key={s.t} className="bg-white rounded-2xl border border-[#E5DED2] p-4">
              <div className="font-bold text-[#0B0B0B] text-sm">{s.t}</div>
              <div className="text-[11px] text-[#636363] mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
