import * as q from '$lib/db/queries';
import type { PageServerLoad } from './$types';
import { fail, type Actions } from "@sveltejs/kit";
import { eq } from 'drizzle-orm';
import { db } from '$lib/db/db';
import { usuarioTable } from '$lib/db/schema';

export const load = (async () => {
  

  const carregarSaldoUsuario = db!
      .select({
        saldo : usuarioTable.saldo
      })
      .from(usuarioTable)
      .where(eq(usuarioTable.id, 1))

  console.log(carregarSaldoUsuario)
  
  return {
    
  };
}) satisfies PageServerLoad;

export const actions = {
  create: async (event : any) => {
    const formData = await event.request.formData();

    const valorText = formData.get("valorText");
    const tipoText = formData.get("tipoText").toString();
    const categoriaText = formData.get("categoriaText").toString();
    const descText = formData.get("descText").toString();
    const dataText = formData.get("dataText").toString();
    
    try {
      const res = await q.queries().enviarTransacaoSimples({
        tipo : "",
        data: dataText,
        valor: 10,
        categoria: categoriaText,
        idUsuario: 1
      });

      console.log(res);

      return {
        success: true,
        message: "Adicionada com sucesso",
        res : res
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