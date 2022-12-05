import { useStore } from "effector-react";
import { $recentRooms } from "entities/room";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import RoomCard from "shared/ui/room-card/room-card";

import { useScreen } from "shared/lib/useScreen";

import st from "./styles.module.scss";

export default function RecentRoomsChunk() {
  const recentRooms = useStore($recentRooms);

  const screen = useScreen();

  return (
    <Swiper
      slidesPerView={screen === "xs" ? 1.25 : screen === "sm" ? 2.25 : 3.25}
      centeredSlides
      loop
      spaceBetween={16}
    >
      {recentRooms.map((room) => (
        <SwiperSlide key={room.id}>
          <RoomCard
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
