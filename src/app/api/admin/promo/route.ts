import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { createPromoCode, listPromoCodes } from "@/lib/promo";
import { rateLimit } from "@/lib/rate-limit";
import { z } from "zod";

const createPromoSchema = z.object({
  code: z.string().min(1),
  duration_months: z.number().int().positive().default(1),
  max_uses: z.number().int().positive().default(1),
  expires_at: z.string().optional(),
});

// GET /api/admin/promo — list all codes
export async function GET(req: NextRequest) {
  const limited = rateLimit(req, "admin-promo", 10, 60_000);
  if (limited) return limited;

  const adminId = await requireAdmin();
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const codes = await listPromoCodes();
    return NextResponse.json({ codes });
  } catch (error) {
    console.error("Admin promo list error:", error);
    return NextResponse.json({ error: "Failed to list codes" }, { status: 500 });
  }
}

// POST /api/admin/promo — create a code
export async function POST(req: NextRequest) {
  const limited = rateLimit(req, "admin-promo", 10, 60_000);
  if (limited) return limited;

  const adminId = await requireAdmin();
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const parsed = createPromoSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { code, duration_months, max_uses, expires_at } = parsed.data;

    const result = await createPromoCode({
      durationMonths: duration_months,
      maxUses: max_uses,
      code,
      expiresAt: expires_at,
      createdBy: adminId,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Admin promo create error:", error);
    return NextResponse.json({ error: "Failed to create promo code" }, { status: 500 });
  }
}
