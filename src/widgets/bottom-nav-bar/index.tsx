import { Suspense, lazy } from "react";

import Skeleton from "react-loading-skeleton";
import BottomBarSkeleton from "shared/ui/bottom-bar/bottom-bar-skeleton";

import st from "./styles.module.scss";

const BottomNavBarChunk = lazy(() => import("./bottom-nav-bar"));

export default function BottomNavBar() {
  return (
    <Suspense fallback={<BottomBarSkeleton />}>
      <BottomNavBarChunk />
    </Suspense>
  );
}
