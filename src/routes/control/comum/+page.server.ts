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

    const valorText = formData.get("valorText");
    // Já pega o input selected de forma automática
    const tipoText = formData.get("tipoText").toString();
    const categoriaText = formData.get("categoriaText").toString();
    const descText = formData.get("descText").toString();
    const dataText = (+new Date(formData.get("dataText"))).toString();
    console.log(dataText)
    
    try {
      const res = await q.queries().enviarTransacaoSimples({
        tipo : tipoText,
        data: dataText,
        valor: valorText,
        categoria: categoriaText,
        idUsuario: 1
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