/*
  Warnings:

  - The `lo` column on the `CourseLO` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lo` column on the `SectionLO` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CourseLO" DROP COLUMN "lo",
ADD COLUMN     "lo" TEXT[];

-- AlterTable
ALTER TABLE "SectionLO" DROP COLUMN "lo",
ADD COLUMN     "lo" TEXT[];
