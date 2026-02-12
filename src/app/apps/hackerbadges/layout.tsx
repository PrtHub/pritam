import { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "HackerBadges — Verified Revenue Badges for Indie Hackers | API-Verified Proof",
  description:
    "HackerBadges is the automated receipt engine for indie hackers. Connect Stripe, LemonSqueezy, or Polar.sh and get verified milestone badges, public product pages, and a Failure Hall of Fame. Ship products. Get proof. Automatically.",
  keywords: [
    "verified badges",
    "revenue badges",
    "indie hackers",
    "SaaS revenue",
    "startup metrics",
    "Stripe integration",
    "LemonSqueezy",
    "product milestones",
    "build in public",
    "transparent metrics",
    "social proof",
    "API verified",
    "milestone badges",
    "neobrutalism",
    "failure hall of fame",
    "indie hacker tools",
    "business metrics",
    "founder transparency",
    "verified traction",
    "public product pages",
    "MRR tracking",
    "customer milestones",
    "achievement badges",
    "startup credibility",
    "product proof",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "HackerBadges — Verified Revenue Badges",
    description:
      "Get verified milestone badges from your real Stripe/LemonSqueezy data. No screenshots. No fake metrics. Just proof.",
    siteName: "HackerBadges",
    locale: "en_US",
    type: "website",
    url: `${siteConfig.url}/projects/hackerbadges`,
  },
  twitter: {
    card: "summary_large_image",
    title: "HackerBadges — Ship Products. Get Proof.",
    description:
      "Verified revenue badges backed by real Stripe & LemonSqueezy data. Perfect for indie hackers building in public.",
    creator: "@iPritamX",
  },
  alternates: {
    canonical: `${siteConfig.url}/projects/hackerbadges`,
  },
  category: "Business & SaaS Tools",
};

export default function HackerBadgesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
