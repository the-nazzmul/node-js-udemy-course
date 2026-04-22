import express from "express";

const app = express();
const PORT = 8000;

//In Memory Database
const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

//Middlewares
app.use(express.json());

// Routes

app.get("/books", (req, res) => {
  res.setHeader("x-piy", "Nazmul Hussain");
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: `The id must be of number` });

  const book = books.find((b) => b.id === id);

  if (!book)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist!` });

  return res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || title === "")
    return res.status(400).json({ message: `title is required` });
  if (!author || author === "")
    return res.status(400).json({ message: `author is required` });

  const id = books.length + 1;

  const book = { id, title, author };

  books.push(book);

  return res.status(201).json({ message: `Book creation successful`, id });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });

  const indexToDel = books.findIndex((b) => b.id === id);

  if (indexToDel < 0)
    return res.status(404).json({ error: `Book with id ${id} does not exist` });

  books.splice(indexToDel, 1);

  return res.status(200).json({ message: `Book deleted` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
