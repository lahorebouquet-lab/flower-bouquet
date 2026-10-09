import type { Metadata } from 'next'
import TrackOrderClient from './TrackOrderClient'
import { SITE_URL } from '@/lib/business'

export const metadata: Metadata = {
  title: 'Track Your Order',
  description:
    'Track your Lahore Bouquet order status online — enter your order ID and phone number to see live delivery updates.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/track-order`,
  },
  openGraph: {
    title: 'Track Your Lahore Bouquet Order',
    description:
      'Enter your order ID and phone number to see live status updates for your flower delivery in Lahore.',
    url: `${SITE_URL}/track-order`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Track your Lahore Bouquet order' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Track Your Lahore Bouquet Order',
    description:
      'Enter your order ID and phone number to see live status updates for your flower delivery in Lahore.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

export default function TrackOrderPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where do I find my Order ID?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your Order ID (e.g. FLB-123456) is shown on the order confirmation screen right after checkout, and it's also included in the WhatsApp order message we send you."
        }
      },
      {
        "@type": "Question",
        name: "Why do I need my phone number to track?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For privacy — only the person who placed the order (with the same phone number used at checkout) can see the order details and delivery address."
        }
      },
      {
        "@type": "Question",
        name: "What do the tracking statuses mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Order Received → we have your order. Confirmed → payment/order verified. Preparing → your bouquet is being hand-tied fresh. Out for Delivery → the rider is on the way. Delivered → enjoy!"
        }
      },
      {
        "@type": "Question",
        name: "It says order not found — what should I do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Double-check the Order ID spelling and make sure you're using the same phone number you ordered with. Still stuck? Message us on WhatsApp (0310-4225974) and we'll find it for you."
        }
      },
      {
        "@type": "Question",
        name: "Will I get updates without checking this page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we send WhatsApp updates at every step, including a live bouquet photo for your approval before dispatch. This page is handy when you want to check status yourself anytime."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TrackOrderClient />
    </>
  )
}
