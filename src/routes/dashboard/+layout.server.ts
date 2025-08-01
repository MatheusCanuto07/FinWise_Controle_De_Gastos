import type { LayoutServerLoad } from './$types';
import {getCartoes, selectTransactions, getSaldoByCard} from "$lib/db/Controller";
import { dataParaTimestamp } from '$lib/utils/functions';
import type {CartaoSelect} from "$lib/db/schema/tables";

export const load = (async ({url}) => {
  let cartoes = await getCartoes(1);
  let date = new Date();
  let primeiroDia = dataParaTimestamp(new Date(date.getFullYear(), date.getMonth(), 1));
  let ultimoDia = dataParaTimestamp(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  
  let cartoesComSaldo : CartaoSelect[] = [];
  for (let index = 0; index < cartoes.length; index++) {
    cartoesComSaldo.push({
      ...cartoes[index],
      saldo : (await getSaldoByCard(1, cartoes[index].id, primeiroDia, ultimoDia)).result
    });    
  }

  return {
    cartoes,
    cartoesComSaldo
  };
}) satisfies LayoutServerLoad;