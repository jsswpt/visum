import { ActiveRooms, RecentRooms } from "entities/room";
import React from "react";
import Container from "shared/ui/container/container";
import Divider from "shared/ui/divider/divider";
import Header from "shared/ui/header/header";

import st from "./styles.module.scss";

export default function FeedPageChunk() {
  return (
    <div className={st.page}>
      <Header />
      <main className={st.main}>
        <section>
          <RecentRooms />
        </section>
        <section>
          <Container>
            <ActiveRooms />
          </Container>
        </section>
      </main>
      <Container>
        <Divider />
      </Container>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
