import { NextRequest, NextResponse } from "next/server";

// Free plan removed — anonymous users are redirected to signup instead
export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: "Free plan no longer available. Sign up to get your personalized weekly plan." },
    { status: 410 }
  );
}
