import { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Good Friend: Stay Connected With Your Closest Friends | Private iOS App",
  description:
    "Good Friend is a simple, private iOS app that helps you stay connected with the people who matter most. Track contact frequency, get gentle reminders, and log conversations — all stored locally on your device with zero tracking.",
  keywords: [
    "friend tracker",
    "connection reminder",
    "stay in touch app",
    "friendship tracker",
    "contact frequency",
    "relationship app",
    "iOS app",
    "React Native",
    "private app",
    "local storage",
    "birthday reminder",
    "friend groups",
    "accountability",
    "wellness app",
    "mental health",
    "social app",
    "no tracking",
    "privacy first",
    "local-first",
    "expo app",
    "react native ios",
    "contact management",
    "reminder app",
    "friendship app",
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
    title: "Good Friend: Stay Connected With Your Closest Friends",
    description:
      "A simple, private iOS app that reminds you to stay in touch with the people who matter. Zero tracking. All local.",
    siteName: "Good Friend",
    locale: "en_US",
    type: "website",
    url: `${siteConfig.url}/apps/goodfriend`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Friend: Never Miss a Moment",
    description:
      "Simple reminders to stay connected with your closest friends. Private. Local. No tracking.",
    creator: "@iPritamX",
  },
  alternates: {
    canonical: `${siteConfig.url}/apps/goodfriend`,
  },
  category: "Lifestyle & Wellness",
  icons: {
    icon: [
      { url: "/apps/goodfriend/icon.png" },
      { url: "/apps/goodfriend/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/apps/goodfriend/icon.png",
    apple: "/apps/goodfriend/icon.png",
  },
};

export default function GoodFriendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
