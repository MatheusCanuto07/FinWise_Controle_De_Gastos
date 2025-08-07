import type { PageServerLoad } from './$types';
import { dataParaTimestamp, timestampParaData } from '$lib/utils/functions';
import {selectTransactions} from "$lib/db/DAO/Transacao";

export const load = (async () => {
  let date = new Date();
  let primeiroDia = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
  let ultimoDia = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 0));
  console.log(primeiroDia, ultimoDia);
  let transacoes = await selectTransactions(primeiroDia, ultimoDia, 1);
  
  const transacoesWithDate = transacoes.map(t => {
    return {
      ...t,
      dataConvertida: timestampParaData(t.data)
    };
  });
  
  return {
    transacoes
  };
}) satisfies PageServerLoad;