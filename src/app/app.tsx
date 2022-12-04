import Routing from "pages/routing";
import { useEffect } from "react";
import "./index.scss";

export const App = () => {
  useEffect(() => {
    document.body.className = "dark";
  }, []);
  return <Routing />;
};
