const Book = require("../models/book");

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid book data", error: error.message });
  }
};

// Get all books with optional filters
exports.getAllBooks = async (req, res) => {
  try {
    const { author, category, rating, title } = req.query;
    const query = {};

    if (author) query.author = author;
    if (category) query.category = category;
    if (rating) query.rating = Number(rating);
    if (title) query.title = { $regex: title, $options: "i" }; // Case-insensitive partial match

    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching books", error: error.message });
  }
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching book", error: error.message });
  }
};

// Update book by ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid update data", error: error.message });
  }
};

// Delete book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting book", error: error.message });
  }
};
