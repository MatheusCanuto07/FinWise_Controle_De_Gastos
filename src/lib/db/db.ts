import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { config } from 'dotenv';

import * as schema from "./schema";

config({ path: '.env' });

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN
});

export const db = drizzle(client, {schema: schema});