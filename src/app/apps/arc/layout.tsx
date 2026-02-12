import { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "ARC — Circadian Rhythm Tracker | Sync Your Schedule With Your Biology",
  description:
    "ARC is a science-backed circadian rhythm tracker that discovers your chronotype (Lion, Bear, Wolf, Dolphin), maps your Peak Focus Windows, optimizes caffeine timing, and anchors your sleep-wake cycle. Local-first, privacy-first. Built on Huberman & Walker research.",
  keywords: [
    "circadian rhythm tracker",
    "chronotype test",
    "chronotype quiz",
    "lion bear wolf dolphin",
    "circadian rhythm app",
    "sleep wake cycle",
    "peak focus windows",
    "caffeine cutoff calculator",
    "morning sunlight routine",
    "cortisol melatonin rhythm",
    "huberman",
    "walker",
    "rise",
    "adenosine",
    "halflife",
    "metabolism",
    "routine",
    "sunlight",
    "nap",
    "adhd",
    "shiftwork",
    "jetlag",
    "nomad",
    "tired",
    "protocol",
    "trajectory",
    "focus",
    "alignment",
    "cortisol",
    "melatonin",
    "biofeedback",
    "biometric",
    "optimization",
    "habit",
    "discipline",
    "system",
    "chronobiology",
    "sleep science",
    "circadian science",
    "biological clock",
    "energy management",
    "deep work",
    "productivity app",
    "biohacking",
    "health tech",
    "local first app",
    "privacy first app",
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
    title: "ARC — Circadian Rhythm Tracker",
    description:
      "Discover your chronotype. Map your Peak Focus Windows. Optimize caffeine timing. Anchor your sleep-wake cycle. All backed by science from Huberman & Walker.",
    siteName: "ARC",
    locale: "en_US",
    type: "website",
    url: `${siteConfig.url}/projects/arc`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ARC — Circadian Rhythm Tracker",
    description:
      "Stop fighting your biology. ARC maps your Perfect Day using chronobiology — chronotype discovery, peak focus windows, caffeine cutoff & sunlight anchoring.",
    creator: "@iPritamX",
  },
  alternates: {
    canonical: `${siteConfig.url}/projects/arc`,
  },
  category: "Health & Productivity",
  icons: {
    icon: "/apps/arc/icon.png",
    apple: "/apps/arc/icon.png",
  },
};

export default function ArcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
