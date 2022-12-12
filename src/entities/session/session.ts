import { createEffect, createEvent, createStore, sample } from "effector";
import { getUser, User } from "shared/api/internal/user";

const getCurrentUserFx = createEffect(getUser);

export const onAppLoaded = createEvent<number>();

export const $session = createStore<User | null>(null);

export const $isLoading = createStore(false);

export const $authed = createStore(false);

const $password = createStore("");

/**При загрузке приложения запрашиваем юзера */
sample({
  clock: onAppLoaded,
  target: getCurrentUserFx,
});

/**Если в сессии есть юзер, authed становится true */
sample({
  clock: $session,
  fn: (session) => {
    console.log(session);
    if (session) {
      return true;
    }
    return false;
  },
  target: $authed,
});

/**Срабатывает при получении юзера */
sample({
  clock: getCurrentUserFx.doneData,
  target: $session,
});

sample({
  clock: $session,
  source: { authed: $authed, password: $password },
  filter: ({ authed, password }, session) => {
    if (!authed && session?.email && session.username && password) {
      return true;
    }
    return false;
  },
  fn: () => {
    console.log("srabotal");
  },
});

/**Срабатывает, когда происходит запрос получения юзера */
$isLoading.on(getCurrentUserFx, (_, prop) => true);

/**Срабатывает, когда запрос выполнен */
$isLoading.on(getCurrentUserFx.finally, (_, prop) => false);
