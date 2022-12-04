import { RouterProvider } from "react-router-dom";
import { publicRoutesConfig } from "./routes-config";

export default function Routing() {
  return <RouterProvider router={publicRoutesConfig} />;
}
