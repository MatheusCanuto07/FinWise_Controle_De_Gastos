import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactionTable = sqliteTable('transaction', {
  id: integer('id').primaryKey().notNull(),
  idUser : integer('idUser').notNull(),
  idCategoria : integer('idCategoria').notNull(),
  idCartao : integer('idCartao').notNull(),
  valor : integer('valor').notNull(),
  data : text('data').notNull(),
  meio : text('meio').notNull(),
  tipo : text('tipo').notNull(),
  recorrencia : text('mes').notNull(),
  tempoRecorrencia : text('')
})