/*
  Warnings:

  - The primary key for the `Apprentice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `apprentice_id` column on the `Apprentice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ApprenticeCert` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ApprenticeCourses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CourseAnnouncements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `course_id` column on the `Courses` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Enrollments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Mentor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `mentor_id` column on the `Mentor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MentorSkill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `course_id` on the `ApprenticeCert` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `apprentice_id` on the `ApprenticeCert` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `ApprenticeCourses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `apprentice_id` on the `ApprenticeCourses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `CourseAnnouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `CourseLO` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `CoursePreReq` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `CourseSchedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `CourseTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `CourseTestimonials` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `apprentice_id` on the `CourseTestimonials` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mentor_id` on the `Courses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `course_id` on the `Enrollments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `apprentice_id` on the `Enrollments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mentor_id` on the `MentorSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `skill_id` on the `MentorSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ApprenticeCert" DROP CONSTRAINT "ApprenticeCert_apprentice_id_fkey";

-- DropForeignKey
ALTER TABLE "ApprenticeCert" DROP CONSTRAINT "ApprenticeCert_course_id_fkey";

-- DropForeignKey
ALTER TABLE "ApprenticeCourses" DROP CONSTRAINT "ApprenticeCourses_apprentice_id_fkey";

-- DropForeignKey
ALTER TABLE "ApprenticeCourses" DROP CONSTRAINT "ApprenticeCourses_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseAnnouncements" DROP CONSTRAINT "CourseAnnouncements_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseLO" DROP CONSTRAINT "CourseLO_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CoursePreReq" DROP CONSTRAINT "CoursePreReq_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseSchedule" DROP CONSTRAINT "CourseSchedule_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTag" DROP CONSTRAINT "CourseTag_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTestimonials" DROP CONSTRAINT "CourseTestimonials_apprentice_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTestimonials" DROP CONSTRAINT "CourseTestimonials_course_id_fkey";

-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_mentor_id_fkey";

-- DropForeignKey
ALTER TABLE "Enrollments" DROP CONSTRAINT "Enrollments_apprentice_id_fkey";

-- DropForeignKey
ALTER TABLE "Enrollments" DROP CONSTRAINT "Enrollments_course_id_fkey";

-- DropForeignKey
ALTER TABLE "MentorSkill" DROP CONSTRAINT "MentorSkill_mentor_id_fkey";

-- DropForeignKey
ALTER TABLE "MentorSkill" DROP CONSTRAINT "MentorSkill_skill_id_fkey";

-- AlterTable
ALTER TABLE "Apprentice" DROP CONSTRAINT "Apprentice_pkey",
DROP COLUMN "apprentice_id",
ADD COLUMN     "apprentice_id" SERIAL NOT NULL,
ADD CONSTRAINT "Apprentice_pkey" PRIMARY KEY ("apprentice_id");

-- AlterTable
ALTER TABLE "ApprenticeCert" DROP CONSTRAINT "ApprenticeCert_pkey",
DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL,
DROP COLUMN "apprentice_id",
ADD COLUMN     "apprentice_id" INTEGER NOT NULL,
ADD CONSTRAINT "ApprenticeCert_pkey" PRIMARY KEY ("course_id", "apprentice_id");

-- AlterTable
ALTER TABLE "ApprenticeCourses" DROP CONSTRAINT "ApprenticeCourses_pkey",
DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL,
DROP COLUMN "apprentice_id",
ADD COLUMN     "apprentice_id" INTEGER NOT NULL,
ADD CONSTRAINT "ApprenticeCourses_pkey" PRIMARY KEY ("course_id", "apprentice_id");

-- AlterTable
ALTER TABLE "CourseAnnouncements" DROP CONSTRAINT "CourseAnnouncements_pkey",
DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL,
ADD CONSTRAINT "CourseAnnouncements_pkey" PRIMARY KEY ("course_id", "announcement_id");

-- AlterTable
ALTER TABLE "CourseLO" DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CoursePreReq" DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseSchedule" DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseTag" DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseTestimonials" DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL,
DROP COLUMN "apprentice_id",
ADD COLUMN     "apprentice_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_pkey",
DROP COLUMN "course_id",
ADD COLUMN     "course_id" SERIAL NOT NULL,
DROP COLUMN "mentor_id",
ADD COLUMN     "mentor_id" INTEGER NOT NULL,
ADD CONSTRAINT "Courses_pkey" PRIMARY KEY ("course_id");

-- AlterTable
ALTER TABLE "Enrollments" DROP CONSTRAINT "Enrollments_pkey",
DROP COLUMN "course_id",
ADD COLUMN     "course_id" INTEGER NOT NULL,
DROP COLUMN "apprentice_id",
ADD COLUMN     "apprentice_id" INTEGER NOT NULL,
ADD CONSTRAINT "Enrollments_pkey" PRIMARY KEY ("course_id", "apprentice_id");

-- AlterTable
ALTER TABLE "Mentor" DROP CONSTRAINT "Mentor_pkey",
DROP COLUMN "mentor_id",
ADD COLUMN     "mentor_id" SERIAL NOT NULL,
ADD CONSTRAINT "Mentor_pkey" PRIMARY KEY ("mentor_id");

-- AlterTable
ALTER TABLE "MentorSkill" DROP CONSTRAINT "MentorSkill_pkey",
DROP COLUMN "mentor_id",
ADD COLUMN     "mentor_id" INTEGER NOT NULL,
DROP COLUMN "skill_id",
ADD COLUMN     "skill_id" INTEGER NOT NULL,
ADD CONSTRAINT "MentorSkill_pkey" PRIMARY KEY ("mentor_id", "skill_id");

-- AlterTable
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "CourseSchedule_course_id_key" ON "CourseSchedule"("course_id");

-- AddForeignKey
ALTER TABLE "ApprenticeCert" ADD CONSTRAINT "ApprenticeCert_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCert" ADD CONSTRAINT "ApprenticeCert_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCourses" ADD CONSTRAINT "ApprenticeCourses_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCourses" ADD CONSTRAINT "ApprenticeCourses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAnnouncements" ADD CONSTRAINT "CourseAnnouncements_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseLO" ADD CONSTRAINT "CourseLO_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePreReq" ADD CONSTRAINT "CoursePreReq_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseSchedule" ADD CONSTRAINT "CourseSchedule_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTag" ADD CONSTRAINT "CourseTag_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTestimonials" ADD CONSTRAINT "CourseTestimonials_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTestimonials" ADD CONSTRAINT "CourseTestimonials_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor"("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollments" ADD CONSTRAINT "Enrollments_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollments" ADD CONSTRAINT "Enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorSkill" ADD CONSTRAINT "MentorSkill_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor"("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorSkill" ADD CONSTRAINT "MentorSkill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
