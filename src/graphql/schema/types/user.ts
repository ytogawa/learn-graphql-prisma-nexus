import { User } from "nexus-prisma";
import { objectType } from "nexus";

export default objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.name);
    t.field(User.todoItems);
  },
});
