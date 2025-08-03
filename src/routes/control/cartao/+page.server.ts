import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { createCartao, getCartoes } from '$lib/db/DAO/Cartoes';
import { dataParaTimestamp } from '$lib/utils/functions';

export const load = (async () => {
  let cartoes = await getCartoes(1);
  return {
    cartoes
  };
}) satisfies PageServerLoad;

export const actions = {
	insert: async ({cookies, request}) => {
		const dataForm = await request.formData();
    const nome = dataForm.get('nome')?.toString() || ""
    const tipo = dataForm.get('tipo')?.toString() || ""
    const diaVencimento = dataForm.get('diaVencimento')?.toString() || "";

    try{
      const id = await createCartao({
        nome,
        idUser : 1,
        tipo : tipo,
        diaVencimento : parseInt(diaVencimento),
      });
      return {success: true}
    }
    catch(error){
      console.error('Erro ao inserir transação:', error);
      return "Erro ao inserir transação";
    }
	},
} satisfies Actions;