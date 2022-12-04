import { useList, useStore } from "effector-react";
import {
  $recentRooms,
  $isRecentRoomsLoading,
  onRecentRoomsElementOpened,
  $recentRoomsError,
} from "entities/room";
import { useEffect } from "react";

import st from "./styles.module.scss";

export default function RecentRoomsChunk() {
  const recentRooms = useList($recentRooms, (room) => <div>{room.name}</div>);

  const isLoading = useStore($isRecentRoomsLoading);
  const error = useStore($recentRoomsError);

  useEffect(() => {
    onRecentRoomsElementOpened();
  }, []);

  if (error) {
    return <div>ошибка: {error}</div>;
  }
  if (isLoading) {
    return <>loading</>;
  }

  return <ul>{recentRooms}</ul>;
}
