import { useList, useStore } from "effector-react";
import {
  $activeRooms,
  $isActiveRoomsLoading,
  $activeRoomsError,
  onActiveRoomsElementOpened,
} from "entities/room";
import { useEffect } from "react";

import st from "./styles.module.scss";

export default function ActiveRoomsChunk() {
  const activeRooms = useList($activeRooms, (room) => <div>{room.name}</div>);

  const isLoading = useStore($isActiveRoomsLoading);
  const error = useStore($activeRoomsError);

  useEffect(() => {
    onActiveRoomsElementOpened();
  }, []);

  if (error) {
    return <>Ошибка: {error}</>;
  }
  if (isLoading) {
    return <>loading</>;
  }

  return <ul>{activeRooms}</ul>;
}
