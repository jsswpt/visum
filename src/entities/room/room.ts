import { createEffect, createStore, sample, createEvent } from "effector";
import { getActiveRooms, getRecentRooms, Room } from "shared/api/internal/room";

const getActiveRoomsFx = createEffect(getActiveRooms);
const getRecentRoomsFx = createEffect(getRecentRooms);

export const onActiveRoomsElementOpened = createEvent();
export const onRecentRoomsElementOpened = createEvent();

export const $activeRooms = createStore<Room[]>([]);
export const $isActiveRoomsLoading = createStore(false);
export const $activeRoomsError = createStore("");

export const $recentRooms = createStore<Room[]>([]);
export const $isRecentRoomsLoading = createStore(false);
export const $recentRoomsError = createStore("");

export const $friendsRooms = createStore<Room[]>([]);

sample({
  clock: onActiveRoomsElementOpened,
  target: getActiveRoomsFx,
});

/**Получение комнат */
sample({
  clock: onRecentRoomsElementOpened,
  target: getRecentRoomsFx,
});

sample({
  clock: getActiveRoomsFx.doneData,
  target: $activeRooms,
});

$isActiveRoomsLoading.on(getActiveRoomsFx, () => true);
$isActiveRoomsLoading.on(getActiveRoomsFx.doneData, () => false);

sample({
  clock: getRecentRoomsFx.doneData,
  target: $recentRooms,
});

$isRecentRoomsLoading.on(getRecentRoomsFx, () => true);
$isRecentRoomsLoading.on(getRecentRoomsFx.doneData, () => false);

/**Отлов ошибок */
sample({
  clock: getActiveRoomsFx.failData,
  fn: (data) => {
    console.log("Oshibka active");
    return data.message;
  },
  target: $activeRoomsError,
});

$isActiveRoomsLoading.on(getActiveRoomsFx.failData, () => false);

sample({
  clock: getRecentRoomsFx.failData,
  fn: (data) => {
    console.log("Oshibka recent");
    return data.message;
  },
  target: $recentRoomsError,
});

$isRecentRoomsLoading.on(getRecentRoomsFx.failData, () => false);
