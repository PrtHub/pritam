import { getSupportMetadata } from "@/lib/project-helpers";
import { SupportPageContent } from "@/components/projects/support-page-content";

export const metadata = getSupportMetadata("hackerbadges");

export default function HackerBadgesSupportPage() {
  return <SupportPageContent slug="hackerbadges" />;
}
