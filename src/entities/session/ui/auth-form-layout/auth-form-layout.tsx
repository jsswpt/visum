import React from "react";
import st from "./styles.module.scss";

type AuthFormLayout = {
  topEls: React.ReactNode;
  bottomEls?: React.ReactNode;
};

export default function AuthFormLayout(props: AuthFormLayout) {
  return (
    <div className={st.form_layout}>
      <div className={st.form_top}>{props.topEls}</div>
      {props.bottomEls && (
        <div className={st.form_bottom}>{props.bottomEls}</div>
      )}
    </div>
  );
}
