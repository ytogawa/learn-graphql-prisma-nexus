import { queryField, arg, inputObjectType, nonNull } from "nexus";
import TodoItemObject from "../types/todo";

export const todo_items = queryField((t) => {
  t.nonNull.list.nonNull.field("todo_items", {
    type: TodoItemObject,
    args: {},
    async resolve(_parent, args, ctx) {
      return await ctx.prisma.todoItem.findMany();
    },
  });
});

export const todo_item = queryField((t) => {
  t.field("todo_item", {
    type: TodoItemObject,
    args: {
      where: arg({ type: nonNull(WhereUniqueInput) }),
    },
  });
});

const WhereUniqueInput = inputObjectType({
  name: "TodoItemWhereUniqueInput",
  definition(t) {
    t.string("id");
  },
});
