import { desc, eq, sql, between, and } from 'drizzle-orm';
import { transactionsTable, usuarioTable } from './schema';
import { db } from './db';

type transactionsModel = typeof transactionsTable.$inferInsert;
type transactionsSelect = typeof transactionsTable.$inferSelect;

type usuarioModel = typeof usuarioTable.$inferSelect;
type usuarioSelect = typeof usuarioTable.$inferInsert;

// A biblioteca db retorna os resultados como um array de objetos
export const queries = () => ({
	listarTransacoes: async () => {
		return db.select().from(transactionsTable);
	},

	enviarTransacaoSimples: async (transacao: transactionsModel) => {
		return db.insert(transactionsTable).values(transacao);
	},

	carregarTransacoesDoUltimoMes: async (tipo: string, idUsuario: number) => {
		const dataHoje = new Date();
    const dataUmMesAtras = +new Date(dataHoje.getFullYear(), dataHoje.getMonth() - 1, dataHoje.getDate());
		const diaAtual = +new Date();
    // 1738281600000
		console.log(dataUmMesAtras, diaAtual);

    let q = db!
    .select()
    .from(transactionsTable)
    .where(
      and(
        between(transactionsTable.data, dataUmMesAtras.toString(), diaAtual.toString()),
        eq(transactionsTable.tipo, tipo),
        eq(transactionsTable.idUsuario, idUsuario)
      ) 
    );
		return q
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
    const result = await db!
    .select()
    .from(transactionsTable)
    .where(and(
      eq(transactionsTable.idUsuario, idUsuario),
      eq(transactionsTable.tipo, tipoT)
    ))

    return result
  },

  carregarSaldoUsuario: async (idUsuario : number) => {
    const result = await db!
    .select()
    .from(usuarioTable)
    .where(eq(usuarioTable.id, idUsuario))
    return result
  },


});
