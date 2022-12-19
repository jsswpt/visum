import { Suspense, lazy } from "react";
import st from "./styles.module.scss";

import Skeleton from "react-loading-skeleton";

const SidebarChunk = lazy(() => import("./sidebar"));

export default function Sidebar() {
  return (
    <Suspense fallback={<Skeleton className={st.sidebar}></Skeleton>}>
      <SidebarChunk />
    </Suspense>
  );
}
