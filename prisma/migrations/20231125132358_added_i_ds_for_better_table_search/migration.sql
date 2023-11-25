/*
  Warnings:

  - The primary key for the `CourseTag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CourseTag` table. All the data in the column will be lost.
  - The primary key for the `CourseTestimonials` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CourseTestimonials` table. All the data in the column will be lost.
  - Added the required column `serialNo` to the `CourseLO` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNo` to the `CoursePreReq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNo` to the `CourseTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialNo` to the `CourseTestimonials` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CourseLO_course_id_lo_key";

-- DropIndex
DROP INDEX "CoursePreReq_course_id_preReq_key";

-- AlterTable
ALTER TABLE "CourseLO" ADD COLUMN     "serialNo" INTEGER NOT NULL,
ADD CONSTRAINT "CourseLO_pkey" PRIMARY KEY ("course_id", "serialNo");

-- AlterTable
ALTER TABLE "CoursePreReq" ADD COLUMN     "serialNo" INTEGER NOT NULL,
ADD CONSTRAINT "CoursePreReq_pkey" PRIMARY KEY ("course_id", "serialNo");

-- AlterTable
ALTER TABLE "CourseTag" DROP CONSTRAINT "CourseTag_pkey",
DROP COLUMN "id",
ADD COLUMN     "serialNo" INTEGER NOT NULL,
ADD CONSTRAINT "CourseTag_pkey" PRIMARY KEY ("course_id", "serialNo");

-- AlterTable
ALTER TABLE "CourseTestimonials" DROP CONSTRAINT "CourseTestimonials_pkey",
DROP COLUMN "id",
ADD COLUMN     "serialNo" INTEGER NOT NULL,
ADD CONSTRAINT "CourseTestimonials_pkey" PRIMARY KEY ("course_id", "serialNo");
