import crypto from "crypto";
import { getAppUrl } from "@/lib/utils";

// Use dedicated HMAC secret if available, fall back to CRON_SECRET
const HMAC_SECRET = () => process.env.UNSUBSCRIBE_HMAC_SECRET?.trim() || process.env.CRON_SECRET?.trim() || "";

// Token expiry: 90 days (generous — covers multiple email cycles)
const TOKEN_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

function sign(payloadB64: string): string {
  return crypto.createHmac("sha256", HMAC_SECRET()).update(payloadB64).digest("base64url");
}

function verifySig(payloadB64: string, sig: string): boolean {
  const expected = sign(payloadB64);
  try {
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

/**
 * Sign a payload with HMAC-SHA256. Includes expiry timestamp.
 * Returns base64url(payload).base64url(signature)
 */
export function generateUnsubscribeToken(userId: string, email: string): string {
  const payload = JSON.stringify({ userId, email, exp: Date.now() + TOKEN_MAX_AGE_MS });
  const payloadB64 = Buffer.from(payload).toString("base64url");
  return `${payloadB64}.${sign(payloadB64)}`;
}

/**
 * Verify token and return decoded payload, or null if invalid/expired.
 */
export function verifyUnsubscribeToken(
  token: string
): { userId: string; email: string } | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sig] = parts;
  if (!verifySig(payloadB64, sig)) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    if (!payload.userId || !payload.email) return null;
    if (payload.exp && Date.now() > payload.exp) return null;
    return { userId: payload.userId, email: payload.email };
  } catch {
    return null;
  }
}

/**
 * Generate a simple email-only unsubscribe token (for free users without accounts).
 * Includes expiry timestamp.
 */
export function generateEmailUnsubscribeToken(email: string): string {
  const payload = JSON.stringify({ email, exp: Date.now() + TOKEN_MAX_AGE_MS });
  const payloadB64 = Buffer.from(payload).toString("base64url");
  return `${payloadB64}.${sign(payloadB64)}`;
}

/**
 * Verify email-only token, returns email or null if invalid/expired.
 */
export function verifyEmailUnsubscribeToken(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sig] = parts;
  if (!verifySig(payloadB64, sig)) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    if (!payload.email) return null;
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload.email;
  } catch {
    return null;
  }
}

export function generateUnsubscribeUrl(userId: string, email: string): string {
  const token = generateUnsubscribeToken(userId, email);
  return `${getAppUrl()}/api/unsubscribe?token=${token}`;
}

export function generateEmailUnsubscribeUrl(email: string): string {
  const token = generateEmailUnsubscribeToken(email);
  return `${getAppUrl()}/api/unsubscribe?token=${token}&type=email`;
}
