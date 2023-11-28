/*
  Warnings:

  - The primary key for the `Test` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `lesson_id` on the `Test` table. All the data in the column will be lost.
  - Added the required column `test_id` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" DROP CONSTRAINT "Test_pkey",
DROP COLUMN "lesson_id",
ADD COLUMN     "test_id" INTEGER NOT NULL,
ADD CONSTRAINT "Test_pkey" PRIMARY KEY ("curr_id", "section_id", "test_id");
