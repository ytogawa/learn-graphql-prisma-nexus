import * as path from "path";
import * as allTypes from "./schema";
import { makeSchema } from "nexus";

console.log(allTypes);

export default makeSchema({
  types: allTypes,
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  contextType: {
    module: path.join(__dirname, "context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: path.join(__dirname, "./generated/types.d.ts"),
    schema: path.join(__dirname, "./generated/schema.graphql"),
  },
});
