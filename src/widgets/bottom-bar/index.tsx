import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";

const BottomBarChunk = lazy(() => import("./bottom-bar"));

export default function BottomBar() {
  return (
    <Suspense fallback={<Loader />}>
      <BottomBarChunk />
    </Suspense>
  );
}
