import { User } from "./user.type";
import axios from "axios";
import { getEnvVar } from "shared/lib/get-env-var";
import { getRandomInt } from "shared/lib/get-random-int";

const userApiInstanse = axios.create({
  baseURL: getEnvVar("REACT_APP_API_BASE_URL", "") + "users",
});

export const getUser = async (userId: number): Promise<User> => {
  const userResp = await userApiInstanse.get(``, { params: { id: userId } });

  const userData = userResp.data as User[];

  if (userData.length) {
    return userData[0];
  }

  throw new Error("Юзер не найден ;(");
};

export const signUp = async (user: User): Promise<User> => {
  const userResp = await userApiInstanse.post<User>("", {
    ...user,
    id: getRandomInt(1000, 100000),
  });

  return userResp.data;
};
