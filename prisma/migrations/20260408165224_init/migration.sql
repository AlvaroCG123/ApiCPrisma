-- CreateTable
CREATE TABLE `convidado` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(254) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `convidado_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
