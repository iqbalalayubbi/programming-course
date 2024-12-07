/*
  Warnings:

  - You are about to drop the column `page_id` on the `CourseContent` table. All the data in the column will be lost.
  - Added the required column `page` to the `CourseContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CourseContent` DROP COLUMN `page_id`,
    ADD COLUMN `page` INTEGER NOT NULL;
