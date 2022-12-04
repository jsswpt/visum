import { Suspense, lazy } from "react";

const RecentRoomsChunk = lazy(() => import("./recent-rooms"));

export const RecentRooms = () => {
  return (
    <Suspense fallback={"Component is loading"}>
      <RecentRoomsChunk />
    </Suspense>
  );
};
