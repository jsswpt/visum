import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

import st from "./styles.module.scss";

interface Card extends HTMLAttributes<HTMLDivElement> {}

function Card(props: Card, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div {...props} ref={ref} className={classNames(st.card, props.className)}>
      {props.children}
    </div>
  );
}

const CardRef = forwardRef<HTMLDivElement, Card>(Card);
export default CardRef;
