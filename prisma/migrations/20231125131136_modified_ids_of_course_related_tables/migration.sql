/*
  Warnings:

  - The primary key for the `CourseLO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CourseLO` table. All the data in the column will be lost.
  - The primary key for the `CoursePreReq` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CoursePreReq` table. All the data in the column will be lost.
  - The primary key for the `CourseSchedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CourseSchedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[course_id,lo]` on the table `CourseLO` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[course_id,preReq]` on the table `CoursePreReq` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CourseLO" DROP CONSTRAINT "CourseLO_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "CoursePreReq" DROP CONSTRAINT "CoursePreReq_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "CourseSchedule" DROP CONSTRAINT "CourseSchedule_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "CourseLO_course_id_lo_key" ON "CourseLO"("course_id", "lo");

-- CreateIndex
CREATE UNIQUE INDEX "CoursePreReq_course_id_preReq_key" ON "CoursePreReq"("course_id", "preReq");
