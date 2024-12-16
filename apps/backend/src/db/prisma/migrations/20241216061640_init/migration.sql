-- CreateTable
CREATE TABLE `Note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_username` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,
    `content` LONGTEXT NOT NULL DEFAULT '',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_user_username_fkey` FOREIGN KEY (`user_username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
