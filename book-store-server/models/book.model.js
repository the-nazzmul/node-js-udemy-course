import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { authorsTable } from "./author.model";

export const booksTable = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 100 }).notNull(),
  description: text(),
  authorId: uuid()
    .references(() => authorsTable.id)
    .notNull(),
});
