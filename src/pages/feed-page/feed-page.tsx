import { ActiveRooms, RecentRooms } from "entities/room";
import React from "react";
import Container from "shared/ui/container/container";
import Divider from "shared/ui/divider/divider";
import FeedBlockLayout from "shared/ui/feed-block-layout/feed-block-layout";
import Header from "shared/ui/header/header";
import BottomBar from "widgets/bottom-bar";

import st from "./styles.module.scss";

export default function FeedPageChunk() {
  return (
    <div className={st.page}>
      <Header />
      <main className={st.main}>
        <FeedBlockLayout blockTitle="Недавние комнаты">
          <RecentRooms />
        </FeedBlockLayout>
        <FeedBlockLayout blockTitle="Активные комнаты">
          <Container>
            <ActiveRooms />
          </Container>
        </FeedBlockLayout>
      </main>
      <Container>
        <Divider />
      </Container>
      <footer>
        <Container>footer</Container>
      </footer>
      <BottomBar />
    </div>
  );
}
