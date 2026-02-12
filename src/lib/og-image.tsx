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

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const screenshotsToShow = hasScreenshots
    ? project.screenshots!.slice(0, 3)
    : [];

  // Read images from filesystem to avoid fetch issues in production
  const screenshotDataUris = await Promise.all(
    screenshotsToShow.map(async (s) => {
      try {
        const filePath = path.join(process.cwd(), "public", s.url);
        const buffer = await fs.readFile(filePath);
        const base64 = buffer.toString("base64");
        const ext = path.extname(s.url).toLowerCase().replace(".", "");
        const contentType = ext === "png" ? "image/png" : "image/jpeg";
        return `data:${contentType};base64,${base64}`;
      } catch (error) {
        console.error(`Error reading screenshot for OG image: ${s.url}`, error);
        return null;
      }
    })
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          padding: "40px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Screenshots Section - Lead with Visuals */}
        {hasScreenshots && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              width: "100%",
              marginBottom: "40px",
              height: "340px",
            }}
          >
            {screenshotDataUris.map((dataUri, index) => {
              if (!dataUri) return null;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flex: 1,
                    height: "340px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "2px solid #27272a",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#18181b",
                  }}
                >
                  <img
                    src={dataUri}
                    alt={screenshotsToShow[index].alt}
                    width={300}
                    height={540}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Content Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "70%",
            }}
          >
            {/* Project Title */}
            <div
              style={{
                display: "flex",
                fontSize: 56,
                fontWeight: 800,
                color: "#fafafa",
                letterSpacing: "-2px",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              {project.title}
            </div>

            {/* Project Description */}
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#a1a1aa",
                lineHeight: 1.4,
                marginBottom: "0",
              }}
            >
              {project.description}
            </div>
          </div>

          {/* Site Identity */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  fontSize: 16,
                  color: "#fafafa",
                  fontWeight: 700,
                }}
              >
                {siteConfig.name.charAt(0)}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  color: "#fafafa",
                  fontWeight: 600,
                }}
              >
                {siteConfig.name}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                color: "#52525b",
              }}
            >
              {siteConfig.url.replace("https://", "")}
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
