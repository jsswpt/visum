import { Suspense, lazy } from "react";

const ActiveRoomsChunk = lazy(() => import("./active-rooms"));

export const ActiveRooms = () => {
  return (
    <Suspense fallback={"Component is loading"}>
      <ActiveRoomsChunk />
    </Suspense>
  );
};
