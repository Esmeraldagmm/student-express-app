/*
  Warnings:

  - Added the required column `grade` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GradeEnum" AS ENUM ('FRESHMAN', 'SOPHMORE', 'JUNIOR', 'SENIOR');

-- AlterTable
ALTER TABLE "student" ADD COLUMN     "grade" "GradeEnum" NOT NULL;
