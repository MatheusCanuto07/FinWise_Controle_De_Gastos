import type { PageServerLoad } from './$types';
import * as q from '$lib/db/queries';

export const load = (async () => {
  let listaDividas = await q.queries().carregarTransacoesDoUltimoMes("divida", 1);
  return {
    listaDividas
  };
}) satisfies PageServerLoad;