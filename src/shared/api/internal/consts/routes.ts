export const publicRoutes = {
  FEED: "/",
  ROOM_INDEX: "/room/",
  ROOM: "/room/",
  AUTH_LAYOUT: "/auth/",
  AUTH_HOME: "",
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up/",
  EMAIL_LOGIN: "",
  AVATAR: "avatar",
  PASSWORD: "password",
};

export const publicNavigation = {
  FEED: `${publicRoutes.FEED}`,
  ROOM_INDEX: `${publicRoutes.ROOM_INDEX}`,
  ROOM: `${publicRoutes.ROOM}`,
  AUTH_LAYOUT: `${publicRoutes.AUTH_LAYOUT}`,
  AUTH_HOME: `${publicRoutes.AUTH_LAYOUT}${publicRoutes.AUTH_HOME}`,
  SIGN_IN: `${publicRoutes.AUTH_LAYOUT}${publicRoutes.SIGN_IN}`,
  SIGN_UP: `${publicRoutes.AUTH_LAYOUT}${publicRoutes.SIGN_UP}`,
  EMAIL_LOGIN: `${publicRoutes.AUTH_LAYOUT}${publicRoutes.SIGN_UP}${publicRoutes.EMAIL_LOGIN}`,
  AVATAR: `${publicRoutes.AUTH_LAYOUT}${publicRoutes.SIGN_UP}${publicRoutes.AVATAR}`,
  PASSWORD: `${publicRoutes.AUTH_LAYOUT}${publicRoutes.SIGN_UP}${publicRoutes.PASSWORD}`,
};

export const privateRoutes = {
  FEED: "/",
  ROOMS_LAYOUT: "/rooms/",
  MY_ROOMS: "",
  FRIENDS_ROOMS: "friends",
  ROOM_INDEX: "/room/",
  ROOM: "/room/",
};

export const privateNavigation = {
  FEED: `${privateRoutes.FEED}`,
  ROOMS_LAYOUT: `${privateRoutes.ROOMS_LAYOUT}`,
  MY_ROOMS: `${privateRoutes.ROOMS_LAYOUT}${privateRoutes.MY_ROOMS}`,
  FRIENDS_ROOMS: `${privateRoutes.ROOMS_LAYOUT}${privateRoutes.FRIENDS_ROOMS}`,
  ROOM_INDEX: `${privateRoutes.ROOM_INDEX}`,
  ROOM: `${privateRoutes.ROOM}`,
};
