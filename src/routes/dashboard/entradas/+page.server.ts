
import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
  const url = params;
  // Preencher o banco com transações
  const transacoesDoUltimoMes = await q.queries().carregarTransacoesDoUltimoMes("entrada", 1);
  return {
    transacoesDoUltimoMes
  };

}) satisfies PageServerLoad;