import React from "react";
import { AuthBlock } from "./auth-block.type";

import st from "./styles.module.scss";

export default function AuthBlockLayout(props: AuthBlock) {
  return (
    <div {...props} className={st.layout}>
      <div className={st.layout_top}>
        <h5 className={st.title}>{props.blockTitle}</h5>
      </div>
      {props.children}
    </div>
  );
}
