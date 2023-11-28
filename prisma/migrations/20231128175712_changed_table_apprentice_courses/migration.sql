/*
  Warnings:

  - You are about to drop the `ApprenticeCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ApprenticeCourses" DROP CONSTRAINT "ApprenticeCourses_apprentice_id_fkey";

-- DropForeignKey
ALTER TABLE "ApprenticeCourses" DROP CONSTRAINT "ApprenticeCourses_course_id_fkey";

-- DropForeignKey
ALTER TABLE "ApprenticeCourses" DROP CONSTRAINT "ApprenticeCourses_current_chapter_id_current_curr_id_curre_fkey";

-- AlterTable
ALTER TABLE "Enrollments" ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "startTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ApprenticeCourses";

-- CreateTable
CREATE TABLE "ApprenticeStats" (
    "apprentice_id" INTEGER NOT NULL,
    "completed" BOOLEAN,
    "current_chapter_id" INTEGER NOT NULL,
    "current_section_id" INTEGER NOT NULL,
    "current_curr_id" INTEGER NOT NULL,

    CONSTRAINT "ApprenticeStats_pkey" PRIMARY KEY ("apprentice_id")
);

-- AddForeignKey
ALTER TABLE "ApprenticeStats" ADD CONSTRAINT "ApprenticeStats_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeStats" ADD CONSTRAINT "ApprenticeStats_current_chapter_id_current_curr_id_current_fkey" FOREIGN KEY ("current_chapter_id", "current_curr_id", "current_section_id") REFERENCES "Lesson"("section_id", "curr_id", "lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;
