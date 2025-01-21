CREATE TABLE `transactionsT` (
	`id` integer PRIMARY KEY NOT NULL,
	`banco` text,
	`tipo` text NOT NULL,
	`data` text NOT NULL,
	`valor` integer NOT NULL,
	`categoria` text NOT NULL,
	`recorrencia` integer,
	`dataRecorrencia` integer,
	`descricao` text
);
--> statement-breakpoint
DROP TABLE `administradores`;--> statement-breakpoint
DROP TABLE `categorias`;--> statement-breakpoint
DROP TABLE `produto_categorias`;--> statement-breakpoint
DROP TABLE `produtos`;--> statement-breakpoint
DROP TABLE `transactions`;