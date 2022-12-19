import st from "./styles.module.scss";
import cn from "classnames";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RoomCardSkeleton = () => {
  return (
    <div className={cn(st.room_card)}>
      <div className={st.img_wrap}>
        <Skeleton className={st.img} />
      </div>
      <div className={st.info_wrap}>
        <div className={st.info_top}>
          <Skeleton className={st.title} />
        </div>
        <Skeleton className={st.title} />
      </div>
    </div>
  );
};

export default RoomCardSkeleton;
