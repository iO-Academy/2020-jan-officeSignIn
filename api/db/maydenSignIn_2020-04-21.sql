# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.29)
# Database: maydenSignIn
# Generation Time: 2020-04-21 15:35:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table visitors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `visitors`;

CREATE TABLE `visitors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(256) NOT NULL DEFAULT 'null',
  `Company` varchar(256) DEFAULT 'null',
  `DateOfVisit` date NOT NULL DEFAULT '2999-12-25',
  `TimeOfSignIn` time NOT NULL DEFAULT '00:00:00',
  `TimeOfSignOut` time NOT NULL DEFAULT '00:00:00',
  `SignedIn` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `visitors` WRITE;
/*!40000 ALTER TABLE `visitors` DISABLE KEYS */;

INSERT INTO `visitors` (`id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn`, `TimeOfSignOut`, `SignedIn`)
VALUES
	(1,'Charlie','MarioTown','2020-04-12','23:59:59','12:43:43',1),
	(2,'Bob','Gulp','2020-03-19','13:59:59','15:43:43',0),
	(3,'Chris','OfficeSpot','2999-12-25','23:59:59','23:59:59',0),
	(4,'Roger','','2999-12-25','23:59:59','23:59:59',0),
	(5,'Jamie','Facebook','2999-12-25','23:59:59','23:59:59',0),
	(6,'roger','comp','2020-09-12','00:00:00','00:00:00',1),
	(7,'Bob Chapmen','Flow','2020-04-21','02:11:30','00:00:00',1),
	(8,'Roger Time','Pizza Party','2020-04-21','03:25:01','00:00:00',1),
	(9,'Cuthbert Cuthy','Laravel','2020-04-21','03:41:41','00:00:00',1),
	(10,'Fran','Google','2020-04-21','04:20:37','00:00:00',1),
	(11,'Nelly','Google','2020-04-21','04:27:32','00:00:00',1),
	(12,'Paul','Mayden','2020-04-21','04:31:52','00:00:00',1);

/*!40000 ALTER TABLE `visitors` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
