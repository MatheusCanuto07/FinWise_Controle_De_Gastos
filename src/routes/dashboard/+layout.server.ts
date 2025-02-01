import * as q from '$lib/db/queries';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
  const saldo = await q.queries().carregarSaldoUsuario(1);
  return {
    saldo,

  };
}) satisfies LayoutServerLoad;