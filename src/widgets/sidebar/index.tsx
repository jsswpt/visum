import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";

const SidebarChunk = lazy(() => import("./sidebar"));

export default function Sidebar() {
  return (
    <Suspense fallback={<Loader />}>
      <SidebarChunk />
    </Suspense>
  );
}
