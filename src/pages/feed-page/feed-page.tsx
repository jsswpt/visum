import { ActiveRooms, RecentRooms } from "entities/room";
import { useStore } from "effector-react";
import Container from "shared/ui/container/container";
import Divider from "shared/ui/divider/divider";
import FeedBlockLayout from "shared/ui/feed-block-layout/feed-block-layout";
import BottomBar from "widgets/bottom-bar";
import Sidebar from "widgets/sidebar";

import st from "./styles.module.scss";
import { $screen } from "shared/idk/screen/screen";
import FeedHeader from "widgets/feed-header";

export default function FeedPageChunk() {
  const screen = useStore($screen);
  return (
    <div className={st.page}>
      <div className={st.page_container}>
        {screen !== "xs" && screen !== "sm" && (
          <div className={st.sidebar_wrap}>
            <Sidebar />
          </div>
        )}
        <div className={st.content_wrap}>
          <FeedHeader />
          <Divider />
          <main className={st.main}>
            <FeedBlockLayout blockTitle="Недавние комнаты">
              <Container>
                <RecentRooms />
              </Container>
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
          {screen !== "md" && screen !== "lg" && <BottomBar />}
        </div>
      </div>
    </div>
  );
}
