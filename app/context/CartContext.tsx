"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { Product, ALL_PRODUCTS, LAHORE_AREAS, TIME_SLOTS, CARD_OCCASIONS } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, e?: React.MouseEvent) => void;
  directOrderNow: (product: Product, e?: React.MouseEvent) => void;
  updateQuantity: (productId: number | string, delta: number) => void;
  clearCart: () => void;
  totalCartCount: number;
  cartSubtotal: number;
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
  deliveryDate: string;
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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<(number | string)[]>([]);

  // Form states
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [selectedArea, setSelectedArea] = useState(LAHORE_AREAS[0]);
  const [streetAddress, setStreetAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("Today (Same-Day Express)");
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState(TIME_SLOTS[1].id);
  const [cardOccasion, setCardOccasion] = useState(CARD_OCCASIONS[0]);
  const [cardMessage, setCardMessage] = useState("Wishing you a day as radiant and beautiful as these blooms!");
  const [wantPhotoBeforeDispatch, setWantPhotoBeforeDispatch] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bank" | "wallet" | "whatsapp">("cod");
  const [placedOrderId, setPlacedOrderId] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const addToCart = (product: Product, quantity = 1, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((item) => String(item.product.id) === String(product.id));
      if (existing) {
        return prev.map((item) =>
          String(item.product.id) === String(product.id) ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title.split('–')[0].split('.')[0].trim()}" to Bag!`);
  };

  const directOrderNow = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      const existing = prev.find((item) => String(item.product.id) === String(product.id));
      if (existing) return prev;
      return [...prev, { product, quantity: 1 }];
    });
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

  const handlePlaceOrder = () => {
    const randomId = `FLB-${Math.floor(100000 + Math.random() * 900000)}`;
    setPlacedOrderId(randomId);
    setCheckoutStep(5);
    showToast(`Order Confirmed! ID: ${randomId}`);
  };

  const generateWhatsAppMessage = () => {
    const itemsList = cart
      .map((item) => `• ${item.product.title.split('–')[0].trim()} (Qty: ${item.quantity}) - Rs. ${(item.product.price * item.quantity).toLocaleString()}`)
      .join("\n");

    const text = `🌸 *NEW LAHORE BOUQUET ORDER - #${placedOrderId || "DIRECT"}*\n\n` +
      `*Order Total:* Rs. ${cartSubtotal.toLocaleString()} (Free Express Delivery in Lahore)\n\n` +
      `*Selected Items:*\n${itemsList}\n\n` +
      `*Delivery Area:* ${selectedArea}\n` +
      `*Street Address:* ${streetAddress || "Not specified"}\n` +
      `*Recipient:* ${recipientName || "Self"} (${recipientPhone || "N/A"})\n` +
      `*Sender:* ${senderName || "Valued Customer"} (${senderPhone || "N/A"})\n` +
      `*Delivery Time:* ${deliveryTimeSlot.toUpperCase()} (${deliveryDate})\n` +
      `*Occasion Card:* ${cardOccasion}\n` +
      `*Card Message:* "${cardMessage}"\n` +
      `*Photo Before Dispatch:* ${wantPhotoBeforeDispatch ? "YES PLEASE" : "No"}\n` +
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
        clearCart,
        totalCartCount,
        cartSubtotal,
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
        generateWhatsAppMessage
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
