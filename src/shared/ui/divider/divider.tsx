import { HTMLAttributes } from "react";

import cn from "classnames";
import st from "./styles.module.scss";

export default function Divider(props: HTMLAttributes<HTMLElement>) {
  return <hr className={cn(st.divider, props.className)} />;
}
