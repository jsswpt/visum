import { Suspense, lazy } from "react";

import Loader from "shared/ui/loader/loader";
import { Avatar as AvatarT } from "./avatar.type";

const AvatarChunk = lazy(() => import("./avatar"));

export default function Avatar(props: AvatarT) {
  return (
    <Suspense fallback={<Loader size={props.size} />}>
      <AvatarChunk {...props} />
    </Suspense>
  );
}
