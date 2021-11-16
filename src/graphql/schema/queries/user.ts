import { queryField, arg, inputObjectType, nonNull } from "nexus";
import UserObject from "../types/user";

export const users = queryField((t) => {
  t.nonNull.list.nonNull.field("users", {
    type: UserObject,
    args: {},
    async resolve(_parent, _args, ctx) {
      return await ctx.prisma.user.findMany();
    },
  });
});

const WhereUniqueInput = inputObjectType({
  name: "UserWhereUniqueInput",
  definition(t) {
    t.string("id");
  },
});

export const todo_item = queryField((t) => {
  t.field("user", {
    type: UserObject,
    args: {
      where: arg({ type: nonNull(WhereUniqueInput) }),
    },
    async resolve(_parent, args, { prisma }) {
      console.log(args);
      return await prisma.user.findUnique({
        where: { id: "" },
        rejectOnNotFound: true,
      });
    },
  });
});
