CREATE TABLE `administradores` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`date` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `categorias` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `produto_categorias` (
	`product_id` integer NOT NULL,
	`category_id` integer NOT NULL,
	PRIMARY KEY(`category_id`, `product_id`),
	FOREIGN KEY (`product_id`) REFERENCES `produtos`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`category_id`) REFERENCES `categorias`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `testSvelte`;