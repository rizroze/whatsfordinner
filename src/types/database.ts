// Stub types — regenerate with `npx supabase gen types typescript` after migration
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          lemon_customer_id: string | null;
          lemon_subscription_id: string | null;
          subscription_status: "active" | "inactive" | "past_due" | "cancelled";
          subscription_source: "none" | "lemonsqueezy" | "promo" | "referral";
          subscription_expires_at: string | null;
          plan_interval: "monthly" | "yearly" | null;
          free_plan_used: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          lemon_customer_id?: string | null;
          lemon_subscription_id?: string | null;
          subscription_status?: "active" | "inactive" | "past_due" | "cancelled";
          subscription_source?: "none" | "lemonsqueezy" | "promo" | "referral";
          subscription_expires_at?: string | null;
          plan_interval?: "monthly" | "yearly" | null;
          free_plan_used?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      profiles: {
        Row: {
          id: string;
          user_id: string;
          household_size: number;
          has_kids: boolean;
          kids_ages: string[] | null;
          weekly_budget: "budget" | "moderate" | "premium";
          dietary_restrictions: string[];
          allergies: string[];
          cuisine_preferences: string[];
          cooking_skill: "beginner" | "intermediate" | "advanced";
          max_cook_time: number;
          meals_per_day: number;
          servings_per_meal: number;
          delivery_email: string | null;
          delivery_day: string;
          timezone: string;
          onboarding_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          household_size?: number;
          has_kids?: boolean;
          kids_ages?: string[];
          weekly_budget?: "budget" | "moderate" | "premium";
          dietary_restrictions?: string[];
          allergies?: string[];
          cuisine_preferences?: string[];
          cooking_skill?: "beginner" | "intermediate" | "advanced";
          max_cook_time?: number;
          meals_per_day?: number;
          servings_per_meal?: number;
          delivery_email?: string;
          delivery_day?: string;
          timezone?: string;
          onboarding_completed?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      meal_plans: {
        Row: {
          id: string;
          user_id: string;
          week_of: string;
          plan_data: Json | null;
          regeneration_count: number;
          status: "generating" | "ready" | "sent" | "failed";
          sent_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          week_of: string;
          plan_data?: Json;
          regeneration_count?: number;
          status?: "generating" | "ready" | "sent" | "failed";
        };
        Update: Partial<Database["public"]["Tables"]["meal_plans"]["Insert"]>;
      };
      promo_codes: {
        Row: {
          id: string;
          code: string;
          type: "admin" | "referral";
          duration_months: number;
          max_uses: number;
          current_uses: number;
          created_by: string | null;
          referrer_user_id: string | null;
          expires_at: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          code: string;
          type: "admin" | "referral";
          duration_months?: number;
          max_uses?: number;
          created_by?: string | null;
          referrer_user_id?: string | null;
          expires_at?: string | null;
          is_active?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["promo_codes"]["Insert"]>;
      };
      promo_redemptions: {
        Row: {
          id: string;
          promo_code_id: string;
          user_id: string;
          subscription_start: string;
          subscription_end: string | null;
          created_at: string;
        };
        Insert: {
          promo_code_id: string;
          user_id: string;
          subscription_end?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["promo_redemptions"]["Insert"]>;
      };
    };
  };
}
