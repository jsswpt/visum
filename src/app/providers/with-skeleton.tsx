import st from "./styles.module.scss";
import cn from "classnames";

import { SkeletonTheme } from "react-loading-skeleton";

export const withSkeleton = (component: () => React.ReactNode) => () => {
  return (
    <SkeletonTheme
      baseColor="var(--surface)"
      highlightColor="var(--background)"
    >
      {component()}
    </SkeletonTheme>
  );
};
