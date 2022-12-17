import { createEvent, createStore, sample } from "effector";
import { useStore } from "effector-react";
import { $session } from "entities/session";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicNavigation } from "shared/api/internal/consts/routes";
import { User } from "shared/api/internal/user";

const setEmail = createEvent<string>();
const setLogin = createEvent<string>();

const setEmailAndLogin = createEvent();

const onSubmit = createEvent();

const $email = createStore("");
const $login = createStore("");

$email.on(setEmail, (_, value) => {
  return value;
});

$login.on(setLogin, (_, value) => {
  return value;
});

sample({
  clock: onSubmit,
  target: setEmailAndLogin,
});

sample({
  clock: setEmailAndLogin,
  source: { email: $email, login: $login, session: $session },
  fn: ({ email, login, session }): User => {
    console.log("засетил");
    if (session) {
      return { ...session, username: login, email };
    }
    return { avatarUrl: "", id: 0, roles: [], username: login, email };
  },
  target: $session,
});

export const useSetEmailAndLogin = () => {
  const email = useStore($email);
  const login = useStore($login);
  const [isButtonAvailable, setIsButtonAvailable] = useState(true);

  const navigate = useNavigate();

  const onEmailEntered = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
  };

  const onLoginEntered = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(evt.currentTarget.value);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setIsButtonAvailable(false);
    onSubmit();

    const timeout = setTimeout(() => {
      navigate(publicNavigation.AVATAR);
      setIsButtonAvailable(true);
      clearTimeout(timeout);
    }, 1000);
  };

  return {
    email,
    login,
    onEmailEntered,
    onLoginEntered,
    handleSubmit,
    isButtonAvailable,
  };
};
