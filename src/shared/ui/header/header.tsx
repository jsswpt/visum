import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import st from "./styles.module.scss";

interface Header extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: Header) {
  return (
    <header {...props} className={classNames(st.header, props.className)}>
      {props.children}
    </header>
  );
}
