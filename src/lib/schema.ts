import { privateDecrypt } from "crypto";
import { float } from "drizzle-orm/mysql-core";
import { sqliteTable, int, text, real, integer, primaryKey } from "drizzle-orm/sqlite-core";

// Tabela de Administradores
export const adminTable = sqliteTable("administradores", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  date: text("date").notNull(),
});

// Tabela de Produtos (Itens do cardápio)
export const productsTable = sqliteTable("produtos", {
  id: int("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  titleServe: text("titleServe").notNull(),
  price: real("price").notNull(),
  img: text("img"),
});

// Tabela de Categorias
export const categoriesTable = sqliteTable("categorias", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
});

// Tabela Intermediária para relação muitos-para-muitos (Produtos <-> Categorias)
export const productCategoriesTable = sqliteTable(
  "produto_categorias",
  {
    productId: integer("product_id")
      .notNull()
      .references(() => productsTable.id),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categoriesTable.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.categoryId] }),
  })
);

// Tabela para Clientes (Futura, propósitos adicionais)
// export const clientesTable = sqliteTable("clientes", {
//   id: int("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").notNull(),
//   password: text("password").notNull(),
//   createdAt: text("created_at"),
//   updatedAt: text("updated_at"),
// });

// Inferência automática de tipo para produtos

export type Product = typeof productsTable.$inferSelect;