import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';
import { fail, type Actions } from "@sveltejs/kit";
import { eq } from 'drizzle-orm';
import { db } from '$lib/db/db';
import { usuarioTable } from '$lib/db/schema';

export const load = (async () => {
  
  return {
    
  };
}) satisfies PageServerLoad;

export const actions = {
  create: async (event : any) => {
    const formData = await event.request.formData();

    const valorText = parseInt(formData.get("valorText"));
    const tipoText = formData.get("tipoText").toString();
    const categoriaText = formData.get("categoriaText").toString();
    const descText = formData.get("descText").toString();
    const dataText = (+new Date(formData.get("dataText"))).toString();

    
    try {
      const res = await q.queries().enviarTransacaoSimples({
        data : dataText,
        valor : valorText,
        tipo : tipoText,
        categoria : categoriaText,
        descricao : descText,
        idUsuario : 1,
        formaPagamento : "debito"
      });

      return {
        success: true,
        message: "Adicionada com sucesso",
      }
   
    } catch (e: any) {
      console.log(e.message);
      return fail(404, {
        success: false,
        message: e.message ?? "Unknow error",
      });
    }
  },
} satisfies Actions;