import st from "./styles.module.scss";
import cn from "classnames";

import Skeleton from "react-loading-skeleton";

const BottomBarSkeleton = () => {
  return <Skeleton className={st.bottom_bar} />;
};

export default BottomBarSkeleton;
