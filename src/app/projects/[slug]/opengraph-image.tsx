import { ImageResponse } from "next/og";
import { projects, siteConfig } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

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
            backgroundColor: "#0a0a0a",
            fontSize: 48,
            color: "#ffffff",
          }}
        >
          Project Not Found
        </div>
      ),
      { ...size }
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
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
          padding: "60px",
        }}
      >
        {/* Top: Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
              backgroundColor: "#27272a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            {siteConfig.name.charAt(0)}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, color: "#ffffff", fontWeight: 600 }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 16, color: "#71717a" }}>
              {siteConfig.title}
            </div>
          </div>
        </div>

        {/* Middle: Project Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Project Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </div>

          {/* Project Description */}
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: "900px",
              lineHeight: 1.4,
              marginBottom: "30px",
            }}
          >
            {project.description}
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {project.tags.map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  borderRadius: "9999px",
                  fontSize: 18,
                  color: "#10b981",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Metrics */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, color: "#ffffff", fontWeight: 700 }}>
              {project.metrics.revenue}
            </div>
            <div style={{ fontSize: 16, color: "#71717a" }}>
              {project.metrics.revenueLabel}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, color: "#ffffff", fontWeight: 700 }}>
              {project.metrics.users}
            </div>
            <div style={{ fontSize: 16, color: "#71717a" }}>
              {project.metrics.usersLabel}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
