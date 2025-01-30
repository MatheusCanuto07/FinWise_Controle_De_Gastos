
import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';

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