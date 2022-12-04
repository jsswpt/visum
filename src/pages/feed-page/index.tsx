import { Suspense, lazy } from "react";
import PageLoader from "shared/ui/page-loader/page-loader";

const FeedPageChunk = lazy(() => import("./feed-page"));

export default function FeedPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <FeedPageChunk />
    </Suspense>
  );
}
