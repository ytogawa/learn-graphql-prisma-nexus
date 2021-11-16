-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo_items" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "status" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "todo_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo_status" (
    "status" TEXT NOT NULL,

    CONSTRAINT "todo_status_pkey" PRIMARY KEY ("status")
);

-- AddForeignKey
ALTER TABLE "todo_items" ADD CONSTRAINT "todo_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo_items" ADD CONSTRAINT "todo_items_status_fkey" FOREIGN KEY ("status") REFERENCES "todo_status"("status") ON DELETE RESTRICT ON UPDATE CASCADE;
