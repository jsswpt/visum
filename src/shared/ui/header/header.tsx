import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import Container from "../container/container";
import Divider from "../divider/divider";

import st from "./styles.module.scss";

interface Header extends HTMLAttributes<HTMLDivElement> {}

export default function Header(props: Header) {
  return (
    <>
      <header {...props} className={classNames(st.header, props.className)}>
        <Container>{props.children}</Container>
      </header>
    </>
  );
}
