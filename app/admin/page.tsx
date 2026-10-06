import type { Metadata } from 'next'
import AdminDashboard from './AdminDashboard'

export const metadata: Metadata = {
  title: 'Admin — Orders',
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return <AdminDashboard />
}
