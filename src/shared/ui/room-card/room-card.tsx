import { useEffect, createRef } from "react";
import classNames from "classnames";
import {
  MdLockOutline,
  MdOutlineLockOpen,
  MdPersonOutline,
} from "react-icons/md";

import Card from "../card/card";
import { useInView } from "react-intersection-observer";

import cn from "classnames";
import st from "./styles.module.scss";
import RoomCardSkeleton from "./room-card-skeleton";

type RoomCard = {
  id: number;
  previewUrl: string;
  ownerName: string;
  type: "private" | "public";
  roomName: string;
  usersCount: number;
  onClick?: (id: number) => void;
};

export default function RoomCard(props: RoomCard) {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(st.room_card, props.onClick && st.pointer)}
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.id);
        }
      }}
    >
      <div className={st.img_wrap}>
        {inView && <img src={props.previewUrl} alt="" className={st.img} />}
      </div>
      <div className={st.info_wrap}>
        <div className={st.info_top}>
          <p className={st.title}>{props.roomName}</p>
        </div>
        <div className={st.info_bottom}>
          <div className={st.bottom_wrap}>
            {props.type === "private" ? (
              <MdLockOutline className={cn(st.icon)} />
            ) : (
              <MdOutlineLockOpen className={cn(st.icon)} />
            )}
            <p className={st.subtitle}>{props.ownerName}</p>
          </div>
          <div className={st.bottom_wrap}>
            <MdPersonOutline className={cn(st.icon)} />
            <p className={st.subtitle}>{props.usersCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
