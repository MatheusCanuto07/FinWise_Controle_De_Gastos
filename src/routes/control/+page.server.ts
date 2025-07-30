import type { PageServerLoad } from './$types';
import { fail, type Actions } from "@sveltejs/kit";
import { eq } from 'drizzle-orm';
import { db } from '$lib/db/db';

export const load = (async () => {
  
  return {
    
  };
}) satisfies PageServerLoad;

export const actions = {
  
} satisfies Actions;