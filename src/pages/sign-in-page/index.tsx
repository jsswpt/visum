import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const SignInPageChunk = lazy(() => import("./sign-in-page"));

export default function SignInPage() {
  return (
    <Suspense fallback={<Loader />}>
      <SignInPageChunk />
    </Suspense>
  );
}
