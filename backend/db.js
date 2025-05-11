import postgres from "postgres";
import { configDotenv } from "dotenv";
configDotenv();

export const sql = postgres(process.env.DATABASE_URL);

