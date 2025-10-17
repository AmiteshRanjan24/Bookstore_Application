const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");
const authMiddleware = require("../middlewares/auth");
const { validateBook } = require("../middlewares/validation");

router.use(authMiddleware);

router.post("/", validateBook, booksController.createBook);
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.patch("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
