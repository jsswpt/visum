import AuthFormLayout from "entities/session/ui/auth-form-layout/auth-form-layout";
import React from "react";
import { publicNavigation } from "shared/api/internal/consts/routes";
import ButtonLink from "shared/ui/button/button-link";
import Input from "shared/ui/input/input";

export default function SetEmailLoginChunk() {
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
            to={publicNavigation.AVATAR}
            fullWidth
            color="primary"
            variant="contained"
          >
            Далее
          </ButtonLink>
        </>
      }
    />
  );
}
