import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import {insertTransaction, getCategorias, getCartoes} from "$lib/db/Controller";
import type { TransactionInsert } from '$lib/db/schema/tables';
import {dataParaTimestamp, timestampParaData} from '$lib/utils/functions';

export const load = (async () => {
  let categorias = await getCategorias(1);
  let cartoes = await getCartoes(1);
  return {
    categorias,
    cartoes
  };
}) satisfies PageServerLoad;

export const actions = {
	insert: async ({cookies, request}) => {
		const dataForm = await request.formData();
    const valor = dataForm.get('valor')?.toString() || ""
		const data = dataForm.get('data')?.toString() || ""
    const idCategoria = dataForm.get('idCategoria')?.toString() || ""
    const idCartao = dataForm.get('idCartao')?.toString() || ""
    const meio = dataForm.get('meio')?.toString() || ""
    const tipo= dataForm.get('tipo')?.toString() || ""
    const recorrencia = dataForm.get('recorrencia')?.toString() || ""

    let transactionInsert : TransactionInsert ={
      idUser : 1,
      valor : parseInt(valor ?? "0") / 100,
      data : dataParaTimestamp(new Date(data)),
      idCategoria : parseInt(idCategoria ?? "0"),
      idCartao : parseInt(idCartao ?? "0"),
      meio : meio,
      tipo : tipo,
      recorrencia : recorrencia
    }
    try{
      const id = await insertTransaction(transactionInsert);
      return {success: true}
    }
    catch(error){
      console.error('Erro ao inserir transação:', error);
      return "Erro ao inserir transação";
    }
	},
} satisfies Actions;