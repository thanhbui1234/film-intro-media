import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Namham DP — Modern Media Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            Namham DP
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              maxWidth: "600px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Modern Media Platform for Digital Publishing
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "#22d3ee",
                color: "#0f172a",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Next.js 16
            </div>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "#22d3ee",
                color: "#0f172a",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              React 19
            </div>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "#22d3ee",
                color: "#0f172a",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Tailwind CSS 4
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
