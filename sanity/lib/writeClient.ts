import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Server-only client with write access. Used by API routes to save orders.
// Requires SANITY_API_WRITE_TOKEN env var (never expose to the browser).
const token = process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  // Don't crash the whole app at import time; API routes will return 500.
  console.warn('SANITY_API_WRITE_TOKEN is not set — order saving is disabled.')
}

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token || '',
})
