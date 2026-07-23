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
  // JPEG, pre-flattened onto the card background: satori rasterizes PNG/JPEG
  // reliably but not WebP, and flattening keeps it off the alpha path.
  const castData = await readFile(join(process.cwd(), "public", "og-characters.jpg"));
  const castSrc = `data:image/jpeg;base64,${castData.toString("base64")}`;

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
            padding: "70px 100px 0",
          }}
        >
          {/* Headline */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 76,
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
              fontSize: 76,
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

          {/* Subheadline. The "Get Started" pill and the third text line that
              used to sit here are gone: nothing in a preview card is
              clickable, and the art says more at thumbnail size than a
              fourth line of copy. */}
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 26,
              fontWeight: 800,
              color: "#F97316",
              marginTop: 18,
              textAlign: "center",
              display: "flex",
            }}
          >
            Personalized meal plans, recipes and a grocery list.
          </div>
        </div>

        {/* The cast along the bottom. Dimensions track the art's 2.47:1 ratio —
            satori does not infer intrinsic size, so a mismatch silently
            stretches it. */}
        <img
          src={castSrc}
          alt=""
          width={660}
          height={267}
          style={{ display: "flex", marginLeft: 270, marginBottom: 26 }}
        />

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
