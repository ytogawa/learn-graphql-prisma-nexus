export * from "./types";

import { queryType } from "nexus";
import * as queries from "./queries";
const DefaultQuery = queryType({
  definition(_t) {},
});
export const Query = {
  DefaultQuery,
  ...queries,
};
