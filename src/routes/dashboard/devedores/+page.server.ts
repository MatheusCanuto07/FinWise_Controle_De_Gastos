import type { PageServerLoad } from './$types';
import * as q from '$lib/db/queries';

export const load = (async () => {
  let listaDevedores = await q.queries().carregarTransacoesDoUltimoMes("devedor", 1);
  return {
    listaDevedores
  };
}) satisfies PageServerLoad;