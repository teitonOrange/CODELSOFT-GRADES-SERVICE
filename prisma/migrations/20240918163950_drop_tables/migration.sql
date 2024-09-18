/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `userId` on table `Grade` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Grade` DROP FOREIGN KEY `Grade_userId_fkey`;

-- AlterTable
ALTER TABLE `Grade` MODIFY `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Role`;

-- DropTable
DROP TABLE `User`;
