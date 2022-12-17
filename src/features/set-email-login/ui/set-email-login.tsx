import AuthFormLayout from "entities/session/ui/auth-form-layout/auth-form-layout";
import Button from "shared/ui/button/button";
import Input from "shared/ui/input/input";

import { useSetEmailAndLogin } from "../model";

export default function SetEmailLoginChunk() {
  const {
    email,
    login,
    isButtonAvailable,
    handleSubmit,
    onEmailEntered,
    onLoginEntered,
  } = useSetEmailAndLogin();
  return (
    <form onSubmit={handleSubmit}>
      <AuthFormLayout
        topEls={
          <>
            <Input
              name="email"
              value={email}
              onChange={onEmailEntered}
              type="email"
              autoFocus
              fullWidth
              label="Email"
              placeholder="Введите адрес эл. почты"
            />
            <Input
              name="login"
              value={login}
              onChange={onLoginEntered}
              type="text"
              fullWidth
              label="Login"
              placeholder="Введите логин"
              variant="outlined"
            />
          </>
        }
        bottomEls={
          <>
            {isButtonAvailable && (
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
              >
                Далее
              </Button>
            )}
          </>
        }
      />
    </form>
  );
}
