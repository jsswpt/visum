import React from "react";
import { Outlet } from "react-router-dom";
import { publicRoutes } from "shared/api/internal/consts";
import Button from "shared/ui/button/button";
import ButtonLink from "shared/ui/button/button-link";
import Container from "shared/ui/container/container";
import Divider from "shared/ui/divider/divider";
import Header from "shared/ui/header/header";
import Logo from "shared/ui/logo/logo";

import st from "./styles.module.scss";

export default function AuthLayoutChunk() {
  return (
    <div className={st.page}>
      <Header>
        <Container className={st.header_container}>
          <ButtonLink to={publicRoutes.FEED} variant="inherit" color="primary">
            Назад
          </ButtonLink>
        </Container>
      </Header>
      <Divider />
      <main className={st.main}>
        <section className={st.auth_section}>
          <Container className={st.auth_section_container}>
            <div className={st.auth_wrap}>
              <div className={st.auth_top}>
                <Logo />
              </div>
              <Outlet />
              <div className={st.auth_extra_wrap}>
                <ButtonLink to="?" fullWidth>
                  Продолжить без аккаунта
                </ButtonLink>
              </div>
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
