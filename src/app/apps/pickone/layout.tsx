import { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pick One: Decision Maker | Stop Second-Guessing",
  description:
    "Pick One is a fast randomization engine built around the Commitment Pact. Add your options, hit Decide, honor the verdict. Sacred Veto for re-spins. Decision Vault for history. Industrial Noir design. One-time $12.99 lifetime purchase.",
  keywords: [
    "decision maker app",
    "random picker",
    "choice randomizer",
    "decision fatigue",
    "random decision",
    "pick one app",
    "commitment pact",
    "randomizer app",
    "decision wheel",
    "food picker",
    "restaurant picker",
    "what should i do app",
    "choice wheel",
    "spin the wheel",
    "daily decisions",
    "productivity app",
    "ios utilities",
    "react native app",
    "expo app",
    "indecision",
    "decision making tool",
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
    title: "Pick One — Decision Maker",
    description:
      "Stop second-guessing. Add options, hit Decide, honor the verdict. Sacred Veto for re-spins. Industrial Noir design. One-time lifetime purchase.",
    siteName: "Pick One",
    locale: "en_US",
    type: "website",
    url: `${siteConfig.url}/apps/pickone`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick One — Decision Maker",
    description:
      "A fast randomization engine built around the Commitment Pact. The machine decides. You commit. Industrial Noir, zero subscriptions.",
    creator: "@iPritamX",
  },
  alternates: {
    canonical: `${siteConfig.url}/apps/pickone`,
  },
  category: "Utilities & Productivity",
};

export default function PickOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
