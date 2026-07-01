import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "What's For Dinner?";
  const description =
    searchParams.get("description") ??
    "Personalized meal plans, recipes, and a grocery list — planned in 30 seconds.";

  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const interBold = await readFile(
    join(process.cwd(), "public", "Inter-ExtraBold.woff"),
  );
  const interRegular = await readFile(
    join(process.cwd(), "public", "Inter-Regular.woff"),
  );
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
          padding: "60px 72px",
          position: "relative",
        }}
      >
        {/* Orange accent top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#F97316",
            display: "flex",
          }}
        />

        {/* Site name */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#F97316",
            marginBottom: 48,
            display: "flex",
            fontFamily: "Inter",
          }}
        >
          whatsfordinner.fit
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? 44 : 52,
            fontWeight: 800,
            color: "#1C1917",
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 900,
            display: "flex",
            flexWrap: "wrap",
            fontFamily: "Inter",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "#78716C",
            lineHeight: 1.5,
            maxWidth: 860,
            display: "flex",
            flexWrap: "wrap",
            fontFamily: "Inter",
          }}
        >
          {description}
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 72,
            right: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <img
              src={iconSrc}
              width={40}
              height={40}
              style={{ borderRadius: 9, display: "flex" }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#44403C",
                fontFamily: "Inter",
              }}
            >
              AI Meal Planner
            </span>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#A8A29E",
              fontFamily: "Inter",
              display: "flex",
            }}
          >
            Free 3-day plan · No signup needed
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 800 as const,
          style: "normal" as const,
        },
        {
          name: "Inter",
          data: interRegular,
          weight: 400 as const,
          style: "normal" as const,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400",
      },
    },
  );
}
