/*
  Warnings:

  - The primary key for the `SectionLO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SectionLO` table. All the data in the column will be lost.
  - Added the required column `serialNo` to the `SectionLO` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SectionLO" DROP CONSTRAINT "SectionLO_pkey",
DROP COLUMN "id",
ADD COLUMN     "serialNo" INTEGER NOT NULL,
ADD CONSTRAINT "SectionLO_pkey" PRIMARY KEY ("curr_id", "section_id", "serialNo");
