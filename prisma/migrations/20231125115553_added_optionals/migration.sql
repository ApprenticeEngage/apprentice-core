-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_curriculum_id_fkey";

-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_mentor_id_fkey";

-- AlterTable
ALTER TABLE "Courses" ALTER COLUMN "curriculum_id" DROP NOT NULL,
ALTER COLUMN "mentor_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_curriculum_id_fkey" FOREIGN KEY ("curriculum_id") REFERENCES "Curriculum"("curr_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor"("mentor_id") ON DELETE SET NULL ON UPDATE CASCADE;
