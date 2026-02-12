import { ogSize, ogContentType, generateProjectOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export const dynamic = "force-dynamic";

export default async function Image() {
  return await generateProjectOgImage("hackerbadges");
}
