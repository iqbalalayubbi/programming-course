/*
  Warnings:

  - You are about to drop the column `skillId` on the `UserSkill` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserSkill` table. All the data in the column will be lost.
  - Added the required column `skill_id` to the `UserSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserSkill` DROP FOREIGN KEY `UserSkill_skillId_fkey`;

-- DropForeignKey
ALTER TABLE `UserSkill` DROP FOREIGN KEY `UserSkill_userId_fkey`;

-- AlterTable
ALTER TABLE `UserSkill` DROP COLUMN `skillId`,
    DROP COLUMN `userId`,
    ADD COLUMN `skill_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mentor_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `star_total` INTEGER NOT NULL,
    `is_certificate_exist` BOOLEAN NOT NULL,
    `thumbnail_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSkill` ADD CONSTRAINT `UserSkill_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSkill` ADD CONSTRAINT `UserSkill_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_mentor_id_fkey` FOREIGN KEY (`mentor_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
