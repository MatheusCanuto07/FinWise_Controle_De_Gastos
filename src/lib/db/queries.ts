import { desc, eq, sql, between, and } from 'drizzle-orm'
import { transactionsTable } from './schema'
import { db } from './db'

type transactionsModel = typeof transactionsTable.$inferInsert;
type transactionsSelect = typeof transactionsTable.$inferSelect;

export const queries = () => ({
  listarTransacoes : async () => {
    return db.select().from(transactionsTable);
  },
  
  enviarTransacaoSimples : async (transacao : transactionsModel) => {
    return db.insert(transactionsTable).values(transacao)
  },
  
  listarTransacoesPeriodoAtual : async (tipo : string) => {
    const hoje = new Date();
    const primeiroDia = (new Date(hoje.getFullYear(), hoje.getMonth(), 1)).toLocaleDateString();
    const diaAtual = (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())).toLocaleDateString();

  console.log(primeiroDia, diaAtual)
  return db.select()
    .from(transactionsTable)
    .where(
      and(between(transactionsTable.data, primeiroDia.toString(), diaAtual.toString()), eq(transactionsTable.tipo, tipo)),
    );
  },
})