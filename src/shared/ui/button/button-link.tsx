import classNames from "classnames";
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonBase } from "./button.type";

import st from "./styles.module.scss";

interface ButtonLink extends ButtonBase {
  to: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function ButtonLink(props: ButtonLink) {
  return (
    <Link
      {...props}
      onClick={() => props.onClick && props.onClick}
      className={classNames(st.button, props.className, {
        [st.contained]: props.variant === "contained",
        [st.inherit]: props.variant === "inherit" || !props.variant,
        [st.outlined]: props.variant === "outlined",

        // size
        [st.small]: props.size === "small",
        [st.medium]: props.size === "medium" || !props.size,
        [st.large]: props.size === "large",

        // bg
        [st.bg_inherit]:
          (props.color === "inherit" || !props.color) &&
          props.variant === "contained",
        [st.bg_primary]:
          props.color === "primary" && props.variant === "contained",
        [st.bg_success]:
          props.color === "success" && props.variant === "contained",
        [st.bg_warning]:
          props.color === "warning" && props.variant === "contained",
        [st.bg_danger]:
          props.color === "danger" && props.variant === "contained",

        // colors
        [st.color_inherit]:
          (props.color === "inherit" || !props.color) &&
          (props.variant === "inherit" ||
            props.variant === "outlined" ||
            !props.variant),
        [st.color_primary]:
          props.color === "primary" &&
          (props.variant === "inherit" ||
            props.variant === "outlined" ||
            !props.variant),
        [st.color_success]:
          props.color === "success" &&
          (props.variant === "inherit" ||
            props.variant === "outlined" ||
            !props.variant),
        [st.color_warning]:
          props.color === "warning" &&
          (props.variant === "inherit" ||
            props.variant === "outlined" ||
            !props.variant),
        [st.color_danger]:
          props.color === "danger" &&
          (props.variant === "inherit" ||
            props.variant === "outlined" ||
            !props.variant),

        // borders
        [st.border_inherit]:
          (props.color === "inherit" || !props.color) &&
          props.variant === "outlined",
        [st.border_primary]:
          props.color === "primary" && props.variant === "outlined",
        [st.border_success]:
          props.color === "success" && props.variant === "outlined",
        [st.border_warning]:
          props.color === "warning" && props.variant === "outlined",
        [st.border_danger]:
          props.color === "danger" && props.variant === "outlined",

        [st.fullWidth]: props.fullWidth,
      })}
    >
      {props.children}
    </Link>
  );
}
