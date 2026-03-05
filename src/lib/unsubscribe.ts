import crypto from "crypto";
import { getAppUrl } from "@/lib/utils";

const CRON_SECRET = () => process.env.CRON_SECRET?.trim() || "";

/**
 * Sign a payload with HMAC-SHA256 using CRON_SECRET.
 * Returns base64url-encoded token: base64url(payload).base64url(signature)
 */
export function generateUnsubscribeToken(userId: string, email: string): string {
  const payload = JSON.stringify({ userId, email });
  const payloadB64 = Buffer.from(payload).toString("base64url");
  const sig = crypto
    .createHmac("sha256", CRON_SECRET())
    .update(payloadB64)
    .digest("base64url");
  return `${payloadB64}.${sig}`;
}

/**
 * Verify token and return decoded payload, or null if invalid.
 */
export function verifyUnsubscribeToken(
  token: string
): { userId: string; email: string } | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, sig] = parts;
  const expectedSig = crypto
    .createHmac("sha256", CRON_SECRET())
    .update(payloadB64)
    .digest("base64url");

  // Timing-safe comparison
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) {
      return null;
    }
  } catch {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    if (!payload.userId || !payload.email) return null;
    return { userId: payload.userId, email: payload.email };
  } catch {
    return null;
  }
}

/**
 * Generate a simple email-only unsubscribe token (for free users without accounts).
 * Format: base64url(email).base64url(hmac)
 */
export function generateEmailUnsubscribeToken(email: string): string {
  const payloadB64 = Buffer.from(email).toString("base64url");
  const sig = crypto
    .createHmac("sha256", CRON_SECRET())
    .update(payloadB64)
    .digest("base64url");
  return `${payloadB64}.${sig}`;
}

/**
 * Verify email-only token, returns email or null.
 */
export function verifyEmailUnsubscribeToken(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, sig] = parts;
  const expectedSig = crypto
    .createHmac("sha256", CRON_SECRET())
    .update(payloadB64)
    .digest("base64url");

  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) {
      return null;
    }
  } catch {
    return null;
  }

  try {
    return Buffer.from(payloadB64, "base64url").toString();
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
