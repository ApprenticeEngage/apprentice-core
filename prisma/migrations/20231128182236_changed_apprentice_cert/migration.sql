/*
  Warnings:

  - The primary key for the `ApprenticeCert` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `course_id` on the `ApprenticeCert` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ApprenticeCert" DROP CONSTRAINT "ApprenticeCert_course_id_fkey";

-- AlterTable
ALTER TABLE "ApprenticeCert" DROP CONSTRAINT "ApprenticeCert_pkey",
DROP COLUMN "course_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ApprenticeCert_pkey" PRIMARY KEY ("id");
