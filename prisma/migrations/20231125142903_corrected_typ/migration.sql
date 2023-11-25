/*
  Warnings:

  - You are about to drop the column `announcment_desc` on the `CourseAnnouncements` table. All the data in the column will be lost.
  - Added the required column `announcement_desc` to the `CourseAnnouncements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseAnnouncements" DROP COLUMN "announcment_desc",
ADD COLUMN     "announcement_desc" TEXT NOT NULL;
