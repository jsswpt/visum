import { useStore } from "effector-react";
import {
  $isActiveRoomsLoading,
  onActiveRoomsElementOpened,
} from "entities/room/room";
import { Suspense, lazy, useEffect } from "react";
import Loader from "shared/ui/loader/loader";

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
        <ActiveRoomsChunk />
      )}
    </Suspense>
  );
};
