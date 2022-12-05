import classNames from "classnames";
import { HTMLAttributes } from "react";

import st from "./styles.module.scss";

interface Card extends HTMLAttributes<HTMLDivElement> {}

export default function Card(props: Card) {
  return (
    <div {...props} className={classNames(st.card, props.className)}>
      {props.children}
    </div>
  );
}
