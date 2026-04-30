import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config();

// postgres://<username>:<password>@<host>:<port>/<db_name>
const db = drizzle(process.env.DATABASE_URL);

export default db;
