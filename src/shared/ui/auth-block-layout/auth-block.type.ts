import { HTMLAttributes } from "react";

export interface AuthBlock extends HTMLAttributes<HTMLDivElement> {
  blockTitle: string;
  children: React.ReactNode;
}
