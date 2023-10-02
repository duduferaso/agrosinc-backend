
-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           PostgreSQL 10.21, compiled by Visual C++ build 1800, 32-bit
-- OS do Servidor:               
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE IF NOT EXISTS `agrosinc` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `agrosinc`;

-- Copiando estrutura para tabela public.agricultor
CREATE TABLE IF NOT EXISTS "agricultor" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''agricultor_id_seq''::regclass)',
	"idusuario" INTEGER NOT NULL,
	"nome" VARCHAR NOT NULL,
	"sobrenome" VARCHAR NOT NULL,
	"datanascimento" TIMESTAMP NULL DEFAULT NULL,
	"sexo" VARCHAR NULL DEFAULT NULL,
	"endereco" VARCHAR NULL DEFAULT NULL,
	"cidade" VARCHAR NULL DEFAULT NULL,
	"estado" VARCHAR NULL DEFAULT NULL,
	"cep" VARCHAR NULL DEFAULT NULL,
	"cpf" VARCHAR NULL DEFAULT NULL,
	"telefone" VARCHAR NULL DEFAULT NULL,
	"email" VARCHAR NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "agricultor_fk" FOREIGN KEY ("idusuario") REFERENCES "public"."usuario" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.agricultor: 0 rows
/*!40000 ALTER TABLE "agricultor" DISABLE KEYS */;
INSERT INTO "agricultor" ("id", "idusuario", "nome", "sobrenome", "datanascimento", "sexo", "endereco", "cidade", "estado", "cep", "cpf", "telefone", "email") VALUES
	(1, 1, 'Eduardo', 'Feras', NULL, 'M', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(4, 1, 'jair', '2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(7, 1, 'null', 'null', NULL, 'null', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE "agricultor" ENABLE KEYS */;

-- Copiando estrutura para tabela public.area
CREATE TABLE IF NOT EXISTS "area" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''area_id_seq''::regclass)',
	"nome" VARCHAR NOT NULL,
	"tipoarea" BOOLEAN NULL DEFAULT NULL,
	"idagricultor" INTEGER NOT NULL,
	PRIMARY KEY ("id")
);

-- Copiando dados para a tabela public.area: 0 rows
/*!40000 ALTER TABLE "area" DISABLE KEYS */;
/*!40000 ALTER TABLE "area" ENABLE KEYS */;

-- Copiando estrutura para tabela public.areagado
CREATE TABLE IF NOT EXISTS "areagado" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''areagado_id_seq''::regclass)',
	"nome" VARCHAR NOT NULL,
	"idarea" INTEGER NOT NULL,
	"areatotal" NUMERIC NOT NULL,
	"areautil" NUMERIC NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "areagado_fk" FOREIGN KEY ("idarea") REFERENCES "public"."area" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.areagado: 0 rows
/*!40000 ALTER TABLE "areagado" DISABLE KEYS */;
/*!40000 ALTER TABLE "areagado" ENABLE KEYS */;

-- Copiando estrutura para tabela public.areaplantio
CREATE TABLE IF NOT EXISTS "areaplantio" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''areaplantio_id_seq''::regclass)',
	"areatotal" NUMERIC NOT NULL,
	"areaadubada" NUMERIC NOT NULL,
	"areautil" NUMERIC NOT NULL,
	"idarea" INTEGER NOT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "areaplantio_fk" FOREIGN KEY ("idarea") REFERENCES "public"."area" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.areaplantio: 0 rows
/*!40000 ALTER TABLE "areaplantio" DISABLE KEYS */;
/*!40000 ALTER TABLE "areaplantio" ENABLE KEYS */;

-- Copiando estrutura para tabela public.cultura
CREATE TABLE IF NOT EXISTS "cultura" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''cultura_id_seq''::regclass)',
	"nome" VARCHAR NOT NULL,
	PRIMARY KEY ("id")
);

-- Copiando dados para a tabela public.cultura: 0 rows
/*!40000 ALTER TABLE "cultura" DISABLE KEYS */;
/*!40000 ALTER TABLE "cultura" ENABLE KEYS */;

-- Copiando estrutura para tabela public.dadosclimaticos
CREATE TABLE IF NOT EXISTS "dadosclimaticos" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''dadosclimaticos_id_seq''::regclass)',
	"titulo" VARCHAR NOT NULL,
	"tipodado" VARCHAR NOT NULL,
	"data" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id")
);

-- Copiando dados para a tabela public.dadosclimaticos: 0 rows
/*!40000 ALTER TABLE "dadosclimaticos" DISABLE KEYS */;
/*!40000 ALTER TABLE "dadosclimaticos" ENABLE KEYS */;

