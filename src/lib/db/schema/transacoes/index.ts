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

// Tabela para Clientes (Futura, propósitos adicionais)
// export const clientesTable = sqliteTable("clientes", {
//   id: int("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").notNull(),
//   password: text("password").notNull(),
//   createdAt: text("created_at"),
//   updatedAt: text("updated_at"),
// });

// Inferência automática de tipo para produtos

export type transactionsTable = typeof transactionsTable.$inferInsert;