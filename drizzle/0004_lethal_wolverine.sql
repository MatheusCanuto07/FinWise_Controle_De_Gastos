CREATE TABLE `lembretes` (
	`id` integer PRIMARY KEY NOT NULL,
	`idUser` integer NOT NULL,
	`nome` text NOT NULL,
	`pessoa` text NOT NULL,
	`valor` text NOT NULL
);
