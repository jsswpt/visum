import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const AuthHomeChunk = lazy(() => import("./auth-home"));

export default function AuthHome() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthHomeChunk />
    </Suspense>
  );
}
