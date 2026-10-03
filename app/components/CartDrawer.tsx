"use client";

import React from "react";
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
  MessageCircle 
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { LAHORE_AREAS, TIME_SLOTS, CARD_OCCASIONS } from "../data/products";

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
    generateWhatsAppMessage
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-[#181820] border-l border-white/10 h-full flex flex-col shadow-2xl animate-fade-in text-white">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#E11D48]" />
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
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Indicator */}
        {checkoutStep < 5 && (
          <div className="px-6 py-2.5 bg-[#121216] border-b border-white/5 flex items-center justify-between text-[11px]">
            <span className={checkoutStep === 1 ? "text-[#E11D48] font-bold" : "text-white/40"}>1. Bag</span>
            <span>→</span>
            <span className={checkoutStep === 2 ? "text-[#E11D48] font-bold" : "text-white/40"}>2. Recipient</span>
            <span>→</span>
            <span className={checkoutStep === 3 ? "text-[#E11D48] font-bold" : "text-white/40"}>3. Schedule</span>
            <span>→</span>
            <span className={checkoutStep === 4 ? "text-[#E11D48] font-bold" : "text-white/40"}>4. Payment</span>
          </div>
        )}

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {/* ---------------- STEP 1: CART REVIEW ---------------- */}
          {checkoutStep === 1 && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center text-3xl">
                    🥀
                  </div>
                  <h3 className="font-playfair text-xl text-white">Your Bouquet Bag is Empty</h3>
                  <p className="text-xs text-white/60 max-w-xs mx-auto">
                    Explore our handcrafted flower collection and treat someone special today.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-[#E11D48] text-white font-semibold text-xs cursor-pointer"
                  >
                    Explore Bouquets
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-[#E11D48]/15 border border-[#E11D48]/30 text-xs text-[#F43F5E] flex items-center gap-2">
                    <Truck className="w-4 h-4 flex-shrink-0 text-[#E11D48]" />
                    <span><strong>Free Express Delivery (2–5 Hours)</strong> included across Lahore!</span>
                  </div>

                  {cart.map((item) => (
                    <div 
                      key={item.product.id}
                      className="flex gap-3 p-3 rounded-xl bg-[#202028] border border-white/5"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                        <Image 
                          src={item.product.image}
                          alt={item.product.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-semibold text-white line-clamp-1">
                            {item.product.title}
                          </h4>
                          <button 
                            onClick={() => updateQuantity(item.product.id, -item.quantity)}
                            className="text-white/40 hover:text-red-400 p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-xs font-bold text-[#E11D48]">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/20 rounded-full bg-[#181820] text-xs">
                            <button 
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="px-2 py-1 text-white/70 hover:text-white cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-bold text-white">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="px-2 py-1 text-white/70 hover:text-white cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-[10px] text-white/40">
                            Rs. {item.product.price.toLocaleString()} each
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* ---------------- STEP 2: SENDER & RECIPIENT ---------------- */}
          {checkoutStep === 2 && (
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-lg bg-[#202028] border border-white/5 space-y-3">
                <span className="font-semibold text-[#E11D48] block text-[11px] uppercase tracking-wider">
                  Recipient Information (Lahore)
                </span>
                
                <div>
                  <label className="block text-white/70 mb-1">Recipient Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ayesha Khan" 
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#E11D48] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Recipient Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    placeholder="0321-xxxxxxx" 
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#E11D48] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Lahore Area / Sector *</label>
                  <select 
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white focus:border-[#E11D48] outline-none"
                  >
                    {LAHORE_AREAS.map((area, aIdx) => (
                      <option key={aIdx} value={area} className="bg-[#17171E] text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Full Street Address *</label>
                  <textarea 
                    rows={2}
                    placeholder="House / Flat No., Street, Sector details..." 
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#E11D48] outline-none resize-none"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#202028] border border-white/5 space-y-3">
                <span className="font-semibold text-[#E11D48] block text-[11px] uppercase tracking-wider">
                  Sender Details (For Order Tracking)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-white/70 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1">Your WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="0300-xxxxxxx" 
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- STEP 3: SCHEDULE & GREETING CARD ---------------- */}
          {checkoutStep === 3 && (
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-lg bg-[#202028] border border-white/5 space-y-3">
                <span className="font-semibold text-[#E11D48] block text-[11px] uppercase tracking-wider">
                  Select Delivery Time Slot
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setDeliveryTimeSlot(slot.id)}
                      className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                        deliveryTimeSlot === slot.id
                          ? "bg-[#E11D48]/20 border-[#E11D48] text-white"
                          : "bg-[#17171E] border-white/10 text-white/70 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-semibold text-xs mb-0.5">
                        <span>{slot.icon}</span>
                        <span>{slot.label}</span>
                      </div>
                      <div className="text-[10px] text-white/50">{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#202028] border border-white/5 space-y-3">
                <span className="font-semibold text-[#E11D48] block text-[11px] uppercase tracking-wider">
                  Free Handwritten Greeting Card
                </span>
                <div>
                  <label className="block text-white/70 mb-1">Select Occasion</label>
                  <select 
                    value={cardOccasion}
                    onChange={(e) => setCardOccasion(e.target.value)}
                    className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white outline-none"
                  >
                    {CARD_OCCASIONS.map((occ, oIdx) => (
                      <option key={oIdx} value={occ} className="bg-[#17171E]">
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Your Personalized Message</label>
                  <textarea 
                    rows={3}
                    value={cardMessage}
                    onChange={(e) => setCardMessage(e.target.value)}
                    placeholder="Write your heartfelt message here..."
                    className="w-full px-3 py-2 bg-[#17171E] border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#E11D48] outline-none resize-none"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input 
                    type="checkbox" 
                    checked={wantPhotoBeforeDispatch}
                    onChange={(e) => setWantPhotoBeforeDispatch(e.target.checked)}
                    className="rounded border-white/20 text-[#E11D48] focus:ring-0"
                  />
                  <span className="text-white/80 text-[11px]">
                    Send WhatsApp photo of bouquet prior to rider dispatch 📸
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* ---------------- STEP 4: PAYMENT ---------------- */}
          {checkoutStep === 4 && (
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-lg bg-[#202028] border border-white/5 space-y-3">
                <span className="font-semibold text-[#E11D48] block text-[11px] uppercase tracking-wider">
                  Choose Payment Method
                </span>

                <div className="space-y-2">
                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "cod" ? "bg-[#E11D48]/15 border-[#E11D48]" : "bg-[#17171E] border-white/10"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "cod"} 
                        onChange={() => setPaymentMethod("cod")}
                        className="text-[#E11D48]"
                      />
                      <div>
                        <div className="font-bold text-white">Cash on Delivery (COD)</div>
                        <div className="text-[10px] text-white/50">Pay in cash when rider delivers in Lahore</div>
                      </div>
                    </div>
                    <span className="text-lg">💵</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "bank" ? "bg-[#E11D48]/15 border-[#E11D48]" : "bg-[#17171E] border-white/10"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "bank"} 
                        onChange={() => setPaymentMethod("bank")}
                        className="text-[#E11D48]"
                      />
                      <div>
                        <div className="font-bold text-white">Direct Bank Transfer</div>
                        <div className="text-[10px] text-white/50">Meezan Bank, HBL or Bank Alfalah</div>
                      </div>
                    </div>
                    <span className="text-lg">🏦</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "wallet" ? "bg-[#E11D48]/15 border-[#E11D48]" : "bg-[#17171E] border-white/10"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "wallet"} 
                        onChange={() => setPaymentMethod("wallet")}
                        className="text-[#E11D48]"
                      />
                      <div>
                        <div className="font-bold text-white">JazzCash / EasyPaisa</div>
                        <div className="text-[10px] text-white/50">Instant mobile wallet transfer</div>
                      </div>
                    </div>
                    <span className="text-lg">📱</span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "whatsapp" ? "bg-[#E11D48]/15 border-[#E11D48]" : "bg-[#17171E] border-white/10"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === "whatsapp"} 
                        onChange={() => setPaymentMethod("whatsapp")}
                        className="text-[#E11D48]"
                      />
                      <div>
                        <div className="font-bold text-white">Order via WhatsApp Direct</div>
                        <div className="text-[10px] text-white/50">Chat with florist team & confirm instantly</div>
                      </div>
                    </div>
                    <span className="text-lg">💬</span>
                  </label>
                </div>
              </div>

              {/* Summary Recap */}
              <div className="p-3.5 rounded-lg bg-[#202028] border border-white/5 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-white/70">
                  <span>Items Subtotal:</span>
                  <span>Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Express Delivery in Lahore:</span>
                  <span className="text-[#25D366] font-semibold">FREE (Rs. 0)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#E11D48] pt-2 border-t border-white/10">
                  <span>Total Amount Payable:</span>
                  <span>Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- STEP 5: ORDER SUCCESS ---------------- */}
          {checkoutStep === 5 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E11D48]/20 border border-[#E11D48] mx-auto flex items-center justify-center text-[#E11D48] shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold text-white">Order Confirmed!</h3>
                <p className="text-xs text-[#E11D48] font-semibold mt-1">Order ID: #{placedOrderId}</p>
                <p className="text-xs text-white/70 max-w-sm mx-auto mt-2">
                  Thank you! Your floral arrangement is now entering our florist workshop for fresh selection and wrapping.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#202028] border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between"><span className="text-white/50">Delivery Area:</span> <span className="font-semibold text-white">{selectedArea}</span></div>
                <div className="flex justify-between"><span className="text-white/50">Time Slot:</span> <span className="font-semibold text-white">{deliveryTimeSlot.toUpperCase()}</span></div>
                <div className="flex justify-between"><span className="text-white/50">Total Payable:</span> <span className="font-bold text-[#E11D48]">Rs. {cartSubtotal.toLocaleString()}</span></div>
              </div>

              {/* Send to WhatsApp Button */}
              <a
                href={`https://wa.me/923001234567?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer"
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
                className="w-full py-2.5 rounded-xl bg-[#202028] text-white/80 hover:text-white text-xs border border-white/10 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          )}

        </div>

        {/* Drawer Footer Actions */}
        {checkoutStep < 5 && cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#121216] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Subtotal</span>
              <span className="text-base font-bold text-[#E11D48]">Rs. {cartSubtotal.toLocaleString()}</span>
            </div>

            <div className="flex items-center gap-2">
              {checkoutStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep((checkoutStep - 1) as 1 | 2 | 3 | 4)}
                  className="px-4 py-2.5 rounded-xl bg-[#202028] text-white/80 hover:text-white border border-white/10 text-xs font-semibold cursor-pointer"
                >
                  Back
                </button>
              )}

              {checkoutStep === 1 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep(2)}
                  className="flex-1 py-3 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-bold text-xs shadow-lg shadow-[#E11D48]/30 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Proceed to Recipient Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {checkoutStep === 2 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep(3)}
                  className="flex-1 py-3 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-bold text-xs shadow-lg shadow-[#E11D48]/30 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Continue to Delivery Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {checkoutStep === 3 && (
                <button
                  type="button"
                  onClick={() => setCheckoutStep(4)}
                  className="flex-1 py-3 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-bold text-xs shadow-lg shadow-[#E11D48]/30 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {checkoutStep === 4 && (
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white font-bold text-xs shadow-xl shadow-[#E11D48]/30 transition-all text-center flex items-center justify-center gap-1.5 hover:scale-101 active:scale-99 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Confirm & Place Order (Rs. {cartSubtotal.toLocaleString()})</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
