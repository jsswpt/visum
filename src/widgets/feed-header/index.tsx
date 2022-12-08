import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";

const HeaderChunk = lazy(() => import("./feed-header"));

export default function FeedHeader() {
  return (
    <Suspense fallback={<Loader />}>
      <HeaderChunk />
    </Suspense>
  );
}
