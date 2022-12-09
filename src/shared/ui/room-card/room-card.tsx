import { useEffect, createRef } from "react";
import classNames from "classnames";
import {
  MdLockOutline,
  MdOutlineLockOpen,
  MdPersonOutline,
} from "react-icons/md";

import st from "./styles.module.scss";
import Card from "../card/card";

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
  const cardRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (props.onClick) {
      if (cardRef.current) {
        cardRef.current.style.cursor = "pointer";
      }
    }
  }, [cardRef]);
  return (
    <Card
      ref={cardRef}
      className={st.room_card}
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.id);
        }
      }}
    >
      <div className={st.card_bg}>
        <img
          loading="lazy"
          src={props.previewUrl}
          alt={`Room's №${props.id} preview`}
          className={st.preview}
        />
      </div>
      <div className={st.room_info_wrap}>
        <div className={st.info_wrap_top}>
          <p className={st.room_name}>{props.roomName}</p>
        </div>
        <div className={st.info_wrap_bottom}>
          <div className={classNames(st.bottom_wrap, st.ownerName_wrap)}>
            {props.type === "private" ? (
              <MdLockOutline className={classNames(st.icon, st.locked)} />
            ) : (
              <MdOutlineLockOpen className={classNames(st.icon, st.unlocked)} />
            )}

            <p className={st.info_title}>{props.ownerName}</p>
          </div>
          <div className={st.bottom_wrap}>
            <MdPersonOutline className={classNames(st.icon, st.person)} />
            <p className={st.info_title}>{props.usersCount}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
