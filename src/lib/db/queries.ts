import { desc, eq, sql } from 'drizzle-orm'
import { transactionsTable } from './schema'
import { db } from './db'

type transactionsModel = typeof transactionsTable.$inferInsert;

export const queries = () => ({
  listarTransacoes : async () => {
    return db.select().from(transactionsTable);
  },

  enviarTransacaoSimples : async (transacao : transactionsModel) => {
    return db.insert(transactionsTable).values(transacao)
  }
})