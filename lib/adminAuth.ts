import { createHash, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

// Admin auth for /admin and order-management APIs.
// Password source: ADMIN_PASSWORD env var if set, otherwise the stored
// SHA-256 hash below. The plaintext password is never kept in the repo.
const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  // SHA-256 of the owner-chosen admin password (set 2026-10-06).
  '3d75cc1fe61dddb4897621844832c91e462d31298a6a018790e8bef992646439'

const COOKIE_NAME = 'lb_admin'
const COOKIE_SALT = 'lahore-bouquet-admin-v1'

function sha256(s: string): string {
  return createHash('sha256').update(s, 'utf8').digest('hex')
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  return ba.length === bb.length && timingSafeEqual(ba, bb)
}

/** True if the supplied password matches the configured admin password. */
export function verifyPassword(password: string): boolean {
  if (!password) return false
  const envPw = process.env.ADMIN_PASSWORD
  if (envPw) return safeEqual(sha256(password), sha256(envPw))
  if (!ADMIN_PASSWORD_HASH) return false
  return safeEqual(sha256(password), ADMIN_PASSWORD_HASH)
}

/**
 * Session token to store in the login cookie. Deterministic and unforgeable
 * without the password: derived from the env password, or from the stored
 * hash when the env var is not set.
 */
export function expectedSessionToken(): string | null {
  const envPw = process.env.ADMIN_PASSWORD
  if (envPw) return sha256(envPw + '::' + COOKIE_SALT)
  if (!ADMIN_PASSWORD_HASH) return null
  return sha256(ADMIN_PASSWORD_HASH + '::' + COOKIE_SALT)
}

/** Check the request's admin cookie. */
export async function isAdmin(): Promise<boolean> {
  const expected = expectedSessionToken()
  if (!expected) return false
  const jar = await cookies()
  const token = jar.get(COOKIE_NAME)?.value
  if (!token) return false
  return safeEqual(token, expected)
}

export function adminCookie(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  }
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME
