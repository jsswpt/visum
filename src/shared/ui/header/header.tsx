import React from "react";
import Container from "../container/container";
import Divider from "../divider/divider";

import st from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <header className={st.header}>
        <Container>Header</Container>
      </header>
      <Container>
        <Divider />
      </Container>
    </>
  );
}