-- Copiando estrutura para tabela public.gado
CREATE TABLE IF NOT EXISTS "gado" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''gado_id_seq''::regclass)',
	"idcabeca" INTEGER NOT NULL,
	"quantidade" NUMERIC NULL DEFAULT NULL,
	"idareagado" INTEGER NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "gad2o_fk" FOREIGN KEY ("idareagado") REFERENCES "public"."areagado" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "gado_fk" FOREIGN KEY ("idcabeca") REFERENCES "public"."gadodescricao" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.gado: 0 rows
/*!40000 ALTER TABLE "gado" DISABLE KEYS */;
/*!40000 ALTER TABLE "gado" ENABLE KEYS */;

-- Copiando estrutura para tabela public.gadodescricao
CREATE TABLE IF NOT EXISTS "gadodescricao" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''gadodescricao_id_seq''::regclass)',
	"tipo" VARCHAR NOT NULL,
	"descricao" VARCHAR NULL DEFAULT NULL,
	"sexo" VARCHAR NULL DEFAULT NULL,
	"custoinsumo" NUMERIC NULL DEFAULT NULL,
	PRIMARY KEY ("id")
);

-- Copiando dados para a tabela public.gadodescricao: 0 rows
/*!40000 ALTER TABLE "gadodescricao" DISABLE KEYS */;
/*!40000 ALTER TABLE "gadodescricao" ENABLE KEYS */;

-- Copiando estrutura para tabela public.historicocolheita
CREATE TABLE IF NOT EXISTS "historicocolheita" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''historicocolheita_id_seq''::regclass)',
	"dataplantio" TIMESTAMP NULL DEFAULT NULL,
	"datacolheita" TIMESTAMP NULL DEFAULT NULL,
	"rendimento" NUMERIC NULL DEFAULT NULL,
	"idplantio" INTEGER NOT NULL,
	"idcultura" INTEGER NOT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "historicocolheit2a_fk" FOREIGN KEY ("idcultura") REFERENCES "public"."cultura" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "historicocolheita_fk" FOREIGN KEY ("idplantio") REFERENCES "public"."areaplantio" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.historicocolheita: 0 rows
/*!40000 ALTER TABLE "historicocolheita" DISABLE KEYS */;
/*!40000 ALTER TABLE "historicocolheita" ENABLE KEYS */;

-- Copiando estrutura para tabela public.localizacao
CREATE TABLE IF NOT EXISTS "localizacao" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''localizacao_id_seq''::regclass)',
	"latitude" VARCHAR NOT NULL,
	"longitude" VARCHAR NOT NULL,
	"idarea" INTEGER NOT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "localizacao_fk" FOREIGN KEY ("idarea") REFERENCES "public"."area" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.localizacao: 0 rows
/*!40000 ALTER TABLE "localizacao" DISABLE KEYS */;
/*!40000 ALTER TABLE "localizacao" ENABLE KEYS */;

-- Copiando estrutura para tabela public.noticiasemana
CREATE TABLE IF NOT EXISTS "noticiasemana" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''noticiasemana_id_seq''::regclass)',
	"titulo" VARCHAR NOT NULL,
	"conteudo" VARCHAR NOT NULL,
	"data" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id")
);

-- Copiando dados para a tabela public.noticiasemana: 0 rows
/*!40000 ALTER TABLE "noticiasemana" DISABLE KEYS */;
/*!40000 ALTER TABLE "noticiasemana" ENABLE KEYS */;

-- Copiando estrutura para tabela public.planejamentocultura
CREATE TABLE IF NOT EXISTS "planejamentocultura" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''planejamentocultura_id_seq''::regclass)',
	"dataplanejamento" TIMESTAMP NOT NULL,
	"recomendacoes" VARCHAR NOT NULL,
	"idcultura" INTEGER NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "planejamentocultura_fk" FOREIGN KEY ("idcultura") REFERENCES "public"."cultura" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Copiando dados para a tabela public.planejamentocultura: 0 rows
/*!40000 ALTER TABLE "planejamentocultura" DISABLE KEYS */;
/*!40000 ALTER TABLE "planejamentocultura" ENABLE KEYS */;

-- Copiando estrutura para tabela public.usuario
CREATE TABLE IF NOT EXISTS "usuario" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''usuario_id_seq''::regclass)',
	"nome" VARCHAR NOT NULL,
	"senha" VARCHAR NOT NULL,
	PRIMARY KEY ("id")
);

-- Copiando dados para a tabela public.usuario: 0 rows
/*!40000 ALTER TABLE "usuario" DISABLE KEYS */;
INSERT INTO "usuario" ("id", "nome", "senha") VALUES
	(1, 'ADMIN', 'ADMIN'),
	(2, 'Caramelo', '12'),
	(5, 'teste', 'null');
/*!40000 ALTER TABLE "usuario" ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
