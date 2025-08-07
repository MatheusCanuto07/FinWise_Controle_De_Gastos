import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { 
  insertTransaction,
} from "$lib/db/DAO/Transacao";
import {
  getCategorias
} from "$lib/db/DAO/Categorias";
import {
  getCartoes,
  getCartaoById
} from "$lib/db/DAO/Cartoes";
import type { TransactionInsert } from '$lib/db/schema/tables';
import {dataParaTimestamp, getTipoCartao, timestampParaData} from '$lib/utils/functions';

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
    let idCartao = dataForm.get('idCartao')?.toString() || ""
        let tipo = "";
    if(idCartao == "dinheiro"){
      idCartao = "0";
      tipo = "dinheiro";
    } else {
        tipo = (await getCartaoById(1, parseInt(idCartao))).tipo;
    }
    const recorrencia = dataForm.get('recorrencia')?.toString() || ""
    
    let transactionInsert : TransactionInsert ={
      idUser : 1,
      valor : parseInt(valor ?? "0") * 100,
      data : dataParaTimestamp(new Date(data)),
      idCategoria : parseInt(idCategoria ?? "0"),
      idCartao : idCartao == "dinheiro" ? 0 : parseInt(idCartao ?? "0"),
      meio : idCartao == "dinheiro" ? "dinheiro" : "cartao",
      tipo: tipo,
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