import { Suspense, lazy } from "react";
import PageLoader from "shared/ui/page-loader/page-loader";

const MyRoomsChunk = lazy(() => import("./my-rooms-page"));

export default function MyRoomsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <MyRoomsChunk />
    </Suspense>
  );
}
