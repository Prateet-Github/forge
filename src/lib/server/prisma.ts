import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "$env/dynamic/private";

console.log("DB URL:", env.DATABASE_URL);

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

export default prisma;