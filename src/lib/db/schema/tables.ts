import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactionTable = sqliteTable('transaction', {
  id: integer('id').primaryKey().notNull(),
  idUser: integer('idUser').notNull(),
  idCategoria: integer('idCategoria').notNull(),
  idCartao: integer('idCartao').notNull(),
  valor: integer('valor').notNull(),
  data: integer('data').notNull(),
  meio: text('meio').notNull(),
  tipo: text('tipo').notNull(),
  // Recorrencia
  // Sim ou não
  recorrencia: text('recorrencia').notNull(),
  // 7 vezes
  tempoRecorrencia: text('tempoRecorrencia'),
  // Tipo de ocorrencia
  tipoRecorrencia: text('tipoRecorrencia'),
  // Dia ocorrencia
  diaOcorrencia: text('diaRecorrencia'),
  // idOcorrencia
  idOcorrencia: integer('idOcorrencia'),
});

export const lembretesTable = sqliteTable('lembretes', {
  id: integer('id').primaryKey().notNull(),
  idUser : integer('idUser').notNull(),
  nome : text('nome').notNull(),
  pessoa : text('pessoa').notNull(),
  valor : integer('valor').notNull(),
})

export const cartaoTable = sqliteTable('cartao', {
  id: integer('id').primaryKey().notNull(),
  idUser: integer('idUser').notNull(),
  nome: text('nome').notNull(),
  tipo: text('tipo').notNull(),
  diaVencimento: integer('diaVencimento').notNull()
});

export const categoriaTable = sqliteTable('categoria', {
  id: integer('id').primaryKey().notNull(),
  idUser: integer('idUser').notNull(),
  nome: text('nome').notNull()
});

export const usuarioTable = sqliteTable('user', {
  id: integer('id').primaryKey().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  saldo: integer('saldo').notNull()
});

export type TransactionSelect = typeof transactionTable.$inferSelect;
export type TransactionInsert = typeof transactionTable.$inferInsert;

export type CartaoSelect = typeof cartaoTable.$inferSelect;
export type CartaoInsert = typeof cartaoTable.$inferInsert;

export type CategoriaSelect = typeof categoriaTable.$inferSelect;
export type CategoriaInsert = typeof categoriaTable.$inferInsert;

export type UsuarioSelect = typeof usuarioTable.$inferSelect;
export type UsuarioInsert = typeof usuarioTable.$inferInsert;

export type LembreteSelect = typeof lembretesTable.$inferSelect;
export type LembreteInsert = typeof lembretesTable.$inferInsert;