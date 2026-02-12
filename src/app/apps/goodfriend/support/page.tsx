import { getSupportMetadata } from "@/lib/project-helpers";
import { SupportPageContent } from "@/components/projects/support-page-content";

export const metadata = getSupportMetadata("goodfriend");

export default function GoodFriendSupportPage() {
  return <SupportPageContent slug="goodfriend" />;
}
