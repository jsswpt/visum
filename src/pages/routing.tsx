import { useStore } from "effector-react";
import { $authed } from "entities/session";
import { RouterProvider } from "react-router-dom";
import { privateRoutesConfig, publicRoutesConfig } from "./routes-config";

export default function Routing() {
  const isAuth = useStore($authed);
  return (
    <RouterProvider
      router={isAuth ? privateRoutesConfig : publicRoutesConfig}
    />
  );
}
