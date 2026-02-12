import { ImageResponse } from "next/og";
import { projects, siteConfig } from "@/lib/data";
import fs from "fs/promises";
import path from "path";

export const ogSize = {
  width: 1200,
  height: 630,
};
export const ogContentType = "image/png";

export async function generateProjectOgImage(slug: string) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", fontSize: 48, color: "#111" }}>
          Project Not Found
        </div>
      ),
      { ...ogSize }
    );
  }

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots.slice(0, 3)
    : [];

  const screenshotUris = await Promise.all(
    screenshots.map(async (s) => {
      try {
        const filePath = path.join(process.cwd(), "public", s.url);
        const buffer = await fs.readFile(filePath);
        return `data:image/png;base64,${buffer.toString("base64")}`;
      } catch (e) {
        return null;
      }
    })
  );

  const accentColor = project.slug === 'arc' ? '#bef264' : project.slug === 'goodfriend' ? '#3b82f6' : '#f43f5e';

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#F9FAFB",
          backgroundImage: `radial-gradient(circle at 80% 20%, ${accentColor}10 0%, transparent 40%), radial-gradient(circle at 20% 80%, ${accentColor}05 0%, transparent 30%)`,
          padding: "80px 100px",
          fontFamily: "Inter, system-ui, sans-serif",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left: Slim Device Stack */}
        <div style={{ display: "flex", position: "relative", width: "420px", height: "100%", alignItems: "center", justifyContent: "center" }}>

          {/* Back Device 2 */}
          {screenshotUris[2] && (
            <div style={{ display: "flex", position: "absolute", width: "180px", height: "390px", backgroundColor: "#fff", borderRadius: "28px", overflow: "hidden", border: "1px solid #E5E7EB", transform: "translateX(90px) translateY(40px) rotate(6deg) scale(0.9)", opacity: 0.5, boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <img src={screenshotUris[2]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}

          {/* Back Device 1 */}
          {screenshotUris[1] && (
            <div style={{ display: "flex", position: "absolute", width: "180px", height: "390px", backgroundColor: "#fff", borderRadius: "28px", overflow: "hidden", border: "1px solid #E5E7EB", transform: "translateX(-90px) translateY(20px) rotate(-6deg) scale(0.95)", opacity: 0.7, boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <img src={screenshotUris[1]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}

          {/* Foreground Device - Slim Bezels */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "230px",
            height: "480px",
            backgroundColor: "#000",
            borderRadius: "44px",
            padding: "4px",
            border: "3px solid #111",
            boxShadow: "0 30px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#000", borderRadius: "38px", overflow: "hidden" }}>
              {screenshotUris[0] ? (
                <img src={screenshotUris[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ display: "flex", width: "100%", height: "100%", backgroundColor: "#111" }} />
              )}
            </div>
          </div>
        </div>

        {/* Right: Clean Content Pillar */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, marginLeft: "80px", height: "100%", justifyContent: "center" }}>

          {/* Project Name */}
          <div style={{ display: "flex", fontSize: 80, fontWeight: 950, color: "#111", letterSpacing: "-6px", lineHeight: 0.9, marginBottom: "40px" }}>
            {project.title.split(":")[0]}
          </div>

          {/* Description - Focused Narrative */}
          <div style={{ display: "flex", fontSize: 32, fontWeight: 500, color: "#4B5563", lineHeight: 1.4, marginBottom: "60px", maxWidth: "550px" }}>
            {project.description}
          </div>

          {/* CTA: App Store Badge */}
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#000", padding: "16px 32px", borderRadius: "18px", color: "#fff", gap: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", alignSelf: "flex-start" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", opacity: 0.6, lineHeight: 1 }}>Download on the</div>
              <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1 }}>App Store</div>
            </div>
          </div>
        </div>

        {/* Subtle Signature in Corner */}
        <div style={{ position: "absolute", bottom: "40px", right: "50px", display: "flex", fontSize: 16, fontWeight: 700, color: "#9CA3AF" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
