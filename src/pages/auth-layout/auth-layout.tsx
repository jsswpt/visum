import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { publicNavigation } from "shared/api/internal/consts/routes";
import Button from "shared/ui/button/button";
import ButtonLink from "shared/ui/button/button-link";
import Container from "shared/ui/container/container";
import Divider from "shared/ui/divider/divider";
import Header from "shared/ui/header/header";
import Logo from "shared/ui/logo/logo";

import st from "./styles.module.scss";

export default function AuthLayoutChunk() {
  const location = useLocation();

  const fixedPath = publicNavigation.AUTH_HOME.split("")
    .filter((item) => item !== "/")
    .join("");

  return (
    <div className={st.page}>
      {location.pathname !== publicNavigation.AUTH_HOME &&
        location.pathname !== "/" + fixedPath && (
          <>
            <Header>
              <Container className={st.header_container}>
                <ButtonLink
                  relative="path"
                  to=".."
                  variant="inherit"
                  color="primary"
                >
                  Назад
                </ButtonLink>
              </Container>
            </Header>
            <Divider />
          </>
        )}
      <main className={st.main}>
        <section className={st.auth_section}>
          <Container className={st.auth_section_container}>
            <div className={st.auth_wrap}>
              <div className={st.auth_top}>
                <Logo />
              </div>
              <Outlet />
              <div className={st.auth_extra_wrap}>
                <ButtonLink to={publicNavigation.FEED} fullWidth>
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
