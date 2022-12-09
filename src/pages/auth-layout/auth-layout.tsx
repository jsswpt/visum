import React from "react";
import { Outlet } from "react-router-dom";
import { publicRoutes } from "shared/api/internal/consts";
import ButtonLink from "shared/ui/button/button-link";
import Container from "shared/ui/container/container";
import Divider from "shared/ui/divider/divider";
import Logo from "shared/ui/logo/logo";

import st from "./styles.module.scss";

export default function AuthLayoutChunk() {
  return (
    <div className={st.page}>
      <header className={st.header}>
        <Container className={st.header_container}>
          <ButtonLink to={publicRoutes.FEED} variant="inherit" color="primary">
            Назад
          </ButtonLink>
          <ButtonLink to={publicRoutes.FEED} variant="inherit" color="primary">
            Смотреть
          </ButtonLink>
        </Container>
      </header>
      <Divider />
      <main className={st.main}>
        <section className={st.auth_section}>
          <Container className={st.auth_section_container}>
            <div className={st.logo_wrap}>
              <Logo size="medium" />
            </div>
            <div className={st.content_wrap}>
              <Outlet />
            </div>
            <div className={st.extra_wrap}>
              <ButtonLink to="/" fullWidth>
                Назад
              </ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <Divider />
      <footer className={st.footer}>
        <Container>??</Container>
      </footer>
    </div>
  );
}
