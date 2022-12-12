import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Loader from "shared/ui/loader/loader";

const SetAvatarChunk = lazy(() => import("./set-avatar"));

export default function SetAvatar() {
  return (
    <Suspense fallback={<Loader />}>
      <SetAvatarChunk />
    </Suspense>
  );
}
