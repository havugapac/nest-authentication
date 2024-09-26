/*
  Warnings:

  - A unique constraint covering the columns `[role]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_roleId_key";

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "role" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "fname" DROP NOT NULL,
ALTER COLUMN "lname" DROP NOT NULL,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "nidPassport" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "userToken" DROP NOT NULL,
ALTER COLUMN "roleId" SET DEFAULT 1,
ALTER COLUMN "createdBy" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_key" ON "Role"("role");
