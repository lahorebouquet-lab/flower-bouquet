"use client";

import React from "react";
import {
  DELIVERY_SLOTS,
  getTodayISO,
  getMaxDateISO,
  formatDeliveryDate,
  isSlotAvailableOnDate,
  getSlotCutoffLabel,
} from "@/lib/delivery";

interface DeliverySchedulePickerProps {
  date: string;
  slotId: string;
  onDateChange: (iso: string) => void;
  onSlotChange: (id: string) => void;
  compact?: boolean;
  highlightRequired?: boolean;
}

/**
 * Delivery date picker + time slot selector with Lahore cutoff logic.
 * Required date field (today → +30 days, past disabled). Slots past their
 * 2-hour cutoff are disabled for today with "Not available today".
 */
export default function DeliverySchedulePicker({
  date,
  slotId,
  onDateChange,
  onSlotChange,
  compact = false,
  highlightRequired = false,
}: DeliverySchedulePickerProps) {
  const today = getTodayISO();
  const maxDate = getMaxDateISO();

  const handleDateChange = (iso: string) => {
    if (!iso || iso < today || iso > maxDate) return;
    onDateChange(iso);
    // Auto-switch to first available slot if current one isn't valid on new date
    if (!isSlotAvailableOnDate(slotId, iso)) {
      const first = DELIVERY_SLOTS.find((s) => isSlotAvailableOnDate(s.id, iso));
      if (first) onSlotChange(first.id);
    }
  };

  const allDisabledToday =
    date === today && DELIVERY_SLOTS.every((s) => !isSlotAvailableOnDate(s.id, date));

  return (
    <div className="space-y-3">
      {/* Delivery Date (required) */}
      <div className="space-y-1">
        <label className={`text-[#2A2A2A] font-medium ${compact ? "text-[11px]" : "text-xs"}`}>
          Delivery Date <span className="text-[#8B1E2D]">*</span>
        </label>
        <input
          type="date"
          required
          value={date}
          min={today}
          max={maxDate}
          onChange={(e) => handleDateChange(e.target.value)}
          className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-xl text-[#0B0B0B] text-xs outline-none focus:border-[#8B1E2D]"
        />
        <p className="text-[11px] text-[#8B1E2D] font-semibold">
          {formatDeliveryDate(date)}
          {date === today && " (Today — Same-Day Express)"}
        </p>
      </div>

      {/* Time Slots */}
      <div className="space-y-1.5">
        <label className={`text-[#2A2A2A] font-medium ${compact ? "text-[11px]" : "text-xs"}`}>
          Select Delivery Slot <span className="text-[#8B1E2D]">*</span>
        </label>
        {highlightRequired && !slotId && (
          <p className="text-[10px] text-[#8B1E2D] font-semibold">Please choose a delivery slot</p>
        )}
        {allDisabledToday && (
          <p className="text-[11px] text-[#8B1E2D] bg-[#8B1E2D]/10 border border-[#8B1E2D]/30 rounded-xl px-3 py-2">
            Today&apos;s slots are fully booked — please choose tomorrow or a later date.
          </p>
        )}
        <div className="grid grid-cols-2 gap-2">
          {DELIVERY_SLOTS.map((slot) => {
            const available = isSlotAvailableOnDate(slot.id, date);
            const isSelected = slotId === slot.id;
            return (
              <button
                key={slot.id}
                type="button"
                disabled={!available}
                onClick={() => onSlotChange(slot.id)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  !available
                    ? "bg-[#F8F3EA] border-[#E5DED2] text-[#999999] cursor-not-allowed opacity-70"
                    : isSelected
                      ? "bg-[#8B1E2D]/10 border-[#8B1E2D] text-[#0B0B0B] cursor-pointer"
                      : "bg-[#F8F3EA] border-[#E5DED2] text-[#2A2A2A] hover:border-[#C6A15B] cursor-pointer"
                }`}
              >
                <div className="flex items-center gap-1.5 font-medium text-[11px]">
                  <span>{slot.icon}</span>
                  <span className={isSelected && available ? "text-[#8B1E2D] font-bold" : ""}>
                    {slot.label}
                  </span>
                </div>
                <div className="text-[10px] text-[#555555] mt-0.5">{slot.time}</div>
                {!available && (
                  <div className="text-[10px] text-[#8B1E2D] font-semibold mt-0.5">
                    Order by {getSlotCutoffLabel(slot)} for today
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
