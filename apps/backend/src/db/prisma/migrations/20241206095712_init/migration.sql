/*
  Warnings:

  - You are about to drop the column `skill_id` on the `UserSkill` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserSkill` table. All the data in the column will be lost.
  - Added the required column `skill_name` to the `UserSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_username` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserSkill` DROP FOREIGN KEY `UserSkill_skill_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserSkill` DROP FOREIGN KEY `UserSkill_user_id_fkey`;

-- AlterTable
ALTER TABLE `UserSkill` DROP COLUMN `skill_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `skill_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_username` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UserSkill` ADD CONSTRAINT `UserSkill_user_username_fkey` FOREIGN KEY (`user_username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSkill` ADD CONSTRAINT `UserSkill_skill_name_fkey` FOREIGN KEY (`skill_name`) REFERENCES `Skill`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
