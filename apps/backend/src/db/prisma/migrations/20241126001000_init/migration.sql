/*
  Warnings:

  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `birthday` DATETIME(3) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'student',
    ADD COLUMN `total_point` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
