import classNames from "classnames";
import { HTMLAttributes } from "react";

import st from "./styles.module.scss";

interface Container extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Container(props: Container) {
  return (
    <div className={classNames(st.container, props.className)}>
      {props.children}
    </div>
  );
}
