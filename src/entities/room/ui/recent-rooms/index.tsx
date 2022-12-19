import { useStore } from "effector-react";
import {
  $isRecentRoomsLoading,
  onRecentRoomsElementOpened,
} from "entities/room/room";
import { Suspense, lazy, useEffect } from "react";
import { $screen } from "shared/idk/screen/screen";
import Loader from "shared/ui/loader/loader";
import RoomCardSkeleton from "shared/ui/room-card/room-card-skeleton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

const RecentRoomsChunk = lazy(() => import("./recent-rooms"));

export const RecentRooms = () => {
  const isLoading = useStore($isRecentRoomsLoading);

  const screen = useStore($screen);

  useEffect(() => {
    onRecentRoomsElementOpened();
  }, []);

  return (
    <Suspense
      fallback={
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
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
        </Swiper>
      }
    >
      {isLoading ? (
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
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCardSkeleton />
          </SwiperSlide>
        </Swiper>
      ) : (
        <RecentRoomsChunk />
      )}
    </Suspense>
  );
};
