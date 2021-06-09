-- u130683007_agilize
-- U130683007u
-- https://hpanel.hostinger.com/

DROP DATABASE IF EXISTS `u130683007_agilize`;
CREATE DATABASE IF NOT EXISTS `u130683007_agilize` ;
USE `u130683007_agilize` ;

DROP TABLE IF EXISTS `colaborador`;
CREATE TABLE IF NOT EXISTS `colaborador` (
  `id`       int(11) NOT NULL AUTO_INCREMENT,
  `nome`     varchar(60)  COLLATE latin1_general_ci NOT NULL,
  `telefone` varchar(20)  COLLATE latin1_general_ci NOT NULL,
  `email`    varchar(100) COLLATE latin1_general_ci NOT NULL,
  `cnpj`     varchar(20)  COLLATE latin1_general_ci NOT NULL,
  `senha`    varchar(250) COLLATE latin1_general_ci NOT NULL,
  `excluido` tinyint(1)   NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `id`             int(11) NOT NULL AUTO_INCREMENT,
  `razaosocial`    varchar(60) COLLATE latin1_general_ci NOT NULL,
  `telefone`       varchar(20) COLLATE latin1_general_ci NOT NULL,
  `contato`        varchar(50) COLLATE latin1_general_ci NOT NULL,
  `liberado`       tinyint(1) NOT NULL DEFAULT 2,
  `excluido`       tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

DROP TABLE IF EXISTS `colaborardor_empresa`;
CREATE TABLE IF NOT EXISTS `colaborardor_empresa` (
  `id`             int(11) NOT NULL AUTO_INCREMENT,
  `colaborador_id` int(11)  NOT NULL,
  `empresa_id`     int(11)  NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


DROP TABLE IF EXISTS `acesso`;
CREATE TABLE IF NOT EXISTS `acesso` (
  `id`             int(11)  NOT NULL AUTO_INCREMENT,
  `colaborador_id` int(11)  NOT NULL,
  `entrada`        datetime NOT NULL,
  `saida`          datetime NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


DROP TABLE IF EXISTS `scripts`;
CREATE TABLE IF NOT EXISTS `scripts` (
  `id`           int(11) NOT NULL AUTO_INCREMENT,
  `empresa_id`   int(11) NOT NULL,
  `titulo`       varchar(80) COLLATE latin1_general_ci NOT NULL,
  `textopronto`  text COLLATE latin1_general_ci NOT NULL,
  `excluido` tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


DROP TABLE IF EXISTS `requisicao`;
CREATE TABLE IF NOT EXISTS `requisicao` (
  `id`             int(11)  NOT NULL AUTO_INCREMENT,
  `scripts_id`     int(11)  NOT NULL,
  `datahorainicio` datetime NOT NULL,
  `datahorafinal`  datetime NULL,
  `situacao`       ENUM('RESOLVIDO','PARCIAL','ENCAMINHADO') NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
  `excluido`       tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

DROP TABLE IF EXISTS `requisicao_solucao`;
CREATE TABLE IF NOT EXISTS `requisicao` (
  `id`              int(11)  NOT NULL AUTO_INCREMENT,
  `requisicao_id`   int(11)  NOT NULL,
  `descricao`       text     NOT NULL,
  `excluido`        tinyint(1) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;



