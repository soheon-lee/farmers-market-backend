/*
  Warnings:

  - You are about to drop the column `userTypeId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_ibfk_3`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `userTypeId`,
    ADD COLUMN `user_type_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `users` ADD FOREIGN KEY (`user_type_id`) REFERENCES `user_types`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
