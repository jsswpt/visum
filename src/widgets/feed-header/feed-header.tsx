import { useStore } from "effector-react";
import React from "react";
import { $screen } from "shared/idk/screen/screen";
import ButtonLink from "shared/ui/button/button-link";
import Container from "shared/ui/container/container";
import Header from "shared/ui/header/header";
import Logo from "shared/ui/logo/logo";

import st from "./styles.module.scss";

export default function FeedHeaderChunk() {
  const screen = useStore($screen);
  return (
    <Header>
      {(screen === "xs" || screen === "sm") && <Logo size="small" />}
      {screen !== "xs" && screen !== "sm" && (
        <ButtonLink to="create" variant="contained" color="primary">
          Новая комната
        </ButtonLink>
      )}
    </Header>
  );
}
