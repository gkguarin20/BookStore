const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  authors: { type: Array },
  coverImageUrl: { type: String, require: false },
  gener: { type: String, require: false },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
