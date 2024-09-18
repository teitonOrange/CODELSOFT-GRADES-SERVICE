/*
  Warnings:

  - Added the required column `studentId` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Grade_userId_fkey` ON `Grade`;

-- AlterTable
ALTER TABLE `Grade` ADD COLUMN `studentId` VARCHAR(191) NOT NULL;
