import { useEffect } from "react";

import cn from "classnames";
import { useRouteError } from "react-router-dom";

const ErrorPageChunk = () => {
  const error = useRouteError();
  console.log(error);
  return <>{JSON.stringify(error)}</>;
};

export default ErrorPageChunk;
