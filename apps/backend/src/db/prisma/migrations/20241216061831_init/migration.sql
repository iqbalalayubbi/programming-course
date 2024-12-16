/*
  Warnings:

  - You are about to drop the column `content` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Note` DROP COLUMN `content`,
    DROP COLUMN `course_id`,
    ADD COLUMN `contents` LONGTEXT NOT NULL DEFAULT '';
