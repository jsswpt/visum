import Routing from "pages/routing";
import { useEffect } from "react";
import { useScreen } from "shared/lib/useScreen";
import "./index.scss";

export const App = () => {
  useScreen();
  useEffect(() => {
    document.body.className = "dark";
  }, []);
  return <Routing />;
};
