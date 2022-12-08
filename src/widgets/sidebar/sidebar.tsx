import React from "react";
import Divider from "shared/ui/divider/divider";
import Logo from "shared/ui/logo/logo";

import st from "./styles.module.scss";

export default function SidebarChunk() {
  return (
    <div className={st.sidebar}>
      <div className={st.sidebar_top}>
        <Logo size="small" />
      </div>
      <Divider />
    </div>
  );
}
