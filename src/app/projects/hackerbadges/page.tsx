import { getProjectMetadata } from "@/lib/project-helpers";
import { ProjectPageContent } from "@/components/projects/project-page-content";

export const metadata = getProjectMetadata("hackerbadges");

export default function HackerbadgesPage() {
  return <ProjectPageContent slug="hackerbadges" />;
}
