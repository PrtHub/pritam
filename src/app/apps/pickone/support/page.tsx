import { getSupportMetadata } from "@/lib/project-helpers";
import { SupportPageContent } from "@/components/projects/support-page-content";

export const metadata = getSupportMetadata("pickone");

export default function PickOneSupportPage() {
  return <SupportPageContent slug="pickone" />;
}
