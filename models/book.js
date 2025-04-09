const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
