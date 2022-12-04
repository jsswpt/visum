import { Suspense, lazy } from "react";
import PageLoader from "shared/ui/page-loader/page-loader";

const ActiveRoomsChunk = lazy(() => import("./active-rooms-page"));

export default function ActiveRoomsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ActiveRoomsChunk />
    </Suspense>
  );
}
