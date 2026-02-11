import { ImageResponse } from "next/og";
import { projects, siteConfig } from "@/lib/data";

export const ogSize = {
  width: 1200,
  height: 630,
};
export const ogContentType = "image/png";

export function generateProjectOgImage(slug: string) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#09090b",
            fontSize: 48,
            color: "#fafafa",
          }}
        >
          Project Not Found
        </div>
      ),
      { ...ogSize }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          padding: "48px 56px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar: Author + Site URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                color: "#fafafa",
                fontWeight: 600,
              }}
            >
              {siteConfig.name.charAt(0)}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 16, color: "#a1a1aa", fontWeight: 500 }}>
                {siteConfig.name}
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#52525b",
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>

        {/* Main content area - card style */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: "#18181b",
            borderRadius: "16px",
            border: "1px solid #27272a",
            padding: "48px",
          }}
        >
          {/* Project title */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            {project.title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 22,
              color: "#a1a1aa",
              maxWidth: "850px",
              lineHeight: 1.5,
              marginBottom: "28px",
            }}
          >
            {project.description}
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "auto",
            }}
          >
            {project.tags.slice(0, 5).map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  backgroundColor: "#27272a",
                  borderRadius: "9999px",
                  fontSize: 14,
                  color: "#a1a1aa",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Bottom: Metrics */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid #27272a",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, color: "#fafafa", fontWeight: 700 }}>
                {project.metrics.revenue}
              </div>
              <div style={{ fontSize: 13, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {project.metrics.revenueLabel}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, color: "#fafafa", fontWeight: 700 }}>
                {project.metrics.users}
              </div>
              <div style={{ fontSize: 13, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {project.metrics.usersLabel}
              </div>
            </div>
            {/* Emerald accent dot */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginLeft: "auto",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  backgroundColor: "#10b981",
                }}
              />
              <div style={{ fontSize: 14, color: "#10b981" }}>
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    }
  );
}
