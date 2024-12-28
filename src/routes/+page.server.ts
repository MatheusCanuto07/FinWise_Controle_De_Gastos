import type { PageServerLoad } from './$types';
import {asc} from 'drizzle-orm';
import { db } from '../lib/db';
import { productsTable, testSvelte } from '$lib/schema';

export const load = (async () => {
  
  const products = await db.query.productsTable.findMany();
  const teste = await db.select({
    title : productsTable.title
  })
  .from(productsTable)

  return {
    products,
    teste
  };
}) satisfies PageServerLoad;