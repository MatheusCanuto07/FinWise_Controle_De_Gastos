import type { PageServerLoad } from './$types';
import {asc} from 'drizzle-orm';
import { db } from '../lib/db';
import { testSvelte } from '$lib/schema';

export const load = (async () => {
  
  const dados = await db.query.testSvelte.findMany();

  return {
    dados
  };
}) satisfies PageServerLoad;