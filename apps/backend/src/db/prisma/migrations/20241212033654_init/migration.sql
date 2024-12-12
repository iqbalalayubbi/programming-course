/*
  Warnings:

  - You are about to drop the column `mentor_id` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - Added the required column `mentor_username` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surename` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Course` DROP FOREIGN KEY `Course_mentor_id_fkey`;

-- AlterTable
ALTER TABLE `Course` DROP COLUMN `mentor_id`,
    ADD COLUMN `mentor_username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `age`,
    ADD COLUMN `surename` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_mentor_username_fkey` FOREIGN KEY (`mentor_username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
