import { getRandomInt } from "shared/lib/getRandomInt";
import { Room } from "../room.type";

const rooms: Room[] = [
  {
    id: 1,
    name: "Комната пользователя @jsswpt",
    ownerId: 1,
    previewUrl: "https://b1.filmpro.ru/c/489133.jpg",
    type: "public",
    usersCount: 3,
    videoUrl: "budet url",
  },
  {
    id: 5,
    name: "Комната пользователя @chi_Zz_",
    ownerId: 5,
    previewUrl:
      "https://hotkit.top/images/stories/serials/Univer_Nov_Obsch_poster.jpg",
    type: "private",
    usersCount: 5,
    videoUrl: "budet url",
  },
  {
    id: 10,
    name: "Комната пользователя @jsswpt",
    ownerId: 1,
    previewUrl: "https://i.ytimg.com/vi/YQrb3a8wxjw/maxresdefault.jpg",
    type: "public",
    usersCount: 6,
    videoUrl: "budet url",
  },
  {
    id: 15,
    name: "Комната пользователя @chi_Zz_",
    ownerId: 5,
    previewUrl: "https://i.ytimg.com/vi/AO0Bw44piWI/maxresdefault.jpg",
    type: "private",
    usersCount: 1,
    videoUrl: "budet url",
  },
  {
    id: 20,
    name: "Комната пользователя @chi_Zz_",
    ownerId: 5,
    previewUrl: "https://i.ytimg.com/vi/AO0Bw44piWI/maxresdefault.jpg",
    type: "private",
    usersCount: 10,
    videoUrl: "budet url",
  },
  {
    id: 25,
    name: "Комната пользователя @jsswpt",
    ownerId: 1,
    previewUrl: "https://i.ytimg.com/vi/7fCX_chxqjU/maxresdefault.jpg",
    type: "public",
    usersCount: 3,
    videoUrl: "budet url",
  },
  {
    id: 30,
    name: "Комната пользователя @chi_Zz_",
    ownerId: 5,
    previewUrl:
      "https://www.film.ru/sites/default/files/movies/posters/6888283-1387964.jpg",
    type: "private",
    usersCount: 10,
    videoUrl: "budet url",
  },
  {
    id: 35,
    name: "Комната пользователя @jsswpt",
    ownerId: 1,
    previewUrl:
      "https://pikuco.ru/upload/test_stable/5d9/5d9e0976033820d9f2738b3bf4c337b1.jpg",
    type: "public",
    usersCount: 3,
    videoUrl: "budet url",
  },
];

export const getFriendsRooms = async () => {
  return new Promise<Room[]>((res, rej) => {
    const timeout = setTimeout(() => {
      if (getRandomInt(1, 0)) {
        res(rooms);
      } else {
        throw new Error("Не могу получить активные комнаты");
      }

      clearTimeout(timeout);
    }, 0);
  });
};
