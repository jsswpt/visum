import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const ErrorPageChunk = lazy(() => import("./error-page"));

export default function ErrorPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorPageChunk />
    </Suspense>
  );
}
