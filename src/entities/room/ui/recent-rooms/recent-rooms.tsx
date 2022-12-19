import { useStore } from "effector-react";
import { $recentRooms } from "entities/room";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import RoomCard from "shared/ui/room-card/room-card";

import { $screen } from "shared/idk/screen/screen";
import { useNavigate } from "react-router-dom";
import { publicNavigation } from "shared/api/internal/consts/routes";

export default function RecentRoomsChunk() {
  const navigate = useNavigate();

  const recentRooms = useStore($recentRooms);

  const screen = useStore($screen);

  return (
    <Swiper
      slidesPerView={
        screen === "xs"
          ? 1.25
          : screen === "sm"
          ? 2.25
          : screen === "md"
          ? 2.25
          : 3.25
      }
      centeredSlides
      loop
      spaceBetween={16}
    >
      {recentRooms.map((room) => (
        <SwiperSlide key={room.id}>
          <RoomCard
            id={room.id}
            ownerName={room.ownerName}
            previewUrl={room.previewUrl}
            roomName={room.name}
            type={room.type}
            usersCount={room.usersCount}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
