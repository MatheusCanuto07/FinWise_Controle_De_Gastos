import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";

export const testSvelte = sqliteTable("testSvelte", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull()
})  
