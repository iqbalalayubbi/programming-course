-- AlterTable
ALTER TABLE `Course` ADD COLUMN `video_url` VARCHAR(191) NULL,
    MODIFY `is_certificate_exist` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `thumbnail_url` VARCHAR(191) NULL;
