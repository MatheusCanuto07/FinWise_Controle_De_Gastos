import { privateDecrypt } from "crypto";
import { float } from "drizzle-orm/mysql-core";
import { sqliteTable, int, text, real } from "drizzle-orm/sqlite-core";

export const testSvelte = sqliteTable("testSvelte", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull()
})  

export const productsTable = sqliteTable("produtos", {
  id: int("id").primaryKey(),
  title : text("title").notNull(),
  description: text("description").notNull(),
  titleServe : text("titleServe").notNull(),
  price: real("price").notNull(),
  img: text("img"),
})  

// Fala que um tipo é inferido altomaticamente a partir da tabela
export type Product = typeof productsTable.$inferSelect;