import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  getBooksByAuthorId,
} from "../controllers/author.controllers.js";

const router = express.Router();

router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);
router.post("/", createAuthor);
router.get("/:id/books", getBooksByAuthorId);

export { router as authorRouter };
