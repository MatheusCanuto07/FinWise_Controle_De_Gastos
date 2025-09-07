// import { createLembrete } from '$lib/db/DAO/Lembrete';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async () => {

  return {};
}) satisfies PageServerLoad;

export const actions = {
	insert: async ({cookies, request}) => {
		const dataForm = await request.formData();
    const nome = dataForm.get('nome')?.toString() || ""
    const pessoa = dataForm.get('pessoa')?.toString() || ""
    const valor = dataForm.get('valor')?.toString() || ""

    try{
      // const id = await createLembrete({
      //   idUser : 1,
      //   pessoa : pessoa,
      //   nome : nome,
      //   valor : parseInt(valor ?? "0")
      // });
      return {success: true}
    }
    catch(error){
      console.error('Erro ao inserir transação:', error);
      return "Erro ao inserir transação";
    }
	},
} satisfies Actions;