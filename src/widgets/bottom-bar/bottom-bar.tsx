import React from "react";
import Container from "shared/ui/container/container";

import st from "./styles.module.scss";

export default function BottomBarChunk() {
  return (
    <div className={st.bottom_bar}>
      <Container>BottomBar</Container>
    </div>
  );
}
