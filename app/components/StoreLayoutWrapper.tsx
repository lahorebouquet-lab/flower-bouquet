"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import QuickViewModal from "./QuickViewModal";
import FloatingWhatsApp from "./FloatingWhatsApp";
import OfferPopup from "./OfferPopup";
import AbandonedCartPopup from "./AbandonedCartPopup";
import { Toast, StickyMobileBar } from "./Toast";

export default function StoreLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <main className="min-h-screen w-full">{children}</main>;
  }

  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      {/* Spacer so the fixed mobile sticky bar never covers footer content */}
      <div className="md:hidden h-[72px] bg-[#0B0B0B]" aria-hidden="true" />
      <CartDrawer />
      <QuickViewModal />
      <Toast />
      <StickyMobileBar />
      <FloatingWhatsApp />
      <OfferPopup />
      <AbandonedCartPopup />
    </>
  );
}
