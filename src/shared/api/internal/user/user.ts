import { User } from "./user.type";

const users: User[] = [
  {
    email: "somemail@ya.ru",
    id: 1,
    roles: [],
    username: "jsswpt",
    avatarUrl:
      "https://sun9-east.userapi.com/sun9-73/s/v1/if2/xIQeK2TlpHnw0KnxgyvCtt49uhh2vz4xlxmZ2X4w5uTDGK847gocHhnJSf69CRJNZjagW_xyeNpXwi4LjkhlRR2B.jpg?size=539x539&quality=96&type=album",
  },
  {
    email: "secondmail@ya.ru",
    id: 2,
    roles: [],
    username: "kill4real",
    avatarUrl:
      "https://sun9-east.userapi.com/sun9-26/s/v1/ig2/Ue4jxLFN2OMIUnV_WSGIZzvkBfLsGKMbZYlWCFcSQ1XNDE79hsmCOnzSitpTvoR1KUC6OCkrxGaDnAyeJ0nEcF7F.jpg?size=541x265&quality=95&type=album",
  },
  {
    email: "olegator@ya.ru",
    id: 3,
    roles: [],
    username: "poporara",
    avatarUrl:
      "https://sun9-north.userapi.com/sun9-87/s/v1/ig2/wmxL07UOHf5nFhvWTIxrcfOokywV1batrs7Ohse_QxuDA9r5wkFkfG0u3lFPT6TS1Mfd86JDqmqRw5V8EKMlw3hk.jpg?size=567x694&quality=96&type=album",
  },
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
