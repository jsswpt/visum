import React from "react";
import { Outlet } from "react-router-dom";

export default function RoomsLayout() {
  return (
    <div>
      <div>layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
