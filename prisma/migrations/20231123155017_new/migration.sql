/*
  Warnings:

  - You are about to alter the column `rating` on the `Courses` table. The data in that column could be lost. The data in that column will be cast from `Decimal(1,1)` to `Integer`.
  - You are about to alter the column `rating` on the `Mentor` table. The data in that column could be lost. The data in that column will be cast from `Decimal(1,1)` to `Integer`.
  - Made the column `difficulty_level` on table `Courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Courses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Mentor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Courses" ALTER COLUMN "difficulty_level" SET NOT NULL,
ALTER COLUMN "difficulty_level" SET DATA TYPE INTEGER,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Mentor" ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;
