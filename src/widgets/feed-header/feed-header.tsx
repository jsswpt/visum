import { useStore } from "effector-react";
import { $authed } from "entities/session";
import { publicNavigation } from "shared/api/internal/consts/routes";
import { $screen } from "shared/idk/screen/screen";
import Avatar from "shared/ui/avatar/";
import ButtonLink from "shared/ui/button/button-link";
import Container from "shared/ui/container/container";
import Header from "shared/ui/header/header";
import Logo from "shared/ui/logo/logo";

import st from "./styles.module.scss";

export default function FeedHeaderChunk() {
  const screen = useStore($screen);
  const isAuthed = useStore($authed);
  console.log(isAuthed);
  return (
    <Header>
      <Container className={st.header_container}>
        <div className={st.header_wrap}>
          {(screen === "xs" || screen === "sm") && <Logo size="small" />}
          {screen !== "xs" && screen !== "sm" && (
            <ButtonLink to="create" variant="contained" color="primary">
              Новая комната
            </ButtonLink>
          )}
        </div>
        <div className={st.header_wrap}>
          {isAuthed ? (
            <Avatar
              size="large"
              url="https://uhd.name/uploads/posts/2022-08/1660610232_1-uhd-name-p-tomas-shelbi-v-ochkakh-devushka-krasivo-fo-1.jpg"
            />
          ) : (
            <ButtonLink
              to={publicNavigation.AUTH_HOME}
              variant="inherit"
              color="primary"
            >
              Авторизация
            </ButtonLink>
          )}
        </div>
      </Container>
    </Header>
  );
}
