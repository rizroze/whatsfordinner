import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          backgroundColor: "#F97316",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            display: "flex",
            filter: "brightness(0) invert(1)",
          }}
        >
          🍴
        </div>
      </div>
    ),
    { ...size },
  );
}
