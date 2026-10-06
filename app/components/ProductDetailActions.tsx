"use client";

import React, { useState } from "react";
import { Product, LAHORE_AREAS, CARD_OCCASIONS } from "../data/products";
import { useCart, CartItemCustomization } from "../context/CartContext";
import {
  getTodayISO,
  formatDeliveryDate,
  isSlotAvailableOnDate,
  DELIVERY_SLOTS,
} from "@/lib/delivery";
import { CONTACT_PHONE } from "@/lib/site";
import DeliverySchedulePicker from "./DeliverySchedulePicker";
import { 
  ShoppingBag, 
  MessageCircle, 
  Heart, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Gift, 
  Check, 
  Minus, 
  Plus, 
  Sparkles,
  Phone
} from "lucide-react";

export default function ProductDetailActions({ product }: { product: Product }) {
  const { addToCart, directOrderNow, wishlist, toggleWishlist, showToast, firstAvailableSlot } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState(getTodayISO());
  const [selectedSlot, setSelectedSlot] = useState(() => firstAvailableSlot(getTodayISO()));
  const [selectedArea, setSelectedArea] = useState(LAHORE_AREAS[0]);
  const [cardOccasion, setCardOccasion] = useState(CARD_OCCASIONS[0]);
  const [recipientName, setRecipientName] = useState("");
  const [cardMessage, setCardMessage] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);

  const isWishlisted = wishlist.includes(product.id);
  const totalPrice = product.price * quantity;

  const buildCustomization = (): CartItemCustomization => ({
    deliveryDate: selectedDate,
    deliverySlot: selectedSlot,
    area: selectedArea,
    cardOccasion,
    recipientName: recipientName.trim(),
    cardMessage: cardMessage.trim(),
  });

  const handleAddToCart = () => {
    addToCart(product, quantity, undefined, buildCustomization());
  };

  const handleInstantWhatsAppOrder = () => {
    setIsOrdering(true);
    const selectedSlotObj = DELIVERY_SLOTS.find(s => s.id === selectedSlot) || DELIVERY_SLOTS[1];
    
    let msg = `🌸 *New Order Request - Lahore Bouquet*\n\n`;
    msg += `• *Bouquet:* ${product.title}\n`;
    msg += `• *Quantity:* ${quantity}\n`;
    msg += `• *Price:* Rs. ${totalPrice.toLocaleString()} PKR\n`;
    msg += `• *Delivery Area:* ${selectedArea}\n`;
    msg += `• *Delivery Date:* ${formatDeliveryDate(selectedDate)}\n`;
    msg += `• *Preferred Slot:* ${selectedSlotObj.label} (${selectedSlotObj.time})\n`;
    if (recipientName.trim()) {
      msg += `• *Recipient:* ${recipientName.trim()}\n`;
    }
    if (cardMessage.trim()) {
      msg += `• *Greeting Card:* "${cardMessage.trim()}" (${cardOccasion})\n`;
    }
    msg += `\nPlease confirm availability and payment details. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CONTACT_PHONE.whatsapp}?text=${encoded}`, "_blank");
    showToast("Opening WhatsApp with your order details...");
    setTimeout(() => setIsOrdering(false), 1000);
  };

  const handleDirectCheckout = () => {
    directOrderNow(product, undefined, buildCustomization());
  };

  return (
    <div className="space-y-6 text-[#2A2A2A]">
      {/* Lahore Area & Delivery Schedule Selection */}
      <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3.5 text-xs shadow-xs">
        <div className="flex items-center justify-between">
          <span className="font-semibold flex items-center gap-1.5 text-[#0B0B0B]">
            <Truck className="w-4 h-4 text-[#8B1E2D]" />
            Express Lahore Delivery
          </span>
          <span className="text-[11px] text-[#8B1E2D] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E2D] animate-pulse" />
            Same-day Available
          </span>
        </div>

        {/* Lahore Area Selector */}
        <div className="space-y-1">
          <label className="text-[#2A2A2A] font-medium text-[11px]">Select Lahore Destination:</label>
          <select 
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-xl text-[#0B0B0B] outline-none"
          >
            {LAHORE_AREAS.map((area) => (
              <option key={area} value={area} className="bg-white text-[#0B0B0B]">
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Date + Time Slots (with Lahore cutoff logic) */}
        <DeliverySchedulePicker
          date={selectedDate}
          slotId={selectedSlot}
          onDateChange={setSelectedDate}
          onSlotChange={setSelectedSlot}
          compact
        />
      </div>

      {/* Free Handwritten Greeting Card Customization */}
      <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3 text-xs shadow-xs">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#0B0B0B] flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-[#8B1E2D]" />
            Free Handwritten Greeting Card
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] font-bold uppercase">
            COMPLIMENTARY
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <select
            value={cardOccasion}
            onChange={(e) => setCardOccasion(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-xl text-[#0B0B0B] text-xs outline-none"
          >
            {CARD_OCCASIONS.map((occ) => (
              <option key={occ} value={occ} className="bg-white text-[#0B0B0B]">
                {occ}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Recipient's Name (Optional)"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-xl text-[#0B0B0B] text-xs outline-none placeholder-[#636363]"
          />
        </div>

        <textarea
          rows={2}
          value={cardMessage}
          onChange={(e) => setCardMessage(e.target.value)}
          placeholder="Write your heartfelt message here (our calligrapher will handwrite this inside an ivory wax-sealed envelope)..."
          className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-xl text-[#0B0B0B] text-xs outline-none placeholder-[#636363] resize-none"
        />
      </div>

      {/* Quantity Stepper & Price Calculation */}
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#E5DED2] shadow-xs">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#2A2A2A] font-medium">Quantity:</span>
          <div className="flex items-center border border-[#E5DED2] rounded-full overflow-hidden bg-white">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1.5 px-2.5 text-[#2A2A2A] hover:text-[#8B1E2D] hover:bg-[#F8F3EA] transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-xs font-bold text-[#0B0B0B]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 px-2.5 text-[#2A2A2A] hover:text-[#8B1E2D] hover:bg-[#F8F3EA] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-[#636363]">Total Amount</div>
          <div className="text-xl font-bold text-[#8B1E2D]">
            Rs. {totalPrice.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Primary Action Buttons (Section 18: Primary #8B1E2D hover #C6A15B text #0B0B0B, Secondary outline #0B0B0B) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <button
          onClick={handleAddToCart}
          className="py-3.5 px-4 rounded-full bg-white hover:bg-[#0B0B0B] border border-[#0B0B0B] text-[#0B0B0B] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <ShoppingBag className="w-4 h-4 text-[#8B1E2D]" />
          Add To Bag
        </button>

        <button
          onClick={handleDirectCheckout}
          className="py-3.5 px-4 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Buy Now (Direct Checkout)
        </button>
      </div>

      {/* WhatsApp Quick Order Button */}
      <button
        onClick={handleInstantWhatsAppOrder}
        disabled={isOrdering}
        className="w-full py-3.5 px-4 rounded-full bg-[#0B0B0B] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] border border-[#C6A15B]/50 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        Order Instant Via WhatsApp ({CONTACT_PHONE.local})
      </button>

      {/* Wishlist and Trust Strip */}
      <div className="flex items-center justify-between pt-2 border-t border-[#E5DED2] text-xs text-[#2A2A2A]">
        <button
          onClick={(e) => toggleWishlist(product.id, e)}
          className="flex items-center gap-1.5 hover:text-[#8B1E2D] transition-colors cursor-pointer"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#8B1E2D] text-[#8B1E2D]" : "text-[#0B0B0B]"}`} />
          <span>{isWishlisted ? "Saved in Wishlist" : "Save to Wishlist"}</span>
        </button>

        <div className="flex items-center gap-1.5 text-[#555555]">
          <ShieldCheck className="w-4 h-4 text-[#8B1E2D]" />
          <span>WhatsApp photo proof before dispatch</span>
        </div>
      </div>
    </div>
  );
}
