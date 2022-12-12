import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";

const PasswordPageChunk = lazy(() => import("./password-page"));

export default function PasswordPage() {
  return (
    <Suspense fallback={<Loader />}>
      <PasswordPageChunk />
    </Suspense>
  );
}
