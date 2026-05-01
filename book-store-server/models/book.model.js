import { index, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { authorsTable } from "./author.model.js";
import { sql } from "drizzle-orm";

export const booksTable = pgTable(
  "books",
  {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({ length: 100 }).notNull(),
    description: text(),
    authorId: uuid()
      .references(() => authorsTable.id)
      .notNull(),
  },
  (table) => [
    index("title_index").using(
      "gin",
      sql`to_tsvector('english', ${table.title})`,
    ),
  ],
);
