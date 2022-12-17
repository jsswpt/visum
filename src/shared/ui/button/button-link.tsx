import classNames from "classnames";
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonBase } from "./button.type";
import { getClasses } from "./get-classes";

import st from "./styles.module.scss";

interface ButtonLink
  extends ButtonBase,
    Omit<LinkProps, "color" | "className"> {
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function ButtonLink(props: ButtonLink) {
  return (
    <Link
      {...props}
      onClick={() => props.onClick && props.onClick()}
      className={classNames(st.button, props.className, getClasses(props))}
    >
      {props.children}
    </Link>
  );
}
