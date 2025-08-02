import type { PageServerLoad } from './$types';
import { dataParaTimestamp } from '$lib/utils/functions';
import {getCartoes, selectTransactions, getSaldoByCard} from "$lib/db/Controller";

export const load = (async () => {
  let date = new Date();
  let primeiroDia = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
  let ultimoDia = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0));
  
  let transactions = await selectTransactions(primeiroDia, ultimoDia, 1);
  return {
    transactions
  };
}) satisfies PageServerLoad;