import { Suspense, lazy } from "react";

import Skeleton from "shared/ui/skeleton/skeleton";

import st from "./styles.module.scss";

const BottomNavBarChunk = lazy(() => import("./bottom-nav-bar"));

export default function BottomNavBar() {
  return (
    <Suspense fallback={<Skeleton className={st.loader} />}>
      <BottomNavBarChunk />
    </Suspense>
  );
}
