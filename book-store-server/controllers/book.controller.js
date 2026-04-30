import { BOOKS } from "../models/book.js";

export const getAllBooks = (req, res) => {
  res.json(BOOKS);
};

export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: `The id must be of number` });

  const book = BOOKS.find((b) => b.id === id);

  if (!book)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist!` });

  return res.json(book);
};

export const createBook = (req, res) => {
  const { title, author } = req.body;

  if (!title || title === "")
    return res.status(400).json({ message: `title is required` });
  if (!author || author === "")
    return res.status(400).json({ message: `author is required` });

  const id = BOOKS.length + 1;

  const book = { id, title, author };

  BOOKS.push(book);

  return res.status(201).json({ message: `Book creation successful`, id });
};

export const deleteBookById = (req, res) => {
  (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id))
      return res.status(400).json({ error: `id must be of type number` });

    const indexToDel = BOOKS.findIndex((b) => b.id === id);

    if (indexToDel < 0)
      return res
        .status(404)
        .json({ error: `Book with id ${id} does not exist` });

    BOOKS.splice(indexToDel, 1);

    return res.status(200).json({ message: `Book deleted` });
  };
};
