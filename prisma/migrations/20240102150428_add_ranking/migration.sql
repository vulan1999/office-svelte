-- AlterTable
ALTER TABLE `User` ADD COLUMN `rankingId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Ranking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_rankingId_fkey` FOREIGN KEY (`rankingId`) REFERENCES `Ranking`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
