import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} - ${siteConfig.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(to right, #ffffff, #a1a1aa)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-2px",
            }}
          >
            {siteConfig.name}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              color: "#71717a",
              fontWeight: 500,
            }}
          >
            {siteConfig.title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: "#52525b",
              maxWidth: "800px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {siteConfig.description}
          </div>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "900px",
            }}
          >
            {["Next.js", "TypeScript", "React Native", "Convex", "Tailwind"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "9999px",
                    fontSize: 18,
                    color: "#a1a1aa",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 20,
            color: "#52525b",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
