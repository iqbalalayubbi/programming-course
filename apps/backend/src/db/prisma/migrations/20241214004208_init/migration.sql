/*
  Warnings:

  - Made the column `thumbnail_url` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `video_url` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Course` MODIFY `thumbnail_url` VARCHAR(191) NOT NULL,
    MODIFY `video_url` VARCHAR(191) NOT NULL;
