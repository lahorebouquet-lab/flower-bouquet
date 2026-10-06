"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ShoppingBag, 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Truck, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  MessageCircle,
  Pencil
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { LAHORE_AREAS, TIME_SLOTS, CARD_OCCASIONS } from "../data/products";
import { getDeliveryFee, formatDeliveryDate, DELIVERY_POLICY_LINE } from "@/lib/delivery";
import { normalizePakistaniPhone, CONTACT_PHONE, siteWhatsappLink } from "@/lib/site";
import DeliverySchedulePicker from "./DeliverySchedulePicker";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    checkoutStep,
    setCheckoutStep,
    updateQuantity,
    clearCart,
    cartSubtotal,
    deliveryFee,
    orderTotal,
    totalCartCount,
    senderName,
    setSenderName,
    senderPhone,
    setSenderPhone,
    recipientName,
    setRecipientName,
    recipientPhone,
    setRecipientPhone,
    selectedArea,
    setSelectedArea,
    streetAddress,
    setStreetAddress,
    deliveryDate,
    setDeliveryDate,
    deliveryTimeSlot,
    setDeliveryTimeSlot,
    cardOccasion,
    setCardOccasion,
    cardMessage,
    setCardMessage,
    wantPhotoBeforeDispatch,
    setWantPhotoBeforeDispatch,
    paymentMethod,
    setPaymentMethod,
    placedOrderId,
    handlePlaceOrder,
    generateWhatsAppMessage,
    loadCustomizationIntoCheckout,
  } = useCart();

  // Step 2 validation state
  const [triedContinue, setTriedContinue] = useState(false);

  const recipientPhoneValid = normalizePakistaniPhone(recipientPhone) !== null;
  const senderPhoneValid = normalizePakistaniPhone(senderPhone) !== null;
  const step2Valid =
    recipientName.trim().length > 0 &&
    recipientPhoneValid &&
    selectedArea.length > 0 &&
    streetAddress.trim().length > 0 &&
    senderName.trim().length > 0 &&
    senderPhoneValid;

  const handleStep2Continue = () => {
    setTriedContinue(true);
    if (step2Valid) {
      setTriedContinue(false);
      setCheckoutStep(3);
    }
  };

  const inputCls = (hasError: boolean) =>
    `w-full px-3 py-2 bg-white border rounded-lg text-[#0B0B0B] placeholder-[#636363] outline-none ${
      hasError ? "border-[#8B1E2D] ring-1 ring-[#8B1E2D]/30" : "border-[#E5DED2]"
    }`;

  const errMsg = (show: boolean, text: string) =>
    show ? <p className="text-[11px] text-[#8B1E2D] font-medium mt-1">{text}</p> : null;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
      {/* Drawer Container (Section 16: Clean, trustworthy #F8F3EA background, #0B0B0B header) */}
      <div className="w-full max-w-lg bg-[#F8F3EA] border-l border-[#E5DED2] h-full flex flex-col shadow-2xl animate-fade-in text-[#2A2A2A]">
        
        {/* Drawer Header (Section 1: #0B0B0B background, #FFFFFF text, #C6A15B accent) */}
        <div className="p-4 sm:p-5 bg-[#0B0B0B] border-b border-[#C6A15B]/30 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C6A15B]" />
            <h2 className="font-playfair text-lg font-semibold text-white">
              {checkoutStep === 1 && `Your Bouquet Bag (${totalCartCount})`}
              {checkoutStep === 2 && "Step 2: Delivery & Contact Details"}
              {checkoutStep === 3 && "Step 3: Schedule & Greeting Card"}
              {checkoutStep === 4 && "Step 4: Payment Method"}
              {checkoutStep === 5 && "Order Successfully Placed! 🌸"}
            </h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Indicator */}
        {checkoutStep < 5 && (
          <div className="px-6 py-2.5 bg-white border-b border-[#E5DED2] flex items-center justify-between text-[11px]">
            <span className={checkoutStep === 1 ? "text-[#8B1E2D] font-bold" : "text-[#636363]"}>1. Bag</span>
            <span className="text-[#C6A15B]">→</span>
            <span className={checkoutStep === 2 ? "text-[#8B1E2D] font-bold" : "text-[#636363]"}>2. Recipient</span>
            <span className="text-[#C6A15B]">→</span>
            <span className={checkoutStep === 3 ? "text-[#8B1E2D] font-bold" : "text-[#636363]"}>3. Schedule</span>
            <span className="text-[#C6A15B]">→</span>
            <span className={checkoutStep === 4 ? "text-[#8B1E2D] font-bold" : "text-[#636363]"}>4. Payment</span>
          </div>
        )}

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* ---------------- STEP 1: CART REVIEW ---------------- */}
          {checkoutStep === 1 && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white border border-[#E5DED2] mx-auto flex items-center justify-center text-3xl shadow-xs">
                    🥀
                  </div>
                  <h3 className="font-playfair text-xl text-[#0B0B0B] font-bold">Your Bouquet Bag is Empty</h3>
                  <p className="text-xs text-[#2A2A2A] max-w-xs mx-auto">
                    Explore our handcrafted flower collection and treat someone special today.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Explore Bouquets
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-white border border-[rgba(198,161,91,0.30)] text-xs text-[#2A2A2A] flex items-center gap-2.5 shadow-xs">
                    <Truck className="w-4 h-4 flex-shrink-0 text-[#8B1E2D]" />
                    <span><strong className="text-[#0B0B0B]">{DELIVERY_POLICY_LINE}</strong> — 2–5 hour express.</span>
                  </div>

                  {cart.map((item) => {
                    const c = item.customization;
                    const slotLabel = c ? TIME_SLOTS.find((s) => s.id === c.deliverySlot)?.label ?? c.deliverySlot : null;
                    return (
                    <div 
                      key={item.product.id}
                      className="flex gap-3.5 p-3.5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-xs"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#F8F3EA]">
                        <Image 
                          src={item.product.image}
                          alt={item.product.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-semibold text-[#0B0B0B] line-clamp-1">
                            {item.product.title}
                          </h4>
                          <button 
                            onClick={() => updateQuantity(item.product.id, -item.quantity)}
                            className="text-[#636363] hover:text-[#8B1E2D] p-1 cursor-pointer transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Per-item delivery summary (from product page choices) */}
                        {c && (
                          <div className="mt-1 text-[10px] text-[#555555] leading-relaxed">
                            <span className="font-semibold text-[#0B0B0B]">{formatDeliveryDate(c.deliveryDate)}</span>
                            {" · "}{slotLabel}
                            {" · "}{c.area.replace(", Lahore", "")}
                            {" · "}{c.cardOccasion.replace(/[\u{1F300}-\u{1FAFF}]/gu, "").trim() || c.cardOccasion}
                            <button
                              type="button"
                              onClick={() => {
                                loadCustomizationIntoCheckout(c);
                                setCheckoutStep(3);
                              }}
                              className="ml-1.5 inline-flex items-center gap-0.5 text-[#8B1E2D] font-semibold hover:underline cursor-pointer"
                            >
                              <Pencil className="w-2.5 h-2.5" /> Edit
                            </button>
                          </div>
                        )}

                        {/* Price in #8B1E2D */}
                        <div className="text-sm font-bold text-[#8B1E2D]">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </div>

                        {/* Quantity Controls: White background, Border #E5DED2 */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center border border-[#E5DED2] rounded-full bg-white text-xs">
                            <button 
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="px-2.5 py-1 text-[#2A2A2A] hover:text-[#8B1E2D] cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-bold text-[#0B0B0B]">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="px-2.5 py-1 text-[#2A2A2A] hover:text-[#8B1E2D] cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-[10px] text-[#636363]">
                            Rs. {item.product.price.toLocaleString()} each
                          </span>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* ---------------- STEP 2: SENDER & RECIPIENT ---------------- */}
          {checkoutStep === 2 && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
                <span className="font-semibold text-[#8B1E2D] block text-[11px] uppercase tracking-wider">
                  Recipient Information (Lahore)
                </span>
                
                <div>
                  <label className="block text-[#2A2A2A] font-medium mb-1">Recipient Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ayesha Khan" 
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className={inputCls(triedContinue && recipientName.trim().length === 0)}
                  />
                  {errMsg(triedContinue && recipientName.trim().length === 0, "Please enter the recipient's name.")}
                </div>

                <div>
                  <label className="block text-[#2A2A2A] font-medium mb-1">Recipient Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    placeholder="0321-xxxxxxx" 
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className={inputCls(triedContinue && !recipientPhoneValid)}
                  />
                  {errMsg(triedContinue && !recipientPhoneValid, "Enter a valid Pakistani mobile: 03XXXXXXXXX or +923XXXXXXXXX.")}
                </div>

                <div>
                  <label className="block text-[#2A2A2A] font-medium mb-1">Lahore Area / Sector *</label>
                  <select 
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-lg text-[#0B0B0B] outline-none"
                  >
                    {LAHORE_AREAS.map((area, aIdx) => {
                      const fee = getDeliveryFee(area);
                      return (
                        <option key={aIdx} value={area} className="bg-white text-[#0B0B0B]">
                          {area}{fee.fee === 0 ? " — FREE delivery" : fee.fee === null ? " — fee on WhatsApp" : ` — Rs. ${fee.fee}`}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block text-[#2A2A2A] font-medium mb-1">Full Street Address *</label>
                  <textarea 
                    rows={2}
                    placeholder="House / Flat No., Street, Sector details..." 
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className={`${inputCls(triedContinue && streetAddress.trim().length === 0)} resize-none`}
                  />
                  {errMsg(triedContinue && streetAddress.trim().length === 0, "Please enter the full street address.")}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
                <span className="font-semibold text-[#8B1E2D] block text-[11px] uppercase tracking-wider">
                  Sender Details (For Order Tracking)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[#2A2A2A] font-medium mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className={inputCls(triedContinue && senderName.trim().length === 0)}
                    />
                    {errMsg(triedContinue && senderName.trim().length === 0, "Please enter your name.")}
                  </div>
                  <div>
                    <label className="block text-[#2A2A2A] font-medium mb-1">Your WhatsApp *</label>
                    <input 
                      type="tel" 
                      placeholder="0300-xxxxxxx" 
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      className={inputCls(triedContinue && !senderPhoneValid)}
                    />
                    {errMsg(triedContinue && !senderPhoneValid, "Valid number required — we send photo proof & tracking here.")}
                  </div>
                </div>
                <p className="text-[10px] text-[#636363]">
                  Your WhatsApp is required — we send bouquet photo/video proof and delivery tracking on it.
                </p>
              </div>
            </div>
          )}

          {/* ---------------- STEP 3: SCHEDULE & GREETING CARD ---------------- */}
          {checkoutStep === 3 && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
                <span className="font-semibold text-[#8B1E2D] block text-[11px] uppercase tracking-wider">
                  Delivery Date & Time Slot
                </span>
                <DeliverySchedulePicker
                  date={deliveryDate}
                  slotId={deliveryTimeSlot}
                  onDateChange={setDeliveryDate}
                  onSlotChange={setDeliveryTimeSlot}
                />
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#8B1E2D] block text-[11px] uppercase tracking-wider">
                    Free Handwritten Greeting Card
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] font-bold uppercase">
                    Complimentary
                  </span>
                </div>
                <div>
                  <label className="block text-[#2A2A2A] font-medium mb-1">Select Occasion</label>
                  <select 
                    value={cardOccasion}
                    onChange={(e) => setCardOccasion(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-lg text-[#0B0B0B] outline-none"
                  >
                    {CARD_OCCASIONS.map((occ, oIdx) => (
                      <option key={oIdx} value={occ} className="bg-white">
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#2A2A2A] font-medium mb-1">Your Personalized Message</label>
                  <textarea 
                    rows={3}
                    value={cardMessage}
                    onChange={(e) => setCardMessage(e.target.value)}
                    placeholder="Write your heartfelt message here (calligraphed inside an ivory wax-sealed card)..."
                    className="w-full px-3 py-2 bg-white border border-[#E5DED2] rounded-lg text-[#0B0B0B] placeholder-[#636363] outline-none resize-none"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input 
                    type="checkbox" 
                    checked={wantPhotoBeforeDispatch}
                    onChange={(e) => setWantPhotoBeforeDispatch(e.target.checked)}
                    className="rounded border-[#E5DED2] text-[#8B1E2D] focus:ring-0"
                  />
                  <span className="text-[#2A2A2A] text-[11px] font-medium">
                    Send WhatsApp photo proof of bouquet prior to rider dispatch 📸
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* ---------------- STEP 4: PAYMENT ---------------- */}
          {checkoutStep === 4 && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-3 shadow-xs">
                <span className="font-semibold text-[#8B1E2D] block text-[11px] uppercase tracking-wider">
                  Choose Payment Method
                </span>

                <div className="space-y-2">
                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "cod" ? "bg-[#8B1E2D]/10 border-[#8B1E2D]" : "bg-[#F8F3EA] border-[#E5DED2] hover:border-[#C6A15B]"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "cod"} 
                        onChange={() => setPaymentMethod("cod")}
                        className="text-[#8B1E2D]"
                      />
                      <div>
                        <div className="font-bold text-[#0B0B0B]">Cash on Delivery (COD)</div>
                        <div className="text-[10px] text-[#555555]">Pay in cash when rider delivers to your doorstep in Lahore</div>
                      </div>
                    </div>
                    <span className="text-lg">💵</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "bank" ? "bg-[#8B1E2D]/10 border-[#8B1E2D]" : "bg-[#F8F3EA] border-[#E5DED2] hover:border-[#C6A15B]"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "bank"} 
                        onChange={() => setPaymentMethod("bank")}
                        className="text-[#8B1E2D]"
                      />
                      <div>
                        <div className="font-bold text-[#0B0B0B]">Direct Bank Transfer</div>
                        <div className="text-[10px] text-[#555555]">Meezan Bank, HBL or Bank Alfalah</div>
                      </div>
                    </div>
                    <span className="text-lg">🏦</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "wallet" ? "bg-[#8B1E2D]/10 border-[#8B1E2D]" : "bg-[#F8F3EA] border-[#E5DED2] hover:border-[#C6A15B]"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "wallet"} 
                        onChange={() => setPaymentMethod("wallet")}
                        className="text-[#8B1E2D]"
                      />
                      <div>
                        <div className="font-bold text-[#0B0B0B]">JazzCash / EasyPaisa</div>
                        <div className="text-[10px] text-[#555555]">Instant mobile wallet transfer</div>
                      </div>
                    </div>
                    <span className="text-lg">📱</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "whatsapp" ? "bg-[#8B1E2D]/10 border-[#8B1E2D]" : "bg-[#F8F3EA] border-[#E5DED2] hover:border-[#C6A15B]"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "whatsapp"} 
                        onChange={() => setPaymentMethod("whatsapp")}
                        className="text-[#8B1E2D]"
                      />
                      <div>
                        <div className="font-bold text-[#0B0B0B]">Order via WhatsApp Direct</div>
                        <div className="text-[10px] text-[#555555]">Chat with florist team & confirm instantly</div>
                      </div>
                    </div>
                    <span className="text-lg">💬</span>
                  </label>
                </div>
              </div>

              {/* Summary Recap */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] space-y-2 text-[11px] shadow-xs">
                <div className="flex justify-between text-[#2A2A2A]">
                  <span>Items Subtotal:</span>
                  <span className="font-semibold">Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#2A2A2A]">
                  <span>Express Delivery ({selectedArea.replace(", Lahore", "")}):</span>
                  <span className="text-[#8B1E2D] font-semibold">
                    {deliveryFee === null ? getDeliveryFee(selectedArea).label : deliveryFee === 0 ? "FREE (Rs. 0)" : `Rs. ${deliveryFee.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-[#2A2A2A]">
                  <span>Delivery Date:</span>
                  <span className="font-semibold">{formatDeliveryDate(deliveryDate)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#8B1E2D] pt-2 border-t border-[#E5DED2]">
                  <span>Total Amount Payable:</span>
                  <span>Rs. {orderTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- STEP 5: ORDER SUCCESS (Section 16: Burgundy / Gold accents) ---------------- */}
          {checkoutStep === 5 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#8B1E2D]/15 border border-[#8B1E2D] mx-auto flex items-center justify-center text-[#8B1E2D] shadow-md">
                <CheckCircle2 className="w-10 h-10 text-[#8B1E2D]" />
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Order Confirmed!</h3>
                <p className="text-xs text-[#8B1E2D] font-bold mt-1">Order ID: #{placedOrderId}</p>
                <p className="text-xs text-[#2A2A2A] max-w-sm mx-auto mt-2">
                  Thank you! Your floral arrangement is now entering our Gulberg studio for fresh selection and artistic wrapping.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5DED2] text-left text-xs space-y-2 shadow-xs">
                <div className="flex justify-between"><span className="text-[#636363]">Delivery Area:</span> <span className="font-semibold text-[#0B0B0B]">{selectedArea}</span></div>
                <div className="flex justify-between"><span className="text-[#636363]">Delivery Date:</span> <span className="font-semibold text-[#0B0B0B]">{formatDeliveryDate(deliveryDate)}</span></div>
                <div className="flex justify-between"><span className="text-[#636363]">Time Slot:</span> <span className="font-semibold text-[#0B0B0B]">{deliveryTimeSlot.toUpperCase()}</span></div>
                <div className="flex justify-between"><span className="text-[#636363]">Total Payable:</span> <span className="font-bold text-[#8B1E2D]">Rs. {orderTotal.toLocaleString()}</span></div>
              </div>

              {/* Send to WhatsApp Button */}
              <a
                href={`https://wa.me/${CONTACT_PHONE.whatsapp}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Order Details to WhatsApp Florist 💬</span>
              </a>

              <button
                onClick={() => {
                  clearCart();
                  setIsCartOpen(false);
                  setCheckoutStep(1);
                }}
                className="w-full py-2.5 rounded-full bg-white hover:bg-[#0B0B0B] text-[#0B0B0B] hover:text-white text-xs border border-[#E5DED2] transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>

        {/* Drawer Footer Actions (Section 16: Primary checkout button #8B1E2D, hover #C6A15B) */}
        {checkoutStep < 5 && cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#E5DED2] bg-white space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#636363]">Subtotal</span>
              <span className="text-base font-bold text-[#8B1E2D]">Rs. {cartSubtotal.toLocaleString()}</span>
            </div>

            <div className="flex items-center gap-2">
              {checkoutStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep((checkoutStep - 1) as 1 | 2 | 3 | 4)}
                  className="px-4 py-2.5 rounded-full bg-[#F8F3EA] text-[#0B0B0B] border border-[#E5DED2] hover:border-[#0B0B0B] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Back
                </button>
              )}

              {checkoutStep === 1 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep(2)}
                  className="flex-1 py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Proceed to Recipient Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {checkoutStep === 2 && (
                <button
                  type="button"
                  onClick={handleStep2Continue}
                  className="flex-1 py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Continue to Delivery Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {checkoutStep === 3 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep(4)}
                  className="flex-1 py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {checkoutStep === 4 && (
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="flex-1 py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Check className="w-4 h-4" />
                  <span>Confirm & Place Order (Rs. {orderTotal.toLocaleString()})</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
