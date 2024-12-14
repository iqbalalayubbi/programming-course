-- AlterTable
ALTER TABLE `CourseContent` MODIFY `content` LONGTEXT NOT NULL DEFAULT '',
    MODIFY `video_url` VARCHAR(191) NOT NULL DEFAULT '';
