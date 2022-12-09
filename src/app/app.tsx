import { useStore } from "effector-react";
import { $isLoading } from "entities/session";
import Routing from "pages/routing";
import { useEffect } from "react";
import { useScreen } from "shared/lib/useScreen";
import PageLoader from "shared/ui/page-loader/page-loader";
import "./index.scss";
import { withProviders } from "./providers/with-providers";

export const App = withProviders(() => {
  useScreen();
  useEffect(() => {
    document.body.className = "dark";
  }, []);

  const isLoading = useStore($isLoading);

  console.log(isLoading);

  return isLoading ? <PageLoader /> : <Routing />;
});
