-- AlterTable
ALTER TABLE `users` ADD COLUMN `birthday` DATETIME(3),
    ADD COLUMN `gender_id` INTEGER,
    MODIFY `social_platform_id` INTEGER;

-- CreateTable
CREATE TABLE `genders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD FOREIGN KEY (`gender_id`) REFERENCES `genders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
