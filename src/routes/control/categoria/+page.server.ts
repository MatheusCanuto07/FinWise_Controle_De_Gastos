import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import type { CategoriaInsert } from '$lib/db/schema/tables';
import { createCategory, getCategorias } from '$lib/db/Controller';

export const load = (async () => {
  let categorias = await getCategorias(1);
  return {
    categorias
  };
}) satisfies PageServerLoad;

export const actions = {
	insert: async ({cookies, request}) => {
		const dataForm = await request.formData();
    const nome = dataForm.get('nome')?.toString() || ""
  
    try{
      const id = await createCategory({
        idUser : 1,
        nome : nome
      });
      return {success: true}
    }
    catch(error){
      console.error('Erro ao inserir transação:', error);
      return "Erro ao inserir transação";
    }
	},
} satisfies Actions;