import { useStore } from "effector-react";
import { $isLoading } from "entities/session";
import Routing from "pages/routing";
import { useEffect } from "react";
import { useScreen } from "shared/lib/useScreen";
import PageLoader from "shared/ui/page-loader/page-loader";
import { withProviders } from "./providers/with-providers";

import "./index.scss";

export const App = withProviders(() => {
  useScreen();
  useEffect(() => {
    document.body.className = "dark";
  }, []);

  const isLoading = useStore($isLoading);

  return isLoading ? <PageLoader /> : <Routing />;
});
