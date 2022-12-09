import classNames from "classnames";
import React from "react";
import st from "./styles.module.scss";

type Loader = {
  size?: "small" | "medium" | "large";
};

export default function Loader(props: Loader) {
  return (
    <div
      className={classNames(st.loader, {
        [st.small]: props.size === "small",
        [st.medium]: props.size === "medium" || !props.size,
        [st.large]: props.size === "large",
      })}
    ></div>
  );
}
