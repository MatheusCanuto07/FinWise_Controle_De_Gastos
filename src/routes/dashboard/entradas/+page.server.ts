
import type { PageServerLoad } from './$types';
import {selectTransactions, selectTransactionsWithType} from "$lib/db/DAO/Transacao";

export const load = (async ({params, url}) => {
  let date = new Date();
  let primeiroDia = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
  let ultimoDia = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0));
  
  const cardId = url.searchParams.get("cardId");

  const transacoes = await selectTransactionsWithType(
    primeiroDia,
    ultimoDia,
    1,
    "entrada",
    cardId && cardId !== "0" ? parseInt(cardId) : undefined
  );

  return {
    transacoes
  };

}) satisfies PageServerLoad;