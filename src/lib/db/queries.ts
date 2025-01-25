import { desc, eq, sql, between, and } from 'drizzle-orm';
import { transactionsTable, usuarioTable } from './schema';
import { db } from './db';

type transactionsModel = typeof transactionsTable.$inferInsert;
type transactionsSelect = typeof transactionsTable.$inferSelect;

type usuarioModel = typeof usuarioTable.$inferSelect;
type usuarioSelect = typeof usuarioTable.$inferInsert;

export const queries = () => ({
	listarTransacoes: async () => {
		return db.select().from(transactionsTable);
	},

	enviarTransacaoSimples: async (transacao: transactionsModel) => {
		return db.insert(transactionsTable).values(transacao);
	},

	listarTransacoesPeriodoAtual: async (tipo: string) => {
		const hoje = new Date();
		const primeiroDia = new Date(hoje.getFullYear(), hoje.getMonth(), 1).toLocaleDateString();
		const diaAtual = new Date(
			hoje.getFullYear(),
			hoje.getMonth(),
			hoje.getDate()
		).toLocaleDateString();

		console.log(primeiroDia, diaAtual);
		return db
			.select()
			.from(transactionsTable)
			.where(
				and(
					between(transactionsTable.data, primeiroDia.toString(), diaAtual.toString()),
					eq(transactionsTable.tipo, tipo)
				)
			);
	},

	enviarTransacao: async (transacao: transactionsModel, usuario : usuarioModel) => {
		return db.transaction(async (t) => {
			t.insert(transactionsTable).values(transacao);
			t
      .update(usuarioTable)
      .set({saldo : sql`${usuario.saldo} - ${transacao.valor}`})
      .where(eq(usuarioTable.id, transactionsTable.idUsuario));
		});
	},

  carregarmovimentacao: async (idUsuario : number, tipoT : string) => {
    const result = await db
    .select()
    .from(transactionsTable)
    .where(and(
      eq(transactionsTable.idUsuario, 1),
      eq(transactionsTable.tipo, "entrada")
    ))

    return result
  },

  carregarSaldoUsuario: async (idUsuario : number) => {
    const result = await db
    .select({
      saldo : usuarioTable.saldo
    })
    .from(usuarioTable)
    .where(eq(usuarioTable.id, idUsuario))
    return result
  },




});
