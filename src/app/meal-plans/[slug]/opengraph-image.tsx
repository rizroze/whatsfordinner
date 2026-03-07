import { ImageResponse } from "next/og";
import { getMealPlanBySlug, getAllMealPlanPages } from "@/data/meal-plans";

export const alt = "Meal Plan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllMealPlanPages().map((page) => ({ slug: page.slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getMealPlanBySlug(slug);
  const h1 = data?.h1 ?? "Personalized Meal Plans";
  const desc = data?.metaDescription ?? "Weekly recipes and grocery lists, tailored to you.";

  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const interExtraBold = await readFile(join(process.cwd(), "public", "Inter-ExtraBold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFBF5",
          position: "relative",
        }}
      >
        {/* Dashed border inset */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "3px dashed #FDBA74",
            borderRadius: 20,
            display: "flex",
          }}
        />

        {/* Top center brand */}
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <div style={{
            fontSize: 36,
            display: "flex",
            filter: "brightness(0) saturate(100%) invert(47%) sepia(89%) saturate(2092%) hue-rotate(11deg) brightness(100%) contrast(97%)",
          }}>🍴</div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#1C1917",
              fontFamily: "Georgia, serif",
            }}
          >
            What&apos;s For Dinner
          </span>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 56,
              fontWeight: 800,
              color: "#0C0A09",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              display: "flex",
              maxWidth: 900,
            }}
          >
            {h1}
          </div>

          <div
            style={{
              fontFamily: "Inter",
              fontSize: 22,
              fontWeight: 800,
              color: "#F97316",
              marginTop: 20,
              textAlign: "center",
              display: "flex",
            }}
          >
            Personalized weekly meals + grocery lists
          </div>

          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#A8A29E",
              marginTop: 16,
              textAlign: "center",
              display: "flex",
              maxWidth: 700,
            }}
          >
            {desc.slice(0, 120)}
          </div>

          <div
            style={{
              marginTop: 24,
              background: "#F97316",
              color: "white",
              fontSize: 18,
              fontWeight: 700,
              padding: "10px 32px",
              borderRadius: 50,
              display: "flex",
            }}
          >
            Start Your Free Plan
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 52,
            right: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#F97316",
              display: "flex",
            }}
          >
            whatsfordinner.fit
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interExtraBold,
          weight: 800 as const,
          style: "normal" as const,
        },
      ],
    },
  );
}
