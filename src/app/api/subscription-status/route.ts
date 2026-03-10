import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ status: "unauthenticated" }, { status: 401 });

  const admin = createAdminClient();
  const { data } = await admin
    .from("users")
    .select("subscription_status")
    .eq("id", user.id)
    .single();

  return NextResponse.json({ status: data?.subscription_status ?? "inactive" });
}
