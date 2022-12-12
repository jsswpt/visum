import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";
import { AuthBlock } from "./auth-block.type";

const AuthBlockLayoutChunk = lazy(() => import("./auth-block-layout"));

export default function AuthBlockLayout(props: AuthBlock) {
  return (
    <Suspense fallback={<Loader />}>
      <AuthBlockLayoutChunk {...props} />
    </Suspense>
  );
}
