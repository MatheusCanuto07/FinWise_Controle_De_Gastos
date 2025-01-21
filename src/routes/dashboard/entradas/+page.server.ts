
import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
  const url = params

  const todasTransacoes = await q.queries().listarTransacoesPeriodoAtual("entrada");
  return {
    todasTransacoes
  };
}) satisfies PageServerLoad;