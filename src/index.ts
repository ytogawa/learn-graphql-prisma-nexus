import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import { Context } from "./graphql/context";
import schema from "./graphql";

const context: Context = {
  prisma: new PrismaClient(),
};
const server = new GraphQLServer({ schema, context });
server.start(() => console.log("Server is running on localhost:4000"));
