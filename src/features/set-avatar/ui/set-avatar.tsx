import AuthFormLayout from "entities/session/ui/auth-form-layout/auth-form-layout";
import React from "react";
import { publicNavigation } from "shared/api/internal/consts/routes";
import Avatar from "shared/ui/avatar";
import ButtonLink from "shared/ui/button/button-link";

export default function SetAvatarChunk() {
  return (
    <AuthFormLayout
      topEls={
        <>
          <input id="avatar_input" name="avatar_input" type="file" hidden />
          <label htmlFor="avatar_input">
            <Avatar size="large" />
          </label>
        </>
      }
      bottomEls={
        <>
          <ButtonLink
            to={publicNavigation.PASSWORD}
            variant="contained"
            color="primary"
            fullWidth
          >
            Далее
          </ButtonLink>
        </>
      }
    />
  );
}
