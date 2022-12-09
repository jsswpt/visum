import { HTMLAttributes } from "react";

export interface Avatar extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  url?: string;
}
