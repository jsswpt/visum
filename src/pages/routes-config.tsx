import { createBrowserRouter } from "react-router-dom";
import { privateRoutes, publicRoutes } from "shared/api/internal/consts";
import AuthHome from "./auth-home";
import AuthLayout from "./auth-layout";
import AvatarPage from "./avatar-page";
import EmailLoginPage from "./email-login-page";
import ErrorPage from "./error-page";

import FeedPage from "./feed-page";
import FriendsRoomsPage from "./friends-rooms-page";
import MyRoomsPage from "./my-rooms-page";
import PasswordPage from "./password-page";
import RoomIndexPage from "./room-index-page";
import RoomPage from "./room-page";
import RoomsLayout from "./rooms-layout/rooms-layout";
import SignInPage from "./sign-in-page";
import SignUpPage from "./sign-up-page";

export const publicRoutesConfig = createBrowserRouter([
  {
    path: publicRoutes.AUTH_LAYOUT,
    errorElement: <ErrorPage />,
    element: <AuthLayout />,
    children: [
      {
        path: publicRoutes.AUTH_HOME,
        element: <AuthHome />,
        errorElement: <ErrorPage />,
      },
      {
        path: publicRoutes.SIGN_IN,
        element: <SignInPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: publicRoutes.SIGN_UP,
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: publicRoutes.EMAIL_LOGIN,
            element: <EmailLoginPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: publicRoutes.AVATAR,
            element: <AvatarPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: publicRoutes.PASSWORD,
            element: <PasswordPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
  {
    path: publicRoutes.FEED,
    element: <FeedPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: publicRoutes.ROOM_INDEX,
    element: <RoomIndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: publicRoutes.ROOM + ":roomId",
    element: <RoomPage />,
    errorElement: <ErrorPage />,
  },
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
