import { useList } from "effector-react";
import { $activeRooms } from "entities/room";
import { useNavigate } from "react-router-dom";
import { publicNavigation } from "shared/api/internal/consts/routes";
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
        onClick={(id) => navigate(publicNavigation.ROOM + id)}
      />
    </li>
  ));

  return <ul className={st.list}>{activeRooms}</ul>;
}
