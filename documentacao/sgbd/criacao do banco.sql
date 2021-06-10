-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.17-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para u130683007_agilize
CREATE DATABASE IF NOT EXISTS `u130683007_agilize` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `u130683007_agilize`;

-- Copiando estrutura para tabela u130683007_agilize.acesso
DROP TABLE IF EXISTS `acesso`;
CREATE TABLE IF NOT EXISTS `acesso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colaborador_id` int(11) NOT NULL,
  `entrada` datetime NOT NULL,
  `saida` datetime NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.acesso: ~41 rows (aproximadamente)
DELETE FROM `acesso`;
/*!40000 ALTER TABLE `acesso` DISABLE KEYS */;
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(1, 1, '2021-06-10 13:59:14', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(2, 1, '2021-06-10 14:01:57', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(3, 1, '2021-06-10 14:02:50', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(4, 1, '2021-06-10 14:03:18', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(5, 1, '2021-06-10 14:03:47', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(6, 1, '2021-06-10 14:07:03', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(7, 1, '2021-06-10 14:10:40', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(8, 1, '2021-06-10 14:11:47', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(9, 1, '2021-06-10 14:12:21', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(10, 1, '2021-06-10 14:12:42', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(11, 1, '2021-06-10 14:15:20', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(12, 1, '2021-06-10 14:18:55', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(13, 1, '2021-06-10 14:20:13', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(14, 1, '2021-06-10 14:21:18', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(15, 1, '2021-06-10 14:22:15', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(16, 1, '2021-06-10 14:23:58', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(17, 1, '2021-06-10 14:26:53', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(18, 1, '2021-06-10 14:28:44', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(19, 1, '2021-06-10 14:31:09', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(20, 1, '2021-06-10 14:35:33', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(21, 1, '2021-06-10 14:36:38', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(22, 1, '2021-06-10 14:36:53', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(23, 1, '2021-06-10 14:37:32', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(24, 1, '2021-06-10 14:40:21', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(25, 1, '2021-06-10 14:42:58', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(26, 1, '2021-06-10 14:43:31', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(27, 1, '2021-06-10 14:45:25', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(28, 1, '2021-06-10 14:46:25', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(29, 1, '2021-06-10 14:56:22', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(30, 1, '2021-06-10 15:08:05', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(31, 1, '2021-06-10 15:08:28', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(32, 1, '2021-06-10 15:10:27', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(33, 1, '2021-06-10 15:12:22', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(34, 1, '2021-06-10 15:21:30', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(35, 1, '2021-06-10 15:22:37', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(36, 1, '2021-06-10 15:23:09', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(37, 1, '2021-06-10 15:30:05', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(38, 1, '2021-06-10 15:30:23', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(39, 1, '2021-06-10 15:41:09', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(40, 1, '2021-06-10 15:42:53', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(41, 1, '2021-06-10 15:51:26', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(42, 1, '2021-06-10 15:58:48', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(43, 1, '2021-06-10 16:00:51', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(44, 1, '2021-06-10 16:01:22', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(45, 1, '2021-06-10 16:02:04', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(46, 1, '2021-06-10 16:04:59', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(47, 1, '2021-06-10 16:07:50', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(48, 1, '2021-06-10 16:09:06', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(49, 1, '2021-06-10 16:11:48', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(50, 1, '2021-06-10 16:35:46', '0000-00-00 00:00:00', 2);
INSERT INTO `acesso` (`id`, `colaborador_id`, `entrada`, `saida`, `excluido`) VALUES
	(51, 1, '2021-06-10 16:36:16', '0000-00-00 00:00:00', 2);
/*!40000 ALTER TABLE `acesso` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.cliente
DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) COLLATE latin1_general_ci DEFAULT NULL,
  `telefone` varchar(11) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `tipodocumento` varchar(60) COLLATE latin1_general_ci DEFAULT NULL,
  `numerodocumento` varchar(60) COLLATE latin1_general_ci DEFAULT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.cliente: ~0 rows (aproximadamente)
DELETE FROM `cliente`;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`id`, `nome`, `telefone`, `email`, `tipodocumento`, `numerodocumento`, `excluido`) VALUES
	(1, 'Raul Gil Nascimento', '81985852235', 'raul@tonto.com.br', 'contrato', '123456', 2);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.colaborador
DROP TABLE IF EXISTS `colaborador`;
CREATE TABLE IF NOT EXISTS `colaborador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `telefone` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `cnpj` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `senha` varchar(250) COLLATE latin1_general_ci NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.colaborador: ~0 rows (aproximadamente)
DELETE FROM `colaborador`;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
INSERT INTO `colaborador` (`id`, `nome`, `telefone`, `email`, `cnpj`, `senha`, `excluido`) VALUES
	(1, 'HELIO', '81988265906', 'hflb01@gmail.com', '28387210463', '123', 2);
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.colaborador_empresa
DROP TABLE IF EXISTS `colaborador_empresa`;
CREATE TABLE IF NOT EXISTS `colaborador_empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colaborador_id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.colaborador_empresa: ~2 rows (aproximadamente)
DELETE FROM `colaborador_empresa`;
/*!40000 ALTER TABLE `colaborador_empresa` DISABLE KEYS */;
INSERT INTO `colaborador_empresa` (`id`, `colaborador_id`, `empresa_id`, `excluido`) VALUES
	(1, 1, 1, 2);
INSERT INTO `colaborador_empresa` (`id`, `colaborador_id`, `empresa_id`, `excluido`) VALUES
	(2, 1, 2, 2);
INSERT INTO `colaborador_empresa` (`id`, `colaborador_id`, `empresa_id`, `excluido`) VALUES
	(3, 1, 3, 2);
/*!40000 ALTER TABLE `colaborador_empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.empresa
DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `razaosocial` varchar(60) COLLATE latin1_general_ci NOT NULL,
  `telefone` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `contato` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `liberado` tinyint(1) NOT NULL DEFAULT 1,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.empresa: ~4 rows (aproximadamente)
DELETE FROM `empresa`;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`id`, `razaosocial`, `telefone`, `contato`, `liberado`, `excluido`) VALUES
	(1, 'Empresa AAA', '', '', 1, 2);
INSERT INTO `empresa` (`id`, `razaosocial`, `telefone`, `contato`, `liberado`, `excluido`) VALUES
	(2, 'Empspspsp', '', '', 1, 2);
INSERT INTO `empresa` (`id`, `razaosocial`, `telefone`, `contato`, `liberado`, `excluido`) VALUES
	(3, 'NOVAVAVAVAVA', '', '', 1, 2);
INSERT INTO `empresa` (`id`, `razaosocial`, `telefone`, `contato`, `liberado`, `excluido`) VALUES
	(4, 'Alpargatas', '', '', 1, 2);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.requisicao
DROP TABLE IF EXISTS `requisicao`;
CREATE TABLE IF NOT EXISTS `requisicao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scripts_id` int(11) NOT NULL,
  `datahorainicio` datetime NOT NULL,
  `datahorafinal` datetime DEFAULT NULL,
  `situacao` enum('RESOLVIDO','PARCIAL','ENCAMINHADO') CHARACTER SET utf8mb4 DEFAULT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.requisicao: ~0 rows (aproximadamente)
DELETE FROM `requisicao`;
/*!40000 ALTER TABLE `requisicao` DISABLE KEYS */;
/*!40000 ALTER TABLE `requisicao` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.scripts
DROP TABLE IF EXISTS `scripts`;
CREATE TABLE IF NOT EXISTS `scripts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_id` int(11) NOT NULL,
  `titulo` varchar(80) COLLATE latin1_general_ci NOT NULL,
  `textopronto` text COLLATE latin1_general_ci NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.scripts: ~8 rows (aproximadamente)
DELETE FROM `scripts`;
/*!40000 ALTER TABLE `scripts` DISABLE KEYS */;
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(1, 1, 'Vendas a', 'Aaaaaaaaaaaaa aaaaaaaaaaaa', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(2, 1, 'Carne', 'Carnê de pagmaneto parcelado do financiamento de carro', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(3, 1, 'TV Plasma', 'Compra de TV plasma nas Casas Bahia ', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(4, 1, 'SOMWIFI', '', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(5, 2, 'Titulos SilvioSantos', '', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(6, 2, 'Titulos Cap Bradesco', '', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(7, 1, 'Cama BOX', '', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(8, 1, 'Microondas', '', 2);
/*!40000 ALTER TABLE `scripts` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
