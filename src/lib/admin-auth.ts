import { createClient } from "@/lib/supabase/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

/** Returns the admin's user id if the current session belongs to the admin, else null. */
export async function requireAdmin(): Promise<string | null> {
  if (!ADMIN_EMAIL) return null;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== ADMIN_EMAIL) return null;
  return user.id;
}
