"use client";

import React, { useState } from "react";
import { Product, LAHORE_AREAS, TIME_SLOTS, CARD_OCCASIONS } from "../data/products";
import { useCart } from "../context/CartContext";
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
  const { addToCart, wishlist, toggleWishlist, setIsCartOpen, setCheckoutStep, showToast } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[1].id);
  const [selectedArea, setSelectedArea] = useState(LAHORE_AREAS[0]);
  const [cardOccasion, setCardOccasion] = useState(CARD_OCCASIONS[0]);
  const [cardMessage, setCardMessage] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);

  const isWishlisted = wishlist.includes(product.id);
  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleInstantWhatsAppOrder = () => {
    setIsOrdering(true);
    const selectedSlotObj = TIME_SLOTS.find(s => s.id === selectedSlot) || TIME_SLOTS[1];
    
    let msg = `🌸 *New Order Request - Lahore Bouquet*\n\n`;
    msg += `• *Bouquet:* ${product.title}\n`;
    msg += `• *Quantity:* ${quantity}\n`;
    msg += `• *Price:* Rs. ${totalPrice.toLocaleString()} PKR\n`;
    msg += `• *Delivery Area:* ${selectedArea}\n`;
    msg += `• *Preferred Slot:* ${selectedSlotObj.label} (${selectedSlotObj.time})\n`;
    if (cardMessage.trim()) {
      msg += `• *Greeting Card:* "${cardMessage.trim()}" (${cardOccasion})\n`;
    }
    msg += `\nPlease confirm availability and payment details. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/923001234567?text=${encoded}`, "_blank");
    showToast("Opening WhatsApp with your order details...");
    setTimeout(() => setIsOrdering(false), 1000);
  };

  const handleDirectCheckout = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
    setCheckoutStep(2); // Go directly to Delivery Details
  };

  return (
    <div className="space-y-6">
      {/* Lahore Area & Delivery Slot Selection */}
      <div className="p-4 rounded-xl bg-[#17171E] border border-white/10 space-y-3.5 text-xs">
        <div className="flex items-center justify-between text-white/80">
          <span className="font-semibold flex items-center gap-1.5 text-white">
            <Truck className="w-4 h-4 text-[#E11D48]" />
            Express Lahore Delivery
          </span>
          <span className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Same-day Available
          </span>
        </div>

        {/* Lahore Area Selector */}
        <div className="space-y-1">
          <label className="text-white/60 text-[11px]">Select Lahore Destination:</label>
          <select 
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full px-3 py-2 bg-[#202028] border border-white/10 rounded-lg text-white focus:border-[#E11D48] outline-none"
          >
            {LAHORE_AREAS.map((area) => (
              <option key={area} value={area} className="bg-[#15151A] text-white">
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Time Slot Buttons */}
        <div className="space-y-1.5">
          <label className="text-white/60 text-[11px]">Select Delivery Slot:</label>
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-[#E11D48]/15 border-[#E11D48] text-white" 
                      : "bg-[#202028] border-white/10 text-white/70 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-medium text-[11px]">
                    <span>{slot.icon}</span>
                    <span className={isSelected ? "text-[#F43F5E] font-bold" : ""}>{slot.label}</span>
                  </div>
                  <div className="text-[10px] text-white/50 mt-0.5">{slot.time}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Free Handwritten Greeting Card Customization */}
      <div className="p-4 rounded-xl bg-[#17171E] border border-white/10 space-y-3 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-[#E11D48]" />
            Free Handwritten Greeting Card
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E11D48]/15 text-[#F43F5E] font-bold border border-[#E11D48]/30">
            COMPLIMENTARY
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <select
            value={cardOccasion}
            onChange={(e) => setCardOccasion(e.target.value)}
            className="w-full px-3 py-2 bg-[#202028] border border-white/10 rounded-lg text-white text-xs outline-none focus:border-[#E11D48]"
          >
            {CARD_OCCASIONS.map((occ) => (
              <option key={occ} value={occ} className="bg-[#15151A] text-white">
                {occ}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Recipient's Name (Optional)"
            className="w-full px-3 py-2 bg-[#202028] border border-white/10 rounded-lg text-white text-xs outline-none focus:border-[#E11D48] placeholder-white/30"
          />
        </div>

        <textarea
          rows={2}
          value={cardMessage}
          onChange={(e) => setCardMessage(e.target.value)}
          placeholder="Write your heartfelt message here (our calligrapher will handwrite this inside an ivory wax-sealed envelope)..."
          className="w-full px-3 py-2 bg-[#202028] border border-white/10 rounded-lg text-white text-xs outline-none focus:border-[#E11D48] placeholder-white/30 resize-none"
        />
      </div>

      {/* Quantity Stepper & Price Calculation */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-[#17171E] border border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/60">Quantity:</span>
          <div className="flex items-center border border-white/15 rounded-lg overflow-hidden bg-[#202028]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-xs font-bold text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-white/50">Total Amount</div>
          <div className="text-lg font-bold text-[#E11D48]">
            Rs. {totalPrice.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button
          onClick={handleAddToCart}
          className="py-3 px-4 rounded-xl bg-[#202028] hover:bg-[#282834] border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#E11D48]/50 transition-all cursor-pointer shadow-md"
        >
          <ShoppingBag className="w-4 h-4 text-[#E11D48]" />
          Add To Bag
        </button>

        <button
          onClick={handleDirectCheckout}
          className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#E11D48]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          Buy Now (Direct Checkout)
        </button>
      </div>

      {/* WhatsApp Quick Order Button */}
      <button
        onClick={handleInstantWhatsAppOrder}
        disabled={isOrdering}
        className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer hover:scale-[1.01]"
      >
        <MessageCircle className="w-4 h-4" />
        Order Instant Via WhatsApp (0300-1234567)
      </button>

      {/* Wishlist and Trust Strip */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-white/60">
        <button
          onClick={(e) => toggleWishlist(product.id, e)}
          className="flex items-center gap-1.5 hover:text-[#E11D48] transition-colors cursor-pointer"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-[#E11D48] text-[#E11D48]" : ""}`} />
          <span>{isWishlisted ? "Saved in Wishlist" : "Save to Wishlist"}</span>
        </button>

        <div className="flex items-center gap-1.5 text-white/50">
          <ShieldCheck className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp photo proof before dispatch</span>
        </div>
      </div>
    </div>
  );
}
