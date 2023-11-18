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

/*-----------*/
/* COLORS    */
/*-----------*/
DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `code_hex` varchar(7) NOT null,
  PRIMARY KEY (`id`),
  UNIQUE KEY `colors_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*-----------*/
/* SIZES     */
/*-----------*/
DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `short_name` varchar(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sizes_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*-----------*/
/* USERS     */ 
/*-----------*/
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(100) NOT null default '',
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `id_build_type` varchar(25) COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `zipcode` varchar(8) NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_category` int(1) unsigned NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*-------------*/
/* BUILD TYPES */
/*-------------*/
DROP TABLE IF EXISTS `build_types`;
CREATE TABLE `build_types` (
  `id` int(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `build_types_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*-----------*/
/* PRODUCTS  */
/*-----------*/
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` varchar(40) NOT null default '',
  `art` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_brand` int(10) unsigned NOT NULL,
  `collection` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_gender` int(10) unsigned NOT NULL,
  `year` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `discount` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `is_news` boolean NOT NULL DEFAULT '0',
  `is_active` boolean NOT NULL DEFAULT '1',
  `created_by` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_by` VARCHAR(255) NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,	
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*-----------------*/
/* PRODUCTS_COLORS */
/*------------------*/
DROP TABLE IF EXISTS `products_colors`;
CREATE TABLE `products_colors` (
  `id` varchar(40) NOT null,
  `id_product` varchar(40) NOT NULL,
  `id_color` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*------------------*/
/* PRODUCTS_SIZES   */
/*------------------*/
DROP TABLE IF EXISTS `products_sizes`;
CREATE TABLE `products_sizes` (
  `id` varchar(40) NOT null,
  `id_product` varchar(40) NOT NULL,
  `id_size` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
