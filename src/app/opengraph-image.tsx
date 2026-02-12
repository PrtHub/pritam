import { ImageResponse } from "next/og";
import { projects, siteConfig } from "@/lib/data";
import fs from "fs/promises";
import path from "path";

export const alt = `${siteConfig.name} - ${siteConfig.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function Image() {
  const collageApps = ["arc", "goodfriend"]; // Use just two for a cleaner background
  const screenshotUris = await Promise.all(
    collageApps.map(async (slug) => {
      const p = projects.find(proj => proj.slug === slug);
      if (!p || !p.screenshots || p.screenshots.length === 0) return null;
      try {
        const filePath = path.join(process.cwd(), "public", p.screenshots[0].url);
        const buffer = await fs.readFile(filePath);
        return `data:image/png;base64,${buffer.toString("base64")}`;
      } catch (e) { return null; }
    })
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#F9FAFB",
          backgroundImage: "radial-gradient(circle at 10% 10%, #F3F4F6 0%, transparent 40%), radial-gradient(circle at 90% 90%, #F3F4F6 0%, transparent 40%)",
          fontFamily: "Inter, system-ui, sans-serif",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Decorative Screens */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", opacity: 0.08 }}>
          {screenshotUris[0] && (
            <div style={{ display: "flex", position: "absolute", width: "350px", height: "700px", transform: "rotate(-12deg) translate(-150px, -50px)", borderRadius: "50px", border: "1px solid #000", overflow: "hidden" }}>
              <img src={screenshotUris[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
          {screenshotUris[1] && (
            <div style={{ display: "flex", position: "absolute", width: "350px", height: "700px", transform: "rotate(12deg) translate(950px, -50px)", borderRadius: "50px", border: "1px solid #000", overflow: "hidden" }}>
              <img src={screenshotUris[1]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>

        {/* Central Identity Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "70px 100px",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(20px)",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.06)",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", width: "90px", height: "90px", borderRadius: "24px", backgroundColor: "#111", alignItems: "center", justifyContent: "center", fontSize: 48, fontWeight: 900, color: "#fff", marginBottom: "32px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
            {siteConfig.name.charAt(0).toUpperCase()}
          </div>

          {/* Name */}
          <div style={{ display: "flex", fontSize: 100, fontWeight: 950, color: "#111", letterSpacing: "-6px", lineHeight: 0.9, marginBottom: "16px" }}>
            {siteConfig.name.toUpperCase()}
          </div>

          {/* Tagline */}
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#6B7280", letterSpacing: "-0.5px", marginBottom: "40px" }}>
            {siteConfig.title}
          </div>

          {/* Stats Bar */}
          <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#111" }}>4+</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "1px" }}>Products</div>
            </div>
            <div style={{ width: "1px", height: "30px", backgroundColor: "#E5E7EB" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#111" }}>270+</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "1px" }}>Users</div>
            </div>
            <div style={{ width: "1px", height: "30px", backgroundColor: "#E5E7EB" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#111" }}>iOS</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "1px" }}>Focus</div>
            </div>
          </div>
        </div>

        {/* Footer Signature */}
        <div style={{ display: "flex", position: "absolute", bottom: "74px", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", fontSize: 20, fontWeight: 800, color: "#111", letterSpacing: "-0.5px" }}>{siteConfig.url.replace("https://", "")}</div>
          <div style={{ width: "6px", height: "6px", borderRadius: "3px", backgroundColor: "#3b82f6" }} />
          <div style={{ display: "flex", fontSize: 18, fontWeight: 600, color: "#9CA3AF" }}>Indie Hacker & Builder</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
