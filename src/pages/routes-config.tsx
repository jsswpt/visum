import { createBrowserRouter } from "react-router-dom";
import { privateRoutes, publicRoutes } from "shared/api/internal/consts";
import AuthHome from "./auth-home";
import AuthLayout from "./auth-layout";

import FeedPage from "./feed-page";
import FriendsRoomsPage from "./friends-rooms-page";
import MyRoomsPage from "./my-rooms-page";
import RoomIndexPage from "./room-index-page";
import RoomPage from "./room-page";
import RoomsLayout from "./rooms-layout/rooms-layout";
import SignInPage from "./sign-in-page";
import SignUpPage from "./sign-up-page";

export const publicRoutesConfig = createBrowserRouter([
  {
    path: publicRoutes.AUTH_LAYOUT,
    element: <AuthLayout />,
    children: [
      { path: publicRoutes.AUTH_HOME, element: <AuthHome /> },
      { path: publicRoutes.SIGN_IN, element: <SignInPage /> },
      { path: publicRoutes.SIGN_UP, element: <SignUpPage /> },
    ],
  },
  { path: publicRoutes.FEED, element: <FeedPage /> },
  { path: publicRoutes.ROOM_INDEX, element: <RoomIndexPage /> },
  { path: publicRoutes.ROOM + ":roomId", element: <RoomPage /> },
]);

export const privateRoutesConfig = createBrowserRouter([
  { path: privateRoutes.FEED, element: <FeedPage /> },
  {
    path: privateRoutes.ROOMS_LAYOUT,
    element: <RoomsLayout />,
    children: [
      { path: privateRoutes.MY_ROOMS, element: <MyRoomsPage /> },
      { path: privateRoutes.FRIENDS_ROOMS, element: <FriendsRoomsPage /> },
    ],
  },
  { path: privateRoutes.ROOM_INDEX, element: <RoomIndexPage /> },
  { path: privateRoutes.ROOM + ":roomId", element: <RoomPage /> },
]);
