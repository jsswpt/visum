import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const SignUpFeatureChunk = lazy(() => import("./sign-up-feature"));

export default function SignUpFeature() {
  return (
    <Suspense fallback={<Loader />}>
      <SignUpFeatureChunk />
    </Suspense>
  );
}
