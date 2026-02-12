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
          backgroundColor: "#09090b",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Card container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            backgroundColor: "#18181b",
            borderRadius: "24px",
            border: "1px solid #27272a",
            padding: "60px 80px",
            maxWidth: "1000px",
          }}
        >
          {/* Avatar initial */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#27272a",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#fafafa",
              fontWeight: 700,
            }}
          >
            {siteConfig.name.charAt(0)}
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-2px",
            }}
          >
            {siteConfig.name}
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a1a1aa",
              fontWeight: 500,
            }}
          >
            {siteConfig.title}
          </div>

          {/* Description */}
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#52525b",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {siteConfig.description}
          </div>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Next.js", "TypeScript", "React Native", "Convex", "Tailwind"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    display: "flex",
                    padding: "6px 16px",
                    backgroundColor: "#27272a",
                    borderRadius: "9999px",
                    fontSize: 14,
                    color: "#a1a1aa",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
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
            display: "flex",
            position: "absolute",
            bottom: "32px",
            fontSize: 16,
            color: "#3f3f46",
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
