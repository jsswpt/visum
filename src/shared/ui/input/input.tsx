import { forwardRef, InputHTMLAttributes, RefObject, useMemo } from "react";
import st from "./styles.module.scss";
import cn from "classnames";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "medium" | "large";
  variant?: "outlined" | "default";
  color?: "primary" | "secondary" | "success" | "error";
  label?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLSpanElement, Input>((props: Input, ref) => {
  return (
    <span ref={ref} className={cn(st.input_wrapper, {})}>
      {props.label && <span className={st.label}>{props.label}</span>}
      <input
        {...props}
        className={cn(
          st.input,
          props.label ? st.input_large_padding : st.input_default_padding,
          {
            [st.fullWidth]: props.fullWidth,

            [st.small]: props.inputSize === "small",
            [st.medium]: props.inputSize === "medium" || !props.size,
            [st.large]: props.inputSize === "large",

            [st.outlined]: props.variant === "outlined",
            [st.default]: props.variant === "default" || !props.variant,
          }
        )}
      />
    </span>
  );
});

export default Input;
