import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

const Body = z.object({
  reason: z.enum(["price", "not_using", "missing_feature", "found_alternative", "temporary", "other"]),
});

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ ok: true }); // silent — don't block cancel flow

  const body = await req.json();
  const parsed = Body.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: true });

  // Log it — visible in Vercel logs
  console.log(`[cancel-feedback] user=${user.id.slice(0, 8)}*** reason=${parsed.data.reason}`);

  // Store in DB if you ever add a cancel_feedback table
  // For now: also update user record so we can filter in Supabase
  const admin = createAdminClient();
  await admin
    .from("users")
    .update({ cancel_reason: parsed.data.reason } as Record<string, string>)
    .eq("id", user.id)
    .then(() => {}); // fire and forget, column may not exist yet

  return NextResponse.json({ ok: true });
}
