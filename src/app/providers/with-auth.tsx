import { onAppLoaded } from "entities/session";
import { useEffect } from "react";

export const withAuth = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      onAppLoaded(+userId);
    }
  }, []);

  return <>{component()}</>;
};
