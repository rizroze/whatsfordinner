import { ImageResponse } from "next/og";

export const alt = "What's For Dinner — Personalized Meal Plans Delivered Weekly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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

        {/* Top left: fork+knife icon + name */}
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 100,
            display: "flex",
            alignItems: "center",
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
            padding: "0 100px",
          }}
        >
          {/* Decorative quote mark — top left */}
          <div
            style={{
              position: "absolute",
              top: 150,
              left: 110,
              fontSize: 140,
              fontWeight: 900,
              color: "#FDBA74",
              opacity: 0.25,
              lineHeight: 1,
              display: "flex",
            }}
          >
            &ldquo;
          </div>

          {/* Decorative quote mark — bottom right */}
          <div
            style={{
              position: "absolute",
              bottom: 130,
              right: 110,
              fontSize: 140,
              fontWeight: 900,
              color: "#FDBA74",
              opacity: 0.25,
              lineHeight: 1,
              display: "flex",
            }}
          >
            &rdquo;
          </div>

          {/* Headline — Georgia Bold like Just Cancel */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 76,
              fontWeight: 800,
              color: "#0C0A09",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>Never ask</span>
            <span style={{ color: "#F97316" }}>&ldquo;what&apos;s for dinner?&rdquo;</span>
            <span>again.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#A8A29E",
              marginTop: 20,
              textAlign: "center",
              display: "flex",
              letterSpacing: "0px",
            }}
          >
            Personalized meal plans + grocery lists, delivered to your inbox weekly. $4.99/mo.
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
