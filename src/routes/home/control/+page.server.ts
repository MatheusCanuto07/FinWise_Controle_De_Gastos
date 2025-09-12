import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const load = (async () => {
  
  return redirect(303, "/control/transacao");
}) satisfies PageServerLoad;

export const actions = {
  
} satisfies Actions;