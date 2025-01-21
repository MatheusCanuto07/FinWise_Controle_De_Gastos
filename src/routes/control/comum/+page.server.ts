import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';
import { fail, type Actions } from "@sveltejs/kit";

export const load = (async () => {
  
  const todasTransacoes = await q.queries().listarTransacoes();
  return {
    todasTransacoes
  };
}) satisfies PageServerLoad;

export const actions = {
  create: async (event : any) => {
    const formData = await event.request.formData();

    const valorText = formData.get("valorText");
    const tipoText = formData.get("tipoText");
    const categoriaText = formData.get("categoriaText");
    const descText = formData.get("descText");
    const dataText = formData.get("dataText");
    
    try {
      const res = await q.queries().enviarTransacaoSimples({
        categoria : categoriaText,
        data : dataText,
        dataRecorrencia : null,
        descricao : descText,
        recorrencia : null,
        tipo : tipoText,
        valor : Number(valorText),
      });

      console.log(res);

      return {
        success: true,
        message: "Adicionada com sucesso",
        res : res
      }
   
    } catch (e: any) {
      return fail(404, {
        success: false,
        message: e.message ?? "Unknow error",
      });
    }
  },
} satisfies Actions;