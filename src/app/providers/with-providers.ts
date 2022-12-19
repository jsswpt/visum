import compose from "compose-function";
import { withAuth } from "./with-auth";
import { withSkeleton } from "./with-skeleton";

export const withProviders = compose(withAuth, withSkeleton);
