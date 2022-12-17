import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonBase } from "./button.type";
import { ButtonHTMLAttributes } from "react";
import { getClasses } from "./get-classes";

interface Button
  extends ButtonBase,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "color"> {
  fullWidth?: boolean;
}

const Button = (props: Button) => {
  return (
    <button
      {...props}
      className={cn(st.button, getClasses(props), props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
