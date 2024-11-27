/*
  Warnings:

  - You are about to drop the column `expires_at` on the `OTP` table. All the data in the column will be lost.
  - Added the required column `expired_at` to the `OTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OTP` DROP COLUMN `expires_at`,
    ADD COLUMN `expired_at` DATETIME(3) NOT NULL;
