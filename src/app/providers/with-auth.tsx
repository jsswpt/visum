import { onAppLoaded } from "entities/session";
import { useEffect } from "react";

export const withAuth = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    onAppLoaded(10);
  }, []);

  return <>{component()}</>;
};
