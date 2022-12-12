import AuthFormLayout from "entities/session/ui/auth-form-layout/auth-form-layout";
import React from "react";
import { publicNavigation } from "shared/api/internal/consts/routes";
import AuthBlockLayout from "shared/ui/auth-block-layout/";
import ButtonLink from "shared/ui/button/button-link";

import st from "./styles.module.scss";

export default function AuthHomeChunk() {
  return (
    <AuthBlockLayout blockTitle='"Смотри видео, тебе ведь нечего терять. Кроме всех своих друзей. И уважения со стороны родителей."'>
      <AuthFormLayout
        topEls={
          <>
            <ButtonLink
              to={publicNavigation.SIGN_IN}
              fullWidth
              variant="outlined"
              color="primary"
            >
              Вход
            </ButtonLink>
            <ButtonLink
              to={publicNavigation.SIGN_UP}
              fullWidth
              variant="outlined"
            >
              Регистрация
            </ButtonLink>
          </>
        }
      />
    </AuthBlockLayout>
  );
}
