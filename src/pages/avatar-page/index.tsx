import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";

const AvatarPageChunk = lazy(() => import("./avatar-page"));

export default function AvatarPage() {
  return (
    <Suspense fallback={<Loader />}>
      <AvatarPageChunk />
    </Suspense>
  );
}
