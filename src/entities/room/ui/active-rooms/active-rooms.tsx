import { useList } from "effector-react";
import { $activeRooms } from "entities/room";
import RoomCard from "shared/ui/room-card/room-card";

import st from "./styles.module.scss";

export default function ActiveRoomsChunk() {
  const activeRooms = useList($activeRooms, (room) => (
    <li className={st.item} key={room.id}>
      <RoomCard
        ownerName={room.ownerName}
        previewUrl={room.previewUrl}
        roomName={room.name}
        type={room.type}
        usersCount={room.usersCount}
      />
    </li>
  ));

  return <ul className={st.list}>{activeRooms}</ul>;
}
