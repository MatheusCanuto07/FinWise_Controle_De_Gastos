import type { LayoutServerLoad } from './$types';
import {selectTransactions} from "$lib/db/Controller";

export const load = (async ({url}) => {
  
  const startDate = new Date();
  const endDate = new Date();
  const transactions = await selectTransactions(startDate, endDate);
    
  return {

  };
}) satisfies LayoutServerLoad;