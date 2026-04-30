import express from "express";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
} from "../controllers/book.controller";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", createBook);

router.delete("/:id", deleteBookById);

export { router as bookRouter };
