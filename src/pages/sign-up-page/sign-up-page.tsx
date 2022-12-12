import { Outlet } from "react-router";
import AuthBlockLayout from "shared/ui/auth-block-layout";

export default function SignUpPageChunk() {
  return (
    <AuthBlockLayout blockTitle="Создайте аккаунт, чтобы начать смотреть видео с друзьями">
      <Outlet />
    </AuthBlockLayout>
  );
}
