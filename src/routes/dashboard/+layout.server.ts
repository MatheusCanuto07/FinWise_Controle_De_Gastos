import type { LayoutServerLoad } from './$types';
// import {
//   selectTransactions, 
// } from "$lib/db/DAO/Transacao";
// import {
//   getCartoes,
//   getSaldoByCard
// } from "$lib/db/DAO/Cartoes";
import { dataParaTimestamp } from '$lib/utils/functions';
import type {CartaoSelect} from "$lib/db/schema/tables";

export const load = (async ({url}) => {
  // let cartoes = await getCartoes(1);
  let date = new Date();
  let primeiroDia = dataParaTimestamp(new Date(date.getFullYear(), date.getMonth(), 1));
  let ultimoDia = dataParaTimestamp(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  
  let cartoesComSaldo : CartaoSelect[] = [];
  // for (let index = 0; index < cartoes.length; index++) {
  //   cartoesComSaldo.push({
  //     ...cartoes[index],
  //     saldo : (await getSaldoByCard(1, cartoes[index].id, primeiroDia, ultimoDia)).result
  //   });    
  // }
  // TODO: Lembrar de mandar as transações ordenadas por data se não vai dar bo no front
  return {
    // cartoes,
    cartoesComSaldo
  };
}) satisfies LayoutServerLoad;