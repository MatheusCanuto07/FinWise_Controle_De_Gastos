import type { LayoutServerLoad } from './$types';
import {selectTransactions} from "$lib/db/Controller";

export const load = (async ({url}) => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);
  const endDate = new Date();
  const transactions = await selectTransactions(startDate, endDate);
  
  let saldo = 0;
  transactions.forEach((t) => {
    if(t.tipo == "entrada"){
      saldo += t.valor
    } else{
      saldo -= t.valor
    }
  });

  let gastosPrevistos = 0;
  transactions.forEach((t) => {
    if(t.tipo == "saida"){
      saldo += t.valor
    }
  });

  return {
    transactions,
    saldo,
    gastosPrevistos
  };
}) satisfies LayoutServerLoad;