
import type { PageServerLoad } from './$types';
import {selectTransactions, selectTransactionsWithType} from "$lib/db/DAO/Transacao";

export const load = (async ({params}) => {
  let date = new Date();
  let primeiroDia = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
  let ultimoDia = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0));
  
  let transacoes = await selectTransactionsWithType(primeiroDia, ultimoDia, 1, "saida");
  return {
    transacoes
  };

}) satisfies PageServerLoad;