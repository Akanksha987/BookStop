const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  edition: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: String,
  cover_id: {
    type: String,
    required: true,
  },
});
const books = mongoose.model("books", bookSchema);
module.exports = bookSchema;
