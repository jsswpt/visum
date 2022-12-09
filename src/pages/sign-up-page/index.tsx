import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const SignUpPageChunk = lazy(() => import("./sign-up-page"));

export default function SignUpPage() {
  return (
    <Suspense fallback={<Loader />}>
      <SignUpPageChunk />
    </Suspense>
  );
}
