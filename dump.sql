-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS `mindDB`;
USE `mindDB`;

-- Tabela: User
CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `password` VARCHAR(191) NOT NULL,
  `imageProfile` VARCHAR(191) NOT NULL DEFAULT '/images/user.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela: Article
CREATE TABLE `Article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(191) NOT NULL,
  `content` TEXT NOT NULL,
  `image` VARCHAR(191),
  `authorId` INT NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `authorId_idx` (`authorId`),
  CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserção de dados na tabela User
INSERT INTO `User` (`name`, `email`, `password`, `imageProfile`) VALUES
('João Silva', 'joao@email.com', 'senha123', '/images/user1.png'),
('Maria Souza', 'maria@email.com', 'senha456', '/images/user2.png');

-- Inserção de dados na tabela Article
INSERT INTO `Article` (`title`, `content`, `image`, `authorId`) VALUES
('Primeiro Artigo', 'Este é o conteúdo do primeiro artigo.', '/images/article1.png', 1),
('Segundo Artigo', 'Conteúdo interessante do segundo artigo.', NULL, 2),
('Dicas de Programação', 'Algumas dicas úteis para iniciantes em programação.', '/images/article2.png', 1);
