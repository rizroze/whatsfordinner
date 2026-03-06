"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useT } from "@/lib/i18n/context";

export function LogoutButton() {
  const { t } = useT();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-sm text-stone-400 hover:text-red-500 transition-colors duration-200"
    >
      {t("dashboard.logout")}
    </button>
  );
}
