import React from "react";
import Loader from "../loader/loader";

import st from "./styles.module.scss";

export default function PageLoader() {
  return (
    <div className={st.page_loader}>
      <Loader size="large" />
    </div>
  );
}
