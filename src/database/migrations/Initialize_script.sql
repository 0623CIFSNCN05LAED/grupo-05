DROP DATABASE IF EXISTS devvision_dev;
CREATE DATABASE devvision_dev;
USE devvision_dev;

/*-----------*/
/* CATEGORIES*/ 
/*-----------*/
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO devvision_dev.categories (name)
VALUES
('Admin'),
('Viewer'), 
('Guest');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

/*-----------*/
/* BRANDS    */
/*-----------*/
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brand_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO devvision_dev.brands (name)
VALUES
('Oakley'),
('Ray-Ban'), 
('Prada'),
('Versace'),
('Dolce & Gabbana');

/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

/*-----------*/
/* GENDERS   */
/*-----------*/
DROP TABLE IF EXISTS `genders`;
CREATE TABLE `genders` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `genders_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO devvision_dev.genders (name)
VALUES
('Femenino'),
('Masculino'), 
('Unisex');

/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

/*-----------*/
/* COLORS    */
/*-----------*/
DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (`id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `codeHex` varchar(7) NOT null,
  PRIMARY KEY (`id`),
  UNIQUE KEY `colors_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO devvision_dev.colors (name, codeHex)
VALUES
('Azul','#0000FF'),
('Rojo','#FF0000'), 
('Amarillo','#FFFF00'),
('Violeta','#EE82EE');

/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

/*-----------*/
/* SIZES     */
/*-----------*/
DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `shortName` varchar(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sizes_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO devvision_dev.sizes (name,shortName)
VALUES
('Small','S'),
('Medium','M'), 
('Large','L'),
('Extra Large','XL');

/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

/*-----------*/
/* USERS     */ 
/*-----------*/
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `buildtype` varchar(25) COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `zipcode` varchar(8) NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_category` int(1) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO devvision_dev.users
(id, firstName, lastName, email, birthday, password, id_category )
VALUES(0, 'Administrator', 'Devvision', 'admin@devvision.com.ar', '2011-01-01', '$2a$10$ots5gOjtTdvWQUr8JtKV7OG3aV6Ph6novUbeuGLycQ6INgpoTh616','1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

/*-----------*/
/* PRODUCTS  */
/*-----------*/
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `art` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_brand` int(10) unsigned NOT NULL,
  `collection` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_gender` int(10) unsigned NOT NULL,
  `year` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `discount` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `is_news` tinyint(1) NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_by` int(10),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10),
  `updated_at` timestamp NULL DEFAULT NULL,	
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `sku`;
CREATE TABLE `sku` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `id_product` int(1) NOT NULL,
  `id_color` int(1) NOT NULL,
  `id_size` int(1) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

