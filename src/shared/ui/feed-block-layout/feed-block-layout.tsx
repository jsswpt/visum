import { HTMLAttributes } from "react";
import Container from "../container/container";

import st from "./styles.module.scss";

interface FeedBlockLayout extends HTMLAttributes<HTMLDivElement> {
  blockTitle: string;
}

export default function FeedBlockLayout(props: FeedBlockLayout) {
  return (
    <section {...props} className={st.block_layout}>
      <Container>
        <h2 className={st.title}>{props.blockTitle}</h2>
      </Container>
      {props.children}
    </section>
  );
}
