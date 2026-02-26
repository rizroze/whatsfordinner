import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createPromoCode, listPromoCodes } from "@/lib/promo";

const ADMIN_USER_ID = process.env.ADMIN_USER_ID;

async function isAdmin(): Promise<string | null> {
  if (!ADMIN_USER_ID) return null;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.id !== ADMIN_USER_ID) return null;
  return user.id;
}

// GET /api/admin/promo — list all codes
export async function GET() {
  const adminId = await isAdmin();
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
  const adminId = await isAdmin();
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const {
      duration_months = 1,
      max_uses = 1,
      code,
      expires_at,
    } = body;

    const result = await createPromoCode({
      durationMonths: duration_months,
      maxUses: max_uses,
      code,
      expiresAt: expires_at,
      createdBy: adminId,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Admin promo create error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
