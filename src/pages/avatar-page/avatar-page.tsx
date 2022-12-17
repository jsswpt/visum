import { useStore } from "effector-react";
import { $session } from "entities/session";
import SetAvatar from "features/set-avatar/ui";
import React from "react";
import { Navigate } from "react-router-dom";

export default function AvatarPageChunk() {
  const session = useStore($session);
  return session?.username && session.email ? (
    <SetAvatar />
  ) : (
    <Navigate to=".." relative="path" />
  );
}
