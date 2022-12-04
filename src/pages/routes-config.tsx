import { createBrowserRouter } from "react-router-dom";
import {
  ACTIVE_ROOMS,
  FEED,
  FRIENDS_ROOMS,
  MY_ROOMS,
  ROOM,
  ROOMS_LAYOUT,
  ROOM_INDEX,
} from "shared/api/internal/consts";

import ActiveRoomsPage from "./active-rooms-page";
import FeedPage from "./feed-page";
import FriendsRoomPage from "./friends-rooms-page";
import MyRoomsPage from "./my-rooms-page";
import RoomIndexPage from "./room-index-page";
import RoomPage from "./room-page";
import RoomsLayout from "./rooms-layout/rooms-layout";

export const publicRoutesConfig = createBrowserRouter([
  { path: FEED, element: <FeedPage /> },
  {
    path: ROOMS_LAYOUT,
    element: <RoomsLayout />,
    children: [
      { path: MY_ROOMS, element: <MyRoomsPage /> },
      { path: FRIENDS_ROOMS, element: <FriendsRoomPage /> },
      { path: ACTIVE_ROOMS, element: <ActiveRoomsPage /> },
    ],
  },
  { path: ROOM_INDEX, element: <RoomIndexPage /> },
  { path: ROOM + ":roomId", element: <RoomPage /> },
]);
