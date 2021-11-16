import { TodoItem } from "nexus-prisma";
import { objectType } from "nexus";

export default objectType({
  name: TodoItem.$name,
  description: TodoItem.$description,
  definition(t) {
    t.field(TodoItem.id);
    t.field(TodoItem.status);
    t.field(TodoItem.title);
    t.field(TodoItem.content);
    t.field(TodoItem.userId);
    t.field(TodoItem.user);
  },
});
