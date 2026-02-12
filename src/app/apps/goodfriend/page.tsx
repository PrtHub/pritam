import { getProjectMetadata } from "@/lib/project-helpers";
import { ProjectPageContent } from "@/components/projects/project-page-content";

export const metadata = getProjectMetadata("goodfriend");

export default function GoodFriendPage() {
  return <ProjectPageContent slug="goodfriend" />;
}
