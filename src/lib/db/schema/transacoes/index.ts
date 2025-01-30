import { privateDecrypt } from "crypto";
import { relations } from "drizzle-orm";
import { float } from "drizzle-orm/mysql-core";
import { sqliteTable, int, text, real, integer, primaryKey } from "drizzle-orm/sqlite-core";

// Fazer uma tabela de usuário com o saldo atual
export const usuarioTable = sqliteTable("usuarioTable", {
  id: int("id").primaryKey(),
  nome: text("nome").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  saldo: integer("saldo").notNull(),
});

export const userRelations = relations(usuarioTable, ({ many }) => ({
  transactios : many(transactionsTable),
}))

export const transactionsTable = sqliteTable("transactionsTable", {
  id: int("id").primaryKey(),
  banco: text("banco"),
  tipo: text("tipo").notNull(),
  data: text("data").notNull(),
  valor: integer("valor").notNull(),
  categoria: text("categoria").notNull(),
  recorrencia: integer("recorrencia"),
  dataRecorrencia: integer("dataRecorrencia"),
  descricao: text("descricao"),
  idUsuario: integer("idUsuario").notNull(),
});

export const transactionRelations = relations(transactionsTable, ({ one }) => ({
  user: one(usuarioTable, {
    fields: [transactionsTable.idUsuario],
    references: [usuarioTable.id],
  }),
}))

export type transactionsTable = typeof transactionsTable.$inferInsert;
export type usuarioTable = typeof usuarioTable.$inferInsert;