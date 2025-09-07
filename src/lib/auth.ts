import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "$lib/db/db"; 
import * as authSchemas from "$lib/db/schema/auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: authSchemas,
  }),
  emailAndPassword: {
    enabled: true, 
  }, 
});

