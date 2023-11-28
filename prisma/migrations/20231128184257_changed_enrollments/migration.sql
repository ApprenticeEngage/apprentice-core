/*
  Warnings:

  - Made the column `startTime` on table `Enrollments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Enrollments" ALTER COLUMN "startTime" SET NOT NULL;
