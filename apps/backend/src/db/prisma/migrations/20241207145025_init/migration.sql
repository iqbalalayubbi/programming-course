-- CreateTable
CREATE TABLE `StudentCourse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `user_username` INTEGER NOT NULL,
    `is_finished` BOOLEAN NOT NULL DEFAULT false,
    `certificate_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
