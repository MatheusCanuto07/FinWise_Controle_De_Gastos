CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`tipo` text NOT NULL,
	`data` text NOT NULL,
	`valor` integer NOT NULL,
	`categoria` text NOT NULL,
	`recorrencia` integer NOT NULL,
	`dataRecorrencia` integer NOT NULL,
	`observacao` text NOT NULL
);
