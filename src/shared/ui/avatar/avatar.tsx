import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Avatar as AvatarT } from "./avatar.type";

import st from "./styles.module.scss";

export default function Avatar(props: AvatarT) {
  const avatarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.onClick) {
      if (avatarRef.current) {
        avatarRef.current.style.cursor = "pointer";
      }
    }
  }, []);

  return (
    <div
      ref={avatarRef}
      className={classNames(st.avatar, {
        [st.small]: props.size === "small",
        [st.medium]: props.size === "medium" || !props.size,
        [st.large]: props.size === "large",
      })}
    >
      {props.url && (
        <img
          loading="lazy"
          src={props.url}
          alt="Avatar url"
          className={st.avatar_img}
        />
      )}{" "}
    </div>
  );
}
