import { useList } from "effector-react";
import { $activeRooms } from "entities/room";
import { useNavigate } from "react-router-dom";
import { ROOM } from "shared/api/internal/consts";
import RoomCard from "shared/ui/room-card/room-card";

import st from "./styles.module.scss";

export default function ActiveRoomsChunk() {
  const navigate = useNavigate();

  const activeRooms = useList($activeRooms, (room) => (
    <li className={st.item} key={room.id}>
      <RoomCard
        id={room.id}
        ownerName={room.ownerName}
        previewUrl={room.previewUrl}
        roomName={room.name}
        type={room.type}
        usersCount={room.usersCount}
        onClick={(id) => navigate(ROOM + id)}
      />
    </li>
  ));

  return <ul className={st.list}>{activeRooms}</ul>;
}
