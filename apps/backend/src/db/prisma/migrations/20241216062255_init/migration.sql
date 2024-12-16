/*
  Warnings:

  - You are about to drop the column `titles` on the `Note` table. All the data in the column will be lost.
  - Added the required column `title` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Note` DROP COLUMN `titles`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
