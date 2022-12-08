import { Suspense, lazy } from "react";
import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";
import Skeleton from "shared/ui/skeleton/skeleton";

const SidebarChunk = lazy(() => import("./sidebar"));

export default function Sidebar() {
  return (
    <Suspense fallback={<Skeleton className={st.sidebar}></Skeleton>}>
      <SidebarChunk />
    </Suspense>
  );
}
