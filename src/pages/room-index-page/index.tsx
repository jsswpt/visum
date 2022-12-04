import { Suspense, lazy } from "react";
import PageLoader from "shared/ui/page-loader/page-loader";

const RoomIndexChunk = lazy(() => import("./room-index-page"));

export default function RoomIndexPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RoomIndexChunk />
    </Suspense>
  );
}
