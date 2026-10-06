import type { Metadata } from 'next'
import TrackOrderClient from './TrackOrderClient'
import { SITE_URL } from '@/lib/business'

export const metadata: Metadata = {
  title: 'Track Your Order',
  description:
    'Track your Lahore Bouquet order status online — enter your order ID and phone number to see live delivery updates.',
  robots: { index: true, follow: true },
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
  return <TrackOrderClient />
}
