import type { LayoutServerLoad } from './$types';
import * as q from '$lib/db/queries';

export const load = (async () => {
  const saldo = await q.queries().carregarSaldoUsuario(1);
  return {
    saldo,

  };
}) satisfies LayoutServerLoad;