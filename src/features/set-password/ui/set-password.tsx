import AuthFormLayout from "entities/session/ui/auth-form-layout/auth-form-layout";
import React from "react";
import { publicNavigation } from "shared/api/internal/consts/routes";
import ButtonLink from "shared/ui/button/button-link";
import Input from "shared/ui/input/input";

export default function SetPasswordChunk() {
  return (
    <AuthFormLayout
      topEls={
        <>
          <Input />
          <Input />
        </>
      }
      bottomEls={
        <>
          <ButtonLink
            to={publicNavigation.FEED}
            fullWidth
            color="success"
            variant="contained"
          >
            Завершить
          </ButtonLink>
        </>
      }
    />
  );
}
