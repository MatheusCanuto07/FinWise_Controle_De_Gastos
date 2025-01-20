import * as s from './schema'
import { desc, eq, sql } from 'drizzle-orm'
import { db } from './db'

export const queries = () => ({
  teste : async () => {
    const result = await db
    .select()
  }
  // const teste = await db.select({
  //     title : productsTable.title
  //   })
  //   .from(productsTable)
})