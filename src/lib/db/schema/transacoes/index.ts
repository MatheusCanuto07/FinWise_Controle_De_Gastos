import { privateDecrypt } from "crypto";
import { float } from "drizzle-orm/mysql-core";
import { sqliteTable, int, text, real, integer, primaryKey } from "drizzle-orm/sqlite-core";

export const transactionsTable = sqliteTable("transactionsT", {
  id: int("id").primaryKey(),
  banco: text("banco"),
  tipo: text("tipo").notNull(),
  data: text("data").notNull(),
  valor: integer("valor").notNull(),
  categoria: text("categoria").notNull(),
  recorrencia: integer("recorrencia"),
  dataRecorrencia: integer("dataRecorrencia"),
  descricao: text("descricao"),
});

export type transactionsTable = typeof transactionsTable.$inferInsert;