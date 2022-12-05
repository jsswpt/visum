import { useStore } from "effector-react";
import {
  $isRecentRoomsLoading,
  onRecentRoomsElementOpened,
} from "entities/room/room";
import { Suspense, lazy, useEffect } from "react";
import Loader from "shared/ui/loader/loader";

import st from "./styles.module.scss";

const RecentRoomsChunk = lazy(() => import("./recent-rooms"));

export const RecentRooms = () => {
  const isLoading = useStore($isRecentRoomsLoading);

  useEffect(() => {
    onRecentRoomsElementOpened();
  }, []);

  return (
    <Suspense
      fallback={
        <div className={st.loader_wrap}>
          <Loader />
        </div>
      }
    >
      {isLoading ? (
        <div className={st.loader_wrap}>
          <Loader />
        </div>
      ) : (
        <RecentRoomsChunk />
      )}
    </Suspense>
  );
};
