import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const AuthLayoutChunk = lazy(() => import("./auth-layout"));

export default function AuthLayout() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthLayoutChunk />
    </Suspense>
  );
}
