import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { authorsTable } from "../models/author.model.js";
import { booksTable } from "../models/book.model.js";

export const getAllAuthors = async (req, res) => {
  const authors = await db.select().from(authorsTable);
  return res.json(authors);
};

export const getAuthorById = async (req, res) => {
  const id = req.params.id;
  const [author] = await db
    .select()
    .from(authorsTable)
    .where(eq(authorsTable.id, id));

  if (!author) {
    return res.status(404).json({ message: `Author not found` });
  }

  return res.json(author);
};

export const createAuthor = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || firstName === "") {
    return res.status(400).json({ message: `First name is required` });
  }
  if (!email || email === "") {
    return res.status(400).json({ message: `Email is required` });
  }

  const [result] = await db
    .insert(authorsTable)
    .values({ firstName, lastName, email })
    .returning({ id: authorsTable.id });
  return res.status(201).json({ message: `Author created`, id: result.id });
};

export const getBooksByAuthorId = async (req, res) => {
  const id = req.params.id;

  const [author] = await db
    .select()
    .from(authorsTable)
    .where(eq(authorsTable.id, id));
  if (!author) {
    return res.status(404).json({ message: `Author not found` });
  }

  const books = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.authorId, id));
  if (books.length === 0) {
    return res.status(404).json({ message: `No books found for author` });
  }
  return res.json(books);
};
