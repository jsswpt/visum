import React from "react";

import st from "./styles.module.scss";

type Skeleton = {
  className?: any;
  children?: React.ReactNode;
};

export default function Skeleton(props: Skeleton) {
  return (
    <div className={st.skeleton + " " + props.className}>{props.children}</div>
  );
}
