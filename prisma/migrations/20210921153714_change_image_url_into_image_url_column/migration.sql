/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `product_images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product_images` DROP COLUMN `imageUrl`,
    ADD COLUMN `image_url` VARCHAR(3000) NOT NULL DEFAULT '';
