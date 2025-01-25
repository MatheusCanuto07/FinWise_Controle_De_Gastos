
import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';
import { transactionsTable, usuarioTable } from '$lib/db/schema';
import { desc, sql, between, and } from 'drizzle-orm';

import { db } from '$lib/db/db';
import { eq } from 'drizzle-orm';


type transactionsModel = typeof transactionsTable.$inferInsert;
type transactionsSelect = typeof transactionsTable.$inferSelect;

type usuarioModel = typeof usuarioTable.$inferSelect;
type usuarioSelect = typeof usuarioTable.$inferInsert;

export const load = (async ({params}) => {
  const url = params;
  // TODO: Recuperar o id do usuário na sessão
  let idUsuarioAtual = 1;
  const queries = q.queries();

  const [
    tEntrada,
    saldoAtual
  ] = await Promise.all([
    queries.carregarmovimentacao(idUsuarioAtual, "entrada"),
    queries.carregarSaldoUsuario(idUsuarioAtual),
  ])

  console.log(saldoAtual)
  return {
    tEntrada,
    saldoAtual
  };
}) satisfies PageServerLoad;