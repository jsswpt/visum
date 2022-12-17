import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import PageLoader from "shared/ui/page-loader/page-loader";

const AuthLayoutChunk = lazy(() => import("./auth-layout"));

export default function AuthLayout() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AuthLayoutChunk />
    </Suspense>
  );
}
