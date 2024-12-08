/*
  Warnings:

  - Added the required column `updatedAt` to the `StudentCourse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `StudentCourse` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `StudentCourse` ADD CONSTRAINT `StudentCourse_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentCourse` ADD CONSTRAINT `StudentCourse_user_username_fkey` FOREIGN KEY (`user_username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
