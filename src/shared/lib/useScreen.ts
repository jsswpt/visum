import { useCallback, useEffect, useState } from "react";
import { LG, SM, XS } from "shared/modules/breakpoints";

export const useScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const setCurrentWidth = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setCurrentWidth);

    return () => {
      window.removeEventListener("resize", setCurrentWidth);
    };
  }, []);

  if (width > XS && width < SM) {
    return "xs";
  } else if (width >= SM && width < LG) {
    return "sm";
  }
  return "lg";
};
