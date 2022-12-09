import { User } from "./user.type";

const users: User[] = [
  { email: "somemail@ya.ru", id: 1, roles: [], username: "jsswpt" },
  { email: "secondmail@ya.ru", id: 2, roles: [], username: "kill4real" },
  { email: "olegator@ya.ru", id: 3, roles: [], username: "poporara" },
];

export const getUser = async (userId: number) => {
  return new Promise<User>((res, rej) => {
    const timeout = setTimeout(() => {
      const findedUser = users.find((user) => user.id === userId);

      if (findedUser) {
        res(findedUser);
      } else {
        rej(new Error("Can't find user"));
      }
      clearTimeout(timeout);
    }, 2000);
  });
};
