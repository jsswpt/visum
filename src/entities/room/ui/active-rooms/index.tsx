import { useStore } from "effector-react";
import {
  $isActiveRoomsLoading,
  onActiveRoomsElementOpened,
} from "entities/room/room";
import { Suspense, lazy, useEffect } from "react";
import Loader from "shared/ui/loader/loader";
import RoomCardSkeleton from "shared/ui/room-card/room-card-skeleton";

import st from "./styles.module.scss";

const ActiveRoomsChunk = lazy(() => import("./active-rooms"));

export const ActiveRooms = () => {
  const isLoading = useStore($isActiveRoomsLoading);

  useEffect(() => {
    onActiveRoomsElementOpened();
  }, []);

  return (
    <Suspense
      fallback={
        <ul className={st.list}>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
        </ul>
      }
    >
      {isLoading ? (
        <ul className={st.list}>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
          <li>
            <RoomCardSkeleton />
          </li>
        </ul>
      ) : (
        <ActiveRoomsChunk />
      )}
    </Suspense>
  );
};
