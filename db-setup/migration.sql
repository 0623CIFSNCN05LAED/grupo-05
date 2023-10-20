DROP DATABASE devvision_dev;

CREATE DATABASE devvision_dev;

DROP TABLE IF EXISTS devvision_dev.colors;

CREATE TABLE devvision_dev.colors (
	id INT NOT null primary KEY,
	name varchar(100) NULL,
	codeHex varchar(100) NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

INSERT INTO devvision_dev.colors (id, name, codeHex) VALUES(1, 'azul', '#0000FF');
INSERT INTO devvision_dev.colors (id, name, codeHex) VALUES(2, 'rojo', '#FF0000');
INSERT INTO devvision_dev.colors (id, name, codeHex) VALUES(3, 'amarillo', '#FFFF00');
INSERT INTO devvision_dev.colors (id, name, codeHex) VALUES(4, 'violeta', '#EE82EE');