import { useCallback, useEffect, useState } from "react";
import { setScreen, onAppLoaded } from "shared/idk/screen/screen";
import { LG, MD, SM, XS } from "shared/modules/breakpoints";

export const useScreen = () => {
  const setScreenType = useCallback((width: number) => {
    if (width >= XS && width < SM) {
      setScreen("xs");
    } else if (width >= SM && width < MD) {
      setScreen("sm");
    } else if (width >= MD && width < LG) {
      setScreen("md");
    } else if (width >= LG) {
      setScreen("lg");
    }
  }, []);

  useEffect(() => {
    onAppLoaded(window.innerWidth);
    window.addEventListener("resize", () => setScreenType(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setScreenType(window.innerWidth)
      );
    };
  }, []);
};
