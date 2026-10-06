"use client";

import React, { createContext, useContext, useState, useMemo, useEffect, useCallback, ReactNode } from "react";
import { Product, ALL_PRODUCTS, LAHORE_AREAS, TIME_SLOTS, CARD_OCCASIONS } from "../data/products";
import {
  getTodayISO,
  formatDeliveryDate,
  isSlotAvailableOnDate,
  getDeliveryFee,
} from "@/lib/delivery";
import { normalizePakistaniPhone, CONTACT_PHONE } from "@/lib/site";

/** Per-item delivery/card choices captured on the product page. */
export interface CartItemCustomization {
  deliveryDate: string; // YYYY-MM-DD
  deliverySlot: string; // slot id
  area: string;
  cardOccasion: string;
  recipientName: string;
  cardMessage: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  customization?: CartItemCustomization;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, e?: React.MouseEvent, customization?: CartItemCustomization) => void;
  directOrderNow: (product: Product, e?: React.MouseEvent, customization?: CartItemCustomization) => void;
  updateQuantity: (productId: number | string, delta: number) => void;
  updateItemCustomization: (productId: number | string, customization: CartItemCustomization) => void;
  clearCart: () => void;
  totalCartCount: number;
  cartSubtotal: number;
  deliveryFee: number | null;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  discountAmount: number;
  orderTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  checkoutStep: 1 | 2 | 3 | 4 | 5;
  setCheckoutStep: (step: 1 | 2 | 3 | 4 | 5) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  wishlist: (number | string)[];
  toggleWishlist: (productId: number | string, e?: React.MouseEvent) => void;

  // Checkout Form State
  senderName: string;
  setSenderName: (val: string) => void;
  senderPhone: string;
  setSenderPhone: (val: string) => void;
  recipientName: string;
  setRecipientName: (val: string) => void;
  recipientPhone: string;
  setRecipientPhone: (val: string) => void;
  selectedArea: string;
  setSelectedArea: (val: string) => void;
  streetAddress: string;
  setStreetAddress: (val: string) => void;
  deliveryDate: string; // YYYY-MM-DD
  setDeliveryDate: (val: string) => void;
  deliveryTimeSlot: string;
  setDeliveryTimeSlot: (val: string) => void;
  cardOccasion: string;
  setCardOccasion: (val: string) => void;
  cardMessage: string;
  setCardMessage: (val: string) => void;
  wantPhotoBeforeDispatch: boolean;
  setWantPhotoBeforeDispatch: (val: boolean) => void;
  paymentMethod: "cod" | "bank" | "wallet" | "whatsapp";
  setPaymentMethod: (val: "cod" | "bank" | "wallet" | "whatsapp") => void;
  placedOrderId: string;
  handlePlaceOrder: () => void;
  generateWhatsAppMessage: () => string;
  /** Load a cart item's customization into the checkout form (for "Edit"). */
  loadCustomizationIntoCheckout: (c: CartItemCustomization) => void;
  /** First available slot id for a given date (Lahore cutoffs). */
  firstAvailableSlot: (isoDate: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "lb-cart-v1";
const FORM_KEY = "lb-checkout-form-v1";

function defaultCustomization(): CartItemCustomization {
  const today = getTodayISO();
  return {
    deliveryDate: today,
    deliverySlot: "",
    area: "",
    cardOccasion: "",
    recipientName: "",
    cardMessage: "",
  };
}

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadForm(): Partial<Record<string, string | boolean>> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(FORM_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => loadCart());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<(number | string)[]>([]);

  // Form states (restored from localStorage where available)
  const savedForm = useMemo(() => loadForm(), []);
  const [senderName, setSenderName] = useState(String(savedForm.senderName ?? ""));
  const [senderPhone, setSenderPhone] = useState(String(savedForm.senderPhone ?? ""));
  const [recipientName, setRecipientName] = useState(String(savedForm.recipientName ?? ""));
  const [recipientPhone, setRecipientPhone] = useState(String(savedForm.recipientPhone ?? ""));
  const [selectedArea, setSelectedArea] = useState(String(savedForm.selectedArea ?? ""));
  const [streetAddress, setStreetAddress] = useState(String(savedForm.streetAddress ?? ""));
  const [deliveryDate, setDeliveryDate] = useState(String(savedForm.deliveryDate ?? getTodayISO()));
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState(
    String(savedForm.deliveryTimeSlot ?? "")
  );
  const [cardOccasion, setCardOccasion] = useState(String(savedForm.cardOccasion ?? ""));
  const [cardMessage, setCardMessage] = useState(
    String(savedForm.cardMessage ?? "Wishing you a day as radiant and beautiful as these blooms!")
  );
  const [wantPhotoBeforeDispatch, setWantPhotoBeforeDispatch] = useState(
    savedForm.wantPhotoBeforeDispatch !== false
  );
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bank" | "wallet" | "whatsapp">(
    (savedForm.paymentMethod as "cod" | "bank" | "wallet" | "whatsapp") || "cod"
  );
  const [placedOrderId, setPlacedOrderId] = useState("");

  // Persist cart + form to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch { /* ignore */ }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        FORM_KEY,
        JSON.stringify({
          senderName, senderPhone, recipientName, recipientPhone,
          selectedArea, streetAddress, deliveryDate, deliveryTimeSlot,
          cardOccasion, cardMessage, wantPhotoBeforeDispatch, paymentMethod,
        })
      );
    } catch { /* ignore */ }
  }, [senderName, senderPhone, recipientName, recipientPhone, selectedArea, streetAddress, deliveryDate, deliveryTimeSlot, cardOccasion, cardMessage, wantPhotoBeforeDispatch, paymentMethod]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const loadCustomizationIntoCheckout = useCallback((c: CartItemCustomization) => {
    setDeliveryDate(c.deliveryDate);
    setDeliveryTimeSlot(c.deliverySlot);
    setSelectedArea(c.area);
    setCardOccasion(c.cardOccasion);
    if (c.recipientName) setRecipientName(c.recipientName);
    if (c.cardMessage) setCardMessage(c.cardMessage);
  }, []);

  const firstAvailableSlot = useCallback((isoDate: string): string => {
    return TIME_SLOTS.find((s) => isSlotAvailableOnDate(s.id, isoDate))?.id ?? TIME_SLOTS[0].id;
  }, []);

  const addToCart = (product: Product, quantity = 1, e?: React.MouseEvent, customization?: CartItemCustomization) => {
    if (e) e.stopPropagation();
    const custom = customization ?? defaultCustomization();
    setCart((prev) => {
      const existing = prev.find((item) => String(item.product.id) === String(product.id));
      if (existing) {
        return prev.map((item) =>
          String(item.product.id) === String(product.id)
            ? { ...item, quantity: item.quantity + quantity, customization: custom }
            : item
        );
      }
      return [...prev, { product, quantity, customization: custom }];
    });
    // Carry product-page choices into the checkout form
    if (customization) {
      loadCustomizationIntoCheckout(customization);
    }
    showToast(`Added "${product.title.split("–")[0].split(".")[0].trim()}" to Bag!`);
  };

  const directOrderNow = (product: Product, e?: React.MouseEvent, customization?: CartItemCustomization) => {
    if (e) e.stopPropagation();
    const custom = customization ?? defaultCustomization();
    setCart((prev) => {
      const existing = prev.find((item) => String(item.product.id) === String(product.id));
      if (existing) {
        return prev.map((item) =>
          String(item.product.id) === String(product.id)
            ? { ...item, customization: custom }
            : item
        );
      }
      return [...prev, { product, quantity: 1, customization: custom }];
    });
    if (customization) {
      loadCustomizationIntoCheckout(customization);
    }
    setIsCartOpen(true);
    setCheckoutStep(2);
  };

  const updateQuantity = (productId: number | string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (String(item.product.id) === String(productId)) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const updateItemCustomization = (productId: number | string, customization: CartItemCustomization) => {
    setCart((prev) =>
      prev.map((item) =>
        String(item.product.id) === String(productId) ? { ...item, customization } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: number | string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const exists = prev.some((id) => String(id) === String(productId));
      if (exists) {
        showToast("Removed from Wishlist");
        return prev.filter((id) => String(id) !== String(productId));
      } else {
        showToast("Saved to Wishlist ❤️");
        return [...prev, productId];
      }
    });
  };

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const deliveryFee = useMemo(() => getDeliveryFee(selectedArea).fee, [selectedArea]);

  /** Discount codes: WELCOME10 = 10% off subtotal (abandoned-cart recovery). */
  const [discountCode, setDiscountCode] = useState("");
  const discountAmount = useMemo(() => {
    if (discountCode.trim().toUpperCase() === "WELCOME10") {
      return Math.round(cartSubtotal * 0.1);
    }
    return 0;
  }, [discountCode, cartSubtotal]);

  const orderTotal = useMemo(
    () => cartSubtotal - discountAmount + (deliveryFee ?? 0),
    [cartSubtotal, discountAmount, deliveryFee]
  );

  const handlePlaceOrder = () => {
    const randomId = `FLB-${Math.floor(100000 + Math.random() * 900000)}`;
    setPlacedOrderId(randomId);
    setCheckoutStep(5);
    showToast(`Order Confirmed! ID: ${randomId}`);
    // Save the order to Sanity so it appears in the /admin dashboard.
    // Fire-and-forget: the WhatsApp flow is the primary channel, so a save
    // failure must never block the customer.
    try {
      const payload = {
        orderId: randomId,
        senderName,
        senderPhone,
        recipientName,
        recipientPhone,
        streetAddress,
        area: selectedArea,
        deliveryDate,
        deliveryTimeSlot,
        cardOccasion,
        cardMessage,
        paymentMethod,
        subtotal: cartSubtotal,
        deliveryFee: deliveryFee ?? 0,
        discountCode: discountCode.trim().toUpperCase() || undefined,
        discountAmount,
        total: orderTotal,
        wantPhotoBeforeDispatch,
        items: cart.map((item) => ({
          title: item.product.title,
          slug: item.product.slug,
          price: item.product.price,
          quantity: item.quantity,
          deliveryDate: item.customization?.deliveryDate || deliveryDate,
          deliverySlot: item.customization?.deliverySlot || deliveryTimeSlot,
          area: item.customization?.area || selectedArea,
          cardOccasion: item.customization?.cardOccasion || cardOccasion,
          recipientName: item.customization?.recipientName || recipientName,
          cardMessage: item.customization?.cardMessage || cardMessage,
        })),
      };
      fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((e) => console.error('Order save failed:', e));
    } catch (e) {
      console.error('Order save failed:', e);
    }
  };

  const generateWhatsAppMessage = () => {
    const slotLabel = TIME_SLOTS.find((s) => s.id === deliveryTimeSlot)?.label ?? deliveryTimeSlot;
    const feeInfo = getDeliveryFee(selectedArea);
    const itemsList = cart
      .map((item) => {
        const c = item.customization;
        const extra = c
          ? ` [${formatDeliveryDate(c.deliveryDate)}, ${TIME_SLOTS.find((s) => s.id === c.deliverySlot)?.label ?? c.deliverySlot}, ${c.area}]`
          : "";
        return `• ${item.product.title.split("–")[0].trim()} (Qty: ${item.quantity}) - Rs. ${(item.product.price * item.quantity).toLocaleString()}${extra}`;
      })
      .join("\n");

    const senderPhoneNorm = normalizePakistaniPhone(senderPhone) ?? senderPhone;
    const recipientPhoneNorm = normalizePakistaniPhone(recipientPhone) ?? recipientPhone;

    const text =
      `🌸 *NEW LAHORE BOUQUET ORDER - #${placedOrderId || "DIRECT"}*\n\n` +
      `*Order Total:* Rs. ${orderTotal.toLocaleString()} (Delivery: ${feeInfo.label})` +
      (discountAmount > 0 ? ` [Discount ${discountCode.trim().toUpperCase()}: −Rs. ${discountAmount.toLocaleString()}]` : "") + `\n\n` +
      `*Selected Items:*\n${itemsList}\n\n` +
      `*Delivery Area:* ${selectedArea}\n` +
      `*Street Address:* ${streetAddress || "Not specified"}\n` +
      `*Recipient:* ${recipientName || "Self"} (${recipientPhoneNorm || "N/A"})\n` +
      `*Sender:* ${senderName || "Valued Customer"} (${senderPhoneNorm || "N/A"})\n` +
      `*Delivery Date:* ${formatDeliveryDate(deliveryDate)}\n` +
      `*Delivery Time:* ${slotLabel}\n` +
      `*Occasion Card:* ${cardOccasion}\n` +
      `*Card Message:* "${cardMessage}"\n` +
      `*Photo/Video Before Dispatch:* ${wantPhotoBeforeDispatch ? "YES PLEASE" : "No"}\n` +
      `*Payment Method:* ${paymentMethod.toUpperCase()}\n\n` +
      `Please confirm order preparation! ✨`;

    return encodeURIComponent(text);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        directOrderNow,
        updateQuantity,
        updateItemCustomization,
        clearCart,
        totalCartCount,
        cartSubtotal,
        deliveryFee,
        discountCode,
        setDiscountCode,
        discountAmount,
        orderTotal,
        isCartOpen,
        setIsCartOpen,
        checkoutStep,
        setCheckoutStep,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        showToast,
        wishlist,
        toggleWishlist,
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
        firstAvailableSlot,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
