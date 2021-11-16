import { PrismaClient } from "@prisma/client";
import { v5 } from "uuid";

const UUID_NAMESPACE = "9ea85b0d-8730-4f08-ad46-88b4ef425b6f";

const prisma = new PrismaClient();

async function main() {
  const statusTodo = "todo";
  const statusDone = "done";
  for (const s of [statusTodo, statusDone]) {
    await prisma.todoStatus.upsert({
      where: { status: s },
      update: {},
      create: { status: s },
    });
  }

  const uname = "dummy_user_1";
  const uid1 = v5(uname, UUID_NAMESPACE);
  await prisma.user.upsert({
    include: {
      todoItems: { include: { todoStatus: true } },
    },
    where: { id: uid1 },
    create: {
      id: uid1,
      name: uname,
      todoItems: {
        connectOrCreate: [1, 2, 3, 4, 5].map((v) => {
          const name = "task" + v;
          const todoId = v5(uname + ":" + name, UUID_NAMESPACE);
          return {
            where: { id: todoId },
            create: {
              id: todoId,
              title: "task" + v,
              content: ["hoge", "fuga", "piyo"][v % 3].repeat(v),
              todoStatus: { connect: { status: statusTodo } },
            },
          };
        }),
      },
    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
