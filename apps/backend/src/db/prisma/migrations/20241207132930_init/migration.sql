-- AlterTable
ALTER TABLE `Course` MODIFY `star_total` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `CourseContent` MODIFY `content` LONGTEXT NOT NULL;
