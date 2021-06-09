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

-- Copiando estrutura para tabela u130683007_agilize.acesso
DROP TABLE IF EXISTS `acesso`;
CREATE TABLE IF NOT EXISTS `acesso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colaborador_id` int(11) NOT NULL,
  `entrada` datetime NOT NULL,
  `saida` datetime NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


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

-- Copiando dados para a tabela u130683007_agilize.colaborador: ~1 rows (aproximadamente)
DELETE FROM `colaborador`;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
INSERT INTO `colaborador` (`id`, `nome`, `telefone`, `email`, `cnpj`, `senha`, `excluido`) VALUES
	(1, 'HELIO', '81988265906', 'hflb01@gmail.com', '28387210463', '123', 2);
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;

-- Copiando estrutura para tabela u130683007_agilize.colaborardor_empresa
DROP TABLE IF EXISTS `colaborardor_empresa`;
CREATE TABLE IF NOT EXISTS `colaborardor_empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colaborador_id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Copiando dados para a tabela u130683007_agilize.colaborardor_empresa: ~3 rows (aproximadamente)
DELETE FROM `colaborardor_empresa`;
/*!40000 ALTER TABLE `colaborardor_empresa` DISABLE KEYS */;
INSERT INTO `colaborardor_empresa` (`id`, `colaborador_id`, `empresa_id`, `excluido`) VALUES
	(1, 1, 1, 2);
INSERT INTO `colaborardor_empresa` (`id`, `colaborador_id`, `empresa_id`, `excluido`) VALUES
	(2, 1, 2, 2);
INSERT INTO `colaborardor_empresa` (`id`, `colaborador_id`, `empresa_id`, `excluido`) VALUES
	(3, 1, 3, 2);
/*!40000 ALTER TABLE `colaborardor_empresa` ENABLE KEYS */;

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
	(1, 1, 'Vendas a', '', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(2, 1, 'Carne', '', 2);
INSERT INTO `scripts` (`id`, `empresa_id`, `titulo`, `textopronto`, `excluido`) VALUES
	(3, 1, 'TV Plasma', '', 2);
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
