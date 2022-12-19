import { Suspense, lazy } from "react";

import st from "./styles.module.scss";

import Skeleton from "react-loading-skeleton";

const HeaderChunk = lazy(() => import("./feed-header"));

export default function FeedHeader() {
  return (
    <Suspense fallback={<Skeleton className={st.header} />}>
      <HeaderChunk />
    </Suspense>
  );
}
