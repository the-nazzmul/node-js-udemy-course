import express from "express";
import { loggerMiddleware } from "./middlewares/logger.js";
import { bookRouter } from "./routes/book.route.js";

const app = express();
const PORT = 8000;

//Middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
