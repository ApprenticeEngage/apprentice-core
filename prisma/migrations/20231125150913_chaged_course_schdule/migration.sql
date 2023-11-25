-- DropIndex
DROP INDEX "CourseSchedule_course_id_key";

-- AlterTable
ALTER TABLE "CourseSchedule" ADD CONSTRAINT "CourseSchedule_pkey" PRIMARY KEY ("course_id");
