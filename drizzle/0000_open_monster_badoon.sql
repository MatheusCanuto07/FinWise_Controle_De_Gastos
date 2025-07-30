CREATE TABLE `cartao` (
	`id` integer PRIMARY KEY NOT NULL,
	`idUser` integer NOT NULL,
	`tipo` text NOT NULL,
	`dataVencimento` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `categoria` (
	`id` integer PRIMARY KEY NOT NULL,
	`idUser` integer NOT NULL,
	`nome` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `transaction` (
	`id` integer PRIMARY KEY NOT NULL,
	`idUser` integer NOT NULL,
	`idCategoria` integer NOT NULL,
	`idCartao` integer NOT NULL,
	`valor` integer NOT NULL,
	`data` integer NOT NULL,
	`meio` text NOT NULL,
	`tipo` text NOT NULL,
	`recorrencia` text NOT NULL,
	`tempoRecorrencia` text,
	`tipoRecorrencia` text,
	`diaRecorrencia` text,
	`idOcorrencia` integer
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`saldo` integer NOT NULL
);
