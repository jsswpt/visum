import { Suspense, lazy } from "react";
import PageLoader from "shared/ui/page-loader/page-loader";

const RoomChunk = lazy(() => import("./room-page"));

export default function RoomPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RoomChunk />
    </Suspense>
  );
}
