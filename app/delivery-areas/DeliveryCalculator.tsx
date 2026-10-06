"use client";

import { useState } from "react";
import { Calculator, Clock, Truck, MoonStar, MessageCircle } from "lucide-react";

export interface DeliveryZone {
  area: string;
  fee: number; // 0 = free
  time: string;
  midnight: boolean;
}

export const DELIVERY_FEES: DeliveryZone[] = [
  { area: "Gulberg (I, II, III)", fee: 0, time: "30 to 90 mins", midnight: true },
  { area: "Model Town / Garden Town", fee: 0, time: "1.5 to 2.5 hours", midnight: true },
  { area: "DHA (Phases 1–9)", fee: 250, time: "2 to 3 hours", midnight: true },
  { area: "Johar Town / Faisal Town", fee: 250, time: "2 to 3 hours", midnight: true },
  { area: "Cantt / Cavalry Ground", fee: 250, time: "2 to 2.5 hours", midnight: true },
  { area: "Askari (1–11)", fee: 300, time: "2 to 3 hours", midnight: true },
  { area: "Wapda Town / Township", fee: 300, time: "2.5 to 3.5 hours", midnight: true },
  { area: "Bahria Town / Lake City", fee: 400, time: "2.5 to 4 hours", midnight: true },
  { area: "Valencia / NFC / Tariq Gardens", fee: 400, time: "3 to 4 hours", midnight: false },
  { area: "Raiwind Road / Bahria Orchard", fee: 500, time: "3 to 5 hours", midnight: false },
];

export default function DeliveryCalculator() {
  const [selected, setSelected] = useState<string>(DELIVERY_FEES[0].area);
  const [isMidnight, setIsMidnight] = useState(false);

  const zone = DELIVERY_FEES.find((z) => z.area === selected) ?? DELIVERY_FEES[0];
  const midnightSurcharge = 500;
  const totalFee = zone.fee + (isMidnight && zone.midnight ? midnightSurcharge : 0);

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.35)] shadow-sm space-y-5">
      <div className="flex items-center gap-2">
        <Calculator className="w-5 h-5 text-[#8B1E2D]" />
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">
          Delivery Fee Calculator
        </h2>
      </div>
      <p className="text-xs text-[#2A2A2A] leading-relaxed">
        Select your area to see the exact delivery fee and time <em>before</em> you order. No hidden charges — what you see here is what you pay.
      </p>

      <div className="space-y-2">
        <label htmlFor="delivery-area" className="text-xs font-semibold text-[#0B0B0B]">
          Your area in Lahore
        </label>
        <select
          id="delivery-area"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full text-sm rounded-xl border border-[rgba(198,161,91,0.35)] bg-[#F8F3EA] px-4 py-3 text-[#0B0B0B] focus:outline-none focus:ring-2 focus:ring-[#8B1E2D]"
        >
          {DELIVERY_FEES.map((z) => (
            <option key={z.area} value={z.area}>
              {z.area}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-center gap-3 text-xs text-[#2A2A2A] cursor-pointer select-none">
        <input
          type="checkbox"
          checked={isMidnight}
          onChange={(e) => setIsMidnight(e.target.checked)}
          disabled={!zone.midnight}
          className="w-4 h-4 accent-[#8B1E2D]"
        />
        <span className="flex items-center gap-1.5">
          <MoonStar className="w-4 h-4 text-[#8B1E2D]" />
          Midnight delivery (11:30 PM – 12:15 AM, +Rs. {midnightSurcharge})
          {!zone.midnight && <span className="text-[#999]">— not available in this area</span>}
        </span>
      </label>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#777]">
            <Truck className="w-3.5 h-3.5" /> Fee
          </div>
          <div className="font-playfair text-2xl font-bold text-[#8B1E2D] mt-1">
            {totalFee === 0 ? "FREE" : `Rs. ${totalFee}`}
          </div>
        </div>
        <div className="rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#777]">
            <Clock className="w-3.5 h-3.5" /> Time
          </div>
          <div className="font-playfair text-2xl font-bold text-[#0B0B0B] mt-1">
            {isMidnight && zone.midnight ? "Midnight" : zone.time}
          </div>
        </div>
      </div>

      <a
        href={`https://wa.me/923104225974?text=${encodeURIComponent(`Hello Lahore Bouquet! I want flower delivery to ${zone.area}${isMidnight && zone.midnight ? " (midnight slot)" : ""}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B1E2D] hover:text-[#C6A15B] transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        Order to {zone.area} on WhatsApp →
      </a>
    </div>
  );
}
