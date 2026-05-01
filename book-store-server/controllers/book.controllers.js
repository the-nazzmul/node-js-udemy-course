import { eq, sql } from "drizzle-orm";
import { booksTable } from "../models/book.model.js";
import db from "../db/index.js";
import { authorsTable } from "../models/author.model.js";

export const getAllBooks = async (req, res) => {
  const search = req.query.search;

  if (search) {
    const books = await db
      .select()
      .from(booksTable)
      .where(
        sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`,
      );
    return res.json(books);
  }
  const books = await db.select().from(booksTable);
  return res.json(books);
};

export const getBookById = async (req, res) => {
  const id = req.params.id;

  const [book] = await db
    .select()
    .from(booksTable)
    .where((table) => eq(table.id, id))
    .leftJoin(authorsTable, eq(booksTable.authorId, authorsTable.id))
    .limit(1);

  if (!book)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist!` });

  return res.json(book);
};

export const createBook = async (req, res) => {
  const { title, authorId, description } = req.body;

  if (!title || title === "")
    return res.status(400).json({ message: `title is required` });

  const [result] = await db
    .insert(booksTable)
    .values({ title, authorId, description })
    .returning({ id: booksTable.id });

  return res
    .status(201)
    .json({ message: `Book creation successful`, id: result.id });
};

export const deleteBookById = async (req, res) => {
  const id = req.params.id;

  await db.delete(booksTable).where(eq(booksTable.id, id));

  return res.status(200).json({ message: `Book deleted` });
};
