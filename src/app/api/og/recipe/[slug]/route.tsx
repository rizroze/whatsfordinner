import { ImageResponse } from "next/og";
import { getRecipeBySlug } from "@/data/recipes";

export const runtime = "nodejs";

const mealTypeBg: Record<string, string> = {
  breakfast: "#FFEDD5",
  lunch: "#DBEAFE",
  dinner: "#EDE9FE",
  snack: "#ECFCCB",
};

const mealTypeAccent: Record<string, string> = {
  breakfast: "#C2410C",
  lunch: "#1D4ED8",
  dinner: "#6D28D9",
  snack: "#4D7C0F",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  const name = recipe?.name ?? "Recipe";
  const description =
    recipe?.description ??
    "Personalized meal plans, recipes, and a grocery list.";
  const emoji = recipe?.emoji ?? "\u{1F37D}\u{FE0F}";
  const cuisine = recipe?.cuisine ?? "";
  const mealType = recipe?.mealType ?? "dinner";
  const totalTime = recipe?.totalTime ?? 0;
  const servings = recipe?.servings ?? 0;
  const difficulty = recipe?.difficulty ?? "";

  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const interExtraBold = await readFile(
    join(process.cwd(), "public", "Inter-ExtraBold.woff"),
  );

  const bg = mealTypeBg[mealType] ?? "#FFEDD5";
  const accent = mealTypeAccent[mealType] ?? "#C2410C";

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
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#F97316",
              fontFamily: "Inter",
              letterSpacing: "-0.5px",
            }}
          >
            What&apos;s For Dinner
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "96px 80px 40px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 160,
              height: 160,
              borderRadius: 80,
              backgroundColor: bg,
              fontSize: 96,
              marginBottom: 28,
            }}
          >
            {emoji}
          </div>

          {cuisine ? (
            <div
              style={{
                fontFamily: "Inter",
                fontSize: 18,
                fontWeight: 800,
                color: accent,
                backgroundColor: bg,
                padding: "6px 16px",
                borderRadius: 100,
                marginBottom: 16,
                display: "flex",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {cuisine}
            </div>
          ) : null}

          <div
            style={{
              fontFamily: "Inter",
              fontSize: 56,
              fontWeight: 800,
              color: "#0C0A09",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              display: "flex",
              maxWidth: 960,
            }}
          >
            {name}
          </div>

          <div
            style={{
              fontFamily: "Inter",
              fontSize: 18,
              fontWeight: 400,
              color: "#57534E",
              marginTop: 20,
              textAlign: "center",
              display: "flex",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            {description.slice(0, 140)}
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 28,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {totalTime > 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1C1917",
                }}
              >
                <span style={{ color: "#F97316", fontSize: 22 }}>{"\u23F1\uFE0F"}</span>
                <span>{totalTime} min</span>
              </div>
            ) : null}
            {servings > 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1C1917",
                }}
              >
                <span style={{ color: "#F97316", fontSize: 22 }}>{"\u{1F374}"}</span>
                <span>{servings} servings</span>
              </div>
            ) : null}
            {difficulty ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1C1917",
                }}
              >
                <span style={{ color: "#F97316", fontSize: 22 }}>{"\u2605"}</span>
                <span>{difficulty}</span>
              </div>
            ) : null}
          </div>
        </div>

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
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interExtraBold,
          weight: 800 as const,
          style: "normal" as const,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
