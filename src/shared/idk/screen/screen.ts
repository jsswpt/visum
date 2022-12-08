import { createStore, createEvent, sample } from "effector";
import { XS, SM, MD, LG } from "shared/modules/breakpoints";

type Screen = "xs" | "sm" | "md" | "lg" | "calculating";

export const $screen = createStore<Screen>("calculating");

export const onAppLoaded = createEvent<number>();
export const setScreen = createEvent<Screen>();

sample({
  clock: onAppLoaded,
  fn: (width) => {
    if (width >= XS && width < SM) {
      return "xs";
    } else if (width >= SM && width < MD) {
      return "sm";
    } else if (width >= MD && width < LG) {
      return "md";
    }
    return "lg";
  },
  target: setScreen,
});

sample({
  clock: setScreen,
  target: $screen,
});
