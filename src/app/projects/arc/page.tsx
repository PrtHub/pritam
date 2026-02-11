import { getProjectMetadata } from "@/lib/project-helpers";
import { ProjectPageContent } from "@/components/projects/project-page-content";

export const metadata = getProjectMetadata("arc");

export default function ArcPage() {
  return <ProjectPageContent slug="arc" />;
}
