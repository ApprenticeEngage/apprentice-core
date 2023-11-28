/*
  Warnings:

  - The primary key for the `LessonResources` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LessonResources` table. All the data in the column will be lost.
  - Added the required column `serialNo` to the `LessonResources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LessonResources" DROP CONSTRAINT "LessonResources_pkey",
DROP COLUMN "id",
ADD COLUMN     "serialNo" INTEGER NOT NULL,
ADD CONSTRAINT "LessonResources_pkey" PRIMARY KEY ("curr_id", "section_id", "lesson_id", "serialNo");
