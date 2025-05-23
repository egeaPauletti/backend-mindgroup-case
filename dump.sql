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
('John Doe', 'joao@email.com', '1234', '/images/user3.jpg'),
('Mary Smith', 'maria@email.com', '5678', '/images/user2.jpg');

-- Inserção de dados na tabela Article
INSERT INTO `Article` (`title`, `content`, `image`, `authorId`) VALUES
('Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript', 'TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...', '/images/articles/article1.png', 1),

('Como a Internet das Coisas (IoT) Está Moldando o Futuro das Cidades Inteligentes', 'A Internet das Coisas (IoT) é um dos pilares das cidades inteligentes, conectando dispositivos do dia a dia à internet para coletar e compartilhar dados. Neste artigo, vamos explorar como a IoT está transformando a infraestrutura urbana...', '/images/articles/article2.png', 2),

('O Impacto da Realidade Virtual e Aumentada no Setor de Educação', 'A realidade virtual (RV) e aumentada (RA) estão ganhando destaque no setor educacional, proporcionando novas maneiras de aprender e ensinar. Neste artigo, vamos analisar como essas tecnologias estão sendo utilizadas em salas de aula, desde simulações interativas e visitas...', '/images/articles/article3.png', 1);
