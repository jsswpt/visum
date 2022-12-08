import { ButtonHTMLAttributes } from "react";

export interface ButtonBase {
  variant?: "contained" | "inherit" | "outlined";
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "inherit";
  className?: any;
  children?: React.ReactNode;
}
