import { ogSize, ogContentType, generateProjectOgImage } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateProjectOgImage("hackerbadges");
}
