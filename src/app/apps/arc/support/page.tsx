import { getSupportMetadata } from "@/lib/project-helpers";
import { SupportPageContent } from "@/components/projects/support-page-content";

export const metadata = getSupportMetadata("arc");

export default function ArcSupportPage() {
  return <SupportPageContent slug="arc" />;
}
