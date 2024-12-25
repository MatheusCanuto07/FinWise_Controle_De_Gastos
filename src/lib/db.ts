import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

const client = createClient({
  url: "libsql://template-matheuscanuto07.aws-us-east-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzUwNzk2MTksImlkIjoiOWE4M2ZkZGEtYzJmOC00MWNmLWJlMjEtMGE0ZTIxMWZlMDQ5In0.TtdK7VK_V34faF4tE2OOTtQQAPf61ehDB2rTqmqf7B7mEVpmNpHGUrRouYmU7AWV_V8yLua_AwLnehtVobNMCQ"
});

export const db = drizzle(client, {schema: schema});