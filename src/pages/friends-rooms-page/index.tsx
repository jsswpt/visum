import { Suspense, lazy } from "react";
import PageLoader from "shared/ui/page-loader/page-loader";

const FriendsRoomChunk = lazy(() => import("./friends-rooms-page"));

export default function FriendsRoomPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <FriendsRoomChunk />
    </Suspense>
  );
}
