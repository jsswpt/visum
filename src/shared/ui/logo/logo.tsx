import React from "react";

import LogoLight from "shared/assets/img/media/logo-light.png";
import LogoDark from "shared/assets/img/media/logo-dark.png";

import st from "./styles.module.scss";
import classNames from "classnames";

type Logo = {
  size?: "small" | "medium" | "large";
};

export default function Logo(props: Logo) {
  const type = document.body.className.includes("dark") ? "dark" : "light";

  return (
    <img
      src={type === "dark" ? LogoLight : LogoDark}
      alt="Logo"
      className={classNames(st.logo, {
        [st.small]: props.size === "small",
        [st.medium]: props.size === "medium" || !props.size,
        [st.large]: props.size === "large",
      })}
    />
  );
}
