LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO devvision_dev.categories (name) VALUES ('Admin'), ('Viewer'), ('Guest');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO devvision_dev.brands (name) VALUES ('Oakley'), ('Ray-Ban'), ('Prada'), ('Versace'), ('Dolce & Gabbana');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO devvision_dev.genders (name) VALUES ('Femenino'), ('Masculino'), ('Unisex');
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO devvision_dev.colors (name, code_hex) VALUES ('Verde','#008000'),('Azul','#0000FF'), ('Rojo','#FF0000'), ('Amarillo','#FFFF00'), ('Violeta','#EE82EE');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO devvision_dev.sizes (name,short_name) VALUES ('Extra Small','XS'), ('Small','S'), ('Medium','M'), ('Large','L'), ('Extra Large','XL');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO devvision_dev.users (id, first_name, last_name, email, birthday, password, id_category ) 
VALUES(0, 'Administrator', 'Devvision', 'admin@devvision.com.ar', '2011-01-01', '$2a$10$ots5gOjtTdvWQUr8JtKV7OG3aV6Ph6novUbeuGLycQ6INgpoTh616','1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `build_types` WRITE;
/*!40000 ALTER TABLE `build_types` DISABLE KEYS */;
INSERT INTO devvision_dev.build_types (name) VALUES ('Casa'), ('Departamento'), ('Oficina');
/*!40000 ALTER TABLE `build_types` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"371ab9cd-3b80-42cd-8803-2e566a787e90",
"4555l",
"Oakley 9263 Turbine",
1, /*Oakley*/
"Verano",
"079231-147",
3, /*Unisex*/
1,
1,
"2023",
"Gafas De Sol Oakley 9263 para hombre, en inyectada, tipo de montura aro completo con lente Prizm, fabricadas en USA.",
61800,
0,
"image-1697515457176.png",
"1",
"1",
NULL,
NULL,
NULL,
NULL);

LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"28d9214a-3231-4977-98ef-ae4c88416ddd",
"545sf",
"Ray-Ban New Wayfarer",
2, /*Ray-Ban New Wayfarer*/
"Verano",
"035272-127",
2, /*Masculino*/
2,
2,
"2022",
"Gafas de sol Ray-Ban 2132 New Wayfarer, para mujer y hombre, aro completo, en nylon y varillas 145mm, fabricadas en Italia.",
49000,
20,
"image-1697515751654.png",
"0",
"1",
NULL,
NULL,
NULL,
NULL);

LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"4cee5e28-525a-4156-a914-32bd43183cac",
"5wfff",
"Prada 01YS 1BO06F",
3, /*Prada*/
"Verano",
"079966-123",
3, /*Unisex*/
3,
3,
"2023",
"Gafas De Sol Prada 01YS para hombre, en inyectada, tipo de montura careta con lente Espejado, fabricadas en Italia.",
125800,
0,
"image-1697515939391.png",
"0",
"1",
NULL,
NULL,
NULL,
NULL);

LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"14bf4334-8647-4108-a51b-ac1280402b9b",
"f2220f",
"Versace 2240",
4, /*Versace*/
"Verano",
"076187-121",
2, /*Hombre*/
4,
4,
"2021",
"Gafas de sol Versace 2240 para mujer, aro completo, fabricadas en Italia.",
105000,
10,
"image-1697516155582.png",
"0",
"1",
NULL,
NULL,
NULL,
NULL);


LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"454f099a-6ef9-45ea-8c86-0ec5eed14fba",
"fw222",
"D&G 2233 3277K1",
5, /*Dolce & Gabbana*/
"Verano",
"079323-163",
2, /*Hombre*/
1,
1,
"2020",
"Gafas De Sol Dolce & Gabbana 2233 para hombre, en metálica, tipo de montura careta con lente Espejado, fabricadas en Italia.",
982000,
20,
"image-1697516498757.png",
"0",
"1",
NULL,
NULL,
NULL,
NULL);

LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"dfea73aa-2b43-4f88-a1d4-5f92fa2a4665",
"d0222d",
"Oakley Radar Ev Path",
1, /*Oakley*/
"Verano",
"9208",
2, /*Hombre*/
2,
2,
"2022",
"Gafas De Sol Oakley 9208 Radar Ev Path , para hombre, ranuradas, inyectadas y varillas 128mm, fabricadas en USA.",
70700,
0,
"image-1697516698477.png",
"0",
"1",
NULL,
NULL,
NULL,
NULL);

LOCK TABLES `products` WRITE;
INSERT INTO devvision_dev.products
(id, art, name, id_brand, collection, model, id_gender, id_color, id_size, `year`, description, price, discount, image, is_news, is_active, created_by, created_at, updated_by, updated_at)
VALUES(
"7535d7c3-72a2-48ad-9d05-a54c9a80b8f0",
"d22c4",
"Ray-Ban 664051",
2, /*Ray-Ban*/
"Verano",
"0707S",
1, /*Mujer*/
3,
3,
"2022",
"Gafas De Sol Ray-Ban 0707S para mujer, en acetato, tipo de montura aro completo con lente Degradado, fabricadas en Italia.",
59600,
35,
"image-1697517043831.png",
"1",
"1",
NULL,
NULL,
NULL,
NULL);

