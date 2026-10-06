import type { Metadata } from 'next'
import TrackOrderClient from './TrackOrderClient'

export const metadata: Metadata = {
  title: 'Track Your Order',
  description:
    'Track your Lahore Bouquet order status online — enter your order ID and phone number to see live delivery updates.',
  robots: { index: true, follow: true },
}

export default function TrackOrderPage() {
  return <TrackOrderClient />
}
