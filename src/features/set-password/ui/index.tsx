import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";

const SetPasswordChunk = lazy(() => import("./set-password"));

export default function SetPassword() {
  return (
    <Suspense fallback={<Loader />}>
      <SetPasswordChunk />
    </Suspense>
  );
}
