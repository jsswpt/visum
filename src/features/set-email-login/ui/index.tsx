import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const SetEmailLoginChunk = lazy(() => import("./set-email-login"));

export default function SetEmailLogin() {
  return (
    <Suspense fallback={<Loader />}>
      <SetEmailLoginChunk />
    </Suspense>
  );
}
