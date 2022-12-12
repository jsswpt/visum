import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const EmailLoginPageChunk = lazy(() => import("./email-login-page"));

export default function EmailLoginPage() {
  return (
    <Suspense fallback={<Loader />}>
      <EmailLoginPageChunk />
    </Suspense>
  );
}
