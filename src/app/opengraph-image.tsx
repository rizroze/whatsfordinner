import { ImageResponse } from "next/og";

export const alt = "What's For Dinner — Your week of meals, planned in 30 seconds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const interExtraBold = await readFile(join(process.cwd(), "public", "Inter-ExtraBold.woff"));
  const iconData = await readFile(join(process.cwd(), "public", "favicon.png"));
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

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

        {/* Top center: fork+knife icon + name */}
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
          <img
            src={iconSrc}
            width={38}
            height={38}
            style={{ borderRadius: 9, display: "flex" }}
          />
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
            padding: "0 100px",
          }}
        >
          {/* Headline */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 86,
              fontWeight: 800,
              color: "#0C0A09",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            Your week of meals,
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 86,
              fontWeight: 800,
              color: "#0C0A09",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            planned in 30 seconds
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 28,
              fontWeight: 800,
              color: "#F97316",
              marginTop: 20,
              textAlign: "center",
              display: "flex",
            }}
          >
            Personalized meal plans, recipes and a grocery list.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#A8A29E",
              marginTop: 16,
              textAlign: "center",
              display: "flex",
            }}
          >
            Delivered to your inbox every Sunday. Every week, automatically.
          </div>

          {/* CTA pill */}
          <div
            style={{
              marginTop: 28,
              background: "#F97316",
              color: "white",
              fontSize: 20,
              fontWeight: 700,
              padding: "12px 36px",
              borderRadius: 50,
              display: "flex",
            }}
          >
            Get your free 3-day plan
          </div>
        </div>

        {/* Bottom bar */}
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
